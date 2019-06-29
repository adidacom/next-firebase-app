import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Debounce } from 'react-throttle';
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
const WindowResizeListener = dynamic(() =>
  import('react-window-size-listener')
);
const Sidebar = dynamic(() => import('../Sidebar/Sidebar'));
const ThemeSwitcher = dynamic(() => import('../ThemeSwitcher'));
const Topbar = dynamic(() => import('../Topbar/Topbar'));
import themes from '../../config/themes';
import { siteConfig } from '../../config/index';
import appActions from '../../redux/app/actions';
import AppLocale from '../../languageProvider';
import AppHolder from './commonStyle';

const { toggleAll } = appActions;
const { Content, Footer } = Layout;

class Header extends Component {
  render() {
    const { locale, selectedTheme, isLoggedIn } = this.props;
    const currentAppLocale = AppLocale[locale];
    if (this.props.App.height === 0 && process.browser) {
      return (
        <Debounce time="1000" handler="onResize">
          <WindowResizeListener
            onResize={windowSize =>
              this.props.toggleAll(
                windowSize.windowWidth,
                windowSize.windowHeight
              )
            }
          />
        </Debounce>
      );
    }
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <ThemeProvider theme={themes[selectedTheme]}>
            <AppHolder>
              <Layout style={{ height: '100vh' }}>
                <Debounce time="1000" handler="onResize">
                  <WindowResizeListener
                    onResize={windowSize =>
                      this.props.toggleAll(
                        windowSize.windowWidth,
                        windowSize.windowHeight
                      )
                    }
                  />
                </Debounce>
                <Topbar />
                <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                  <Sidebar />
                  <Layout
                    className="isoContentMainLayout"
                    style={{
                      height: '100vh',
                    }}
                  >
                    <Content
                      className="isomorphicContent"
                      style={{
                        padding: '70px 0 0',
                        flexShrink: '0',
                        background: '#f1f3f6',
                        width: '100%',
                      }}
                    >
                      {this.props.children}
                    </Content>
                    <Footer
                      style={{
                        background: '#ffffff',
                        textAlign: 'center',
                        borderTop: '1px solid #ededed',
                      }}
                    >
                      {siteConfig.footerText}
                    </Footer>
                  </Layout>
                </Layout>
                <ThemeSwitcher />
              </Layout>
            </AppHolder>
          </ThemeProvider>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}
const mapStateToProps = state => {
  return {
    App: state.App,
    locale: state.LanguageSwitcher.language.locale,
    selectedTheme: state.ThemeSwitcher.changeThemes.themeName,
  };
};
export default connect(
  mapStateToProps,
  { toggleAll }
)(Header);
