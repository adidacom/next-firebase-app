import React, { Component } from 'react';
import { connect } from 'react-redux';
import WindowResizeListener from 'react-window-size-listener';
import { Debounce } from 'react-throttle';
import { ThemeProvider } from 'styled-components';
import themes from '../config/themes';
import authAction from '../redux/auth/actions';
import appActions from '../redux/app/actions';

const { logout } = authAction;
const { toggleAll } = appActions;

class Header extends Component {
  render() {
    const { selectedTheme } = this.props;
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
      <ThemeProvider theme={themes[selectedTheme]}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.Auth,
  App: state.App,
  selectedTheme: state.ThemeSwitcher.changeThemes.themeName,
});
export default connect(
  mapStateToProps,
  { logout, toggleAll }
)(Header);
