import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import Link from 'next/link';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from '../../components/uielements/menu';
import IntlMessages from '../../components/utility/intlMessages';
// import getDevSidebar from '../../customApp/sidebar';
import SidebarWrapper from './sidebar.style';

import appActions from '../../redux/app/actions';
import Logo from '../../components/utility/logo';
import { rtl } from '../../config/withDirection';
import { siteConfig } from '../../config';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed,
} = appActions;
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === 'MobileView') {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };

  renderView({ style, ...props }) {
    const viewStyle = {
      marginRight: rtl === 'rtl' ? '0' : '-17px',
      paddingRight: rtl === 'rtl' ? '0' : '9px',
      marginLeft: rtl === 'rtl' ? '-17px' : '0',
      paddingLeft: rtl === 'rtl' ? '9px' : '0',
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }

  render() {
    const { app, toggleOpenDrawer, customizedTheme } = this.props;
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const mode = collapsed === true ? 'vertical' : 'inline';
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor,
    };
    const submenuStyle = {
      backgroundColor: 'rgba(0,0,0,0.3)',
      color: customizedTheme.textColor,
    };
    const submenuColor = {
      color: customizedTheme.textColor,
    };
    const url = siteConfig.dashboard;
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width={240}
          className="isomorphicSidebar"
          // onMouseEnter={toggleOpenDrawer}
          // onMouseLeave={toggleOpenDrawer}
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars style={{ height: scrollheight - 70 }}>
            <Menu
              onClick={this.handleClick}
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
              className="isoDashboardMenu"
            >
              <Menu.Item key="mailbox">
                <Link href={`${url}/mailbox`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-android-mail" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.email" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="chat">
                <Link href={`${url}/chat`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-chatbubbles" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.chat" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="invoice">
                <Link href={`${url}/invoice`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-clipboard" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.invoice" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="contacts">
                <Link href={`${url}/contacts`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-android-person-add" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.contacts" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <SubMenu
                key="ecommerce"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-bag" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.ecommerce" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="shop">
                  <Link href={`${url}/shop`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.shop" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="cart">
                  <Link href={`${url}/cart`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.cart" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="checkout">
                  <Link href={`${url}/checkout`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.checkout" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="card">
                  <Link href={`${url}/card`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.cards" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="map"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-map" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.maps" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="googlemap">
                  <Link href={`${url}/googlemap`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.googleMap" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="leafletmap">
                  <Link href={`${url}/leafletmap`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.leafletMap" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="youtubeSearch">
                <Link href={`${url}/youtubeSearch`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-social-youtube" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.youtubeSearch" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="calendar">
                <Link href={`${url}/calendar`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-calendar" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.calendar" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="notes">
                <Link href={`${url}/notes`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-clipboard" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.notes" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="todo">
                <Link href={`${url}/todo`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-android-list" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.todos" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="shuffle">
                <Link href={`${url}/shuffle`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-grid" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.shuffle" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <SubMenu
                key="charts"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-arrow-graph-up-right" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.charts" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="googleChart">
                  <Link href={`${url}/googleChart`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.googleCharts" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="reecharts">
                  <Link href={`${url}/reecharts`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.recharts" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="reactVis">
                  <Link href={`${url}/reactVis`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.reactVis" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="reactChart2">
                  <Link href={`${url}/reactChart2`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.reactChart2" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="reactTrend">
                  <Link href={`${url}/reactTrend`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.reactTrend" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="Forms"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-android-mail" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.forms" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="inputField">
                  <Link href={`${url}/inputField`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.input" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="editor">
                  <Link href={`${url}/editor`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.editor" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="FormsWithValidation">
                  <Link href={`${url}/FormsWithValidation`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.formsWithValidation" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="progress">
                  <Link href={`${url}/progress`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.progress" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="button">
                  <Link href={`${url}/button`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.button" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="tab">
                  <Link href={`${url}/tab`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.tab" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="checkbox">
                  <Link href={`${url}/checkbox`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.checkbox" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="radiobox">
                  <Link href={`${url}/radiobox`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.radiobox" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="selectbox">
                  <Link href={`${url}/selectbox`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.selectbox" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="transfer">
                  <Link href={`${url}/transfer`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.transfer" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="autocomplete">
                  <Link href={`${url}/autocomplete`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.autocomplete" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="uielements"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-leaf" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.uiElements" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="op_badge">
                  <Link href={`${url}/op_badge`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.badge" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="op_card">
                  <Link href={`${url}/op_card`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.card2" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="op_carousel">
                  <Link href={`${url}/op_carousel`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.corusel" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="op_collapse">
                  <Link href={`${url}/op_collapse`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.collapse" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="op_popover">
                  <Link href={`${url}/op_popover`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.popover" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="op_tooltip">
                  <Link href={`${url}/op_tooltip`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.tooltip" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="op_tag">
                  <Link href={`${url}/op_tag`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.tag" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="op_timeline">
                  <Link href={`${url}/op_timeline`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.timeline" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="dropdown">
                  <Link href={`${url}/dropdown`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.dropdown" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="pagination">
                  <Link href={`${url}/pagination`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.pagination" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="rating">
                  <Link href={`${url}/rating`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.rating" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="tree">
                  <Link href={`${url}/tree`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.tree" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="advancedUielements"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-flash" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.advancedElements" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="reactDates">
                  <Link href={`${url}/reactDates`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.reactDates" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="codeMirror">
                  <Link href={`${url}/codeMirror`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.codeMirror" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="uppy">
                  <Link href={`${url}/uppy`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.uppy" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="dropzone">
                  <Link href={`${url}/dropzone`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.dropzone" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="feedback"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-thumbsup" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.feedback" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="alert">
                  <Link href={`${url}/alert`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.alert" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="modal">
                  <Link href={`${url}/modal`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.modal" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="message">
                  <Link href={`${url}/message`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.message" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="notification">
                  <Link href={`${url}/notification`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.notification" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="popconfirm">
                  <Link href={`${url}/popconfirm`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.popConfirm" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="spin">
                  <Link href={`${url}/spin`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.spin" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="table"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-android-menu" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.tables" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="table_ant">
                  <Link href={`${url}/table_ant`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.antTables" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="pages"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-document" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.pages" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="404">
                  <Link href={'/404'}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.404" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="500">
                  <Link href={'/500'}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.500" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="signin">
                  <Link href={'/signin'}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.signIn" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="signup">
                  <Link href={'/signup'}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.signUp" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="forgotpassword">
                  <Link href={'/forgotpassword'}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.forgotPw" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="resetpassword">
                  <Link href={'/resetpassword'}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.resetPw" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="invoice">
                  <Link href={`${url}/invoice`}>
                    <a className="isoMenuHolder" style={submenuColor}>
                      <span className="nav-text">
                        <IntlMessages id="sidebar.invoice" />
                      </span>
                    </a>
                  </Link>
                </Menu.Item>
                {/*<Menu.Item style={submenuStyle} key="comingSoon">
                  <Link to={`${url}/comingSoon`}>
                    <IntlMessages id="sidebar.comingSoon" />
                  </Link>
                </Menu.Item>*/}
              </SubMenu>
              <SubMenu
                key="sub1"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-android-options" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.menuLevels" />
                    </span>
                  </span>
                }
              >
                <MenuItemGroup
                  key="g1"
                  title={<IntlMessages id="sidebar.item1" />}
                >
                  <Menu.Item style={submenuStyle} key="1">
                    <IntlMessages id="sidebar.option1" />
                  </Menu.Item>
                  <Menu.Item style={submenuStyle} key="2">
                    <IntlMessages id="sidebar.option2" />
                  </Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup
                  key="g2"
                  title={<IntlMessages id="sidebar.item2" />}
                >
                  <Menu.Item style={submenuStyle} key="3">
                    <IntlMessages id="sidebar.option3" />
                  </Menu.Item>
                  <Menu.Item style={submenuStyle} key="4">
                    <IntlMessages id="sidebar.option4" />
                  </Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="githubSearch">
                <Link href={`${url}/githubSearch`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-social-github" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.githubSearch" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="blank_page">
                <Link href={`${url}/blank_page`}>
                  <a className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-document" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.blankPage" />
                    </span>
                  </a>
                </Link>
              </Menu.Item>
            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

export default connect(
  state => ({
    app: state.App,
    customizedTheme: state.ThemeSwitcher.sidebarTheme,
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
