import React, { Component } from 'react';
import { WidgetBox } from './style';

export default class IsoWidgetBox extends Component {
  render() {
    const { children } = this.props;

    const boxStyle = {
      height: this.props.height,
      padding: this.props.padding,
    };

    return (
      <WidgetBox className="isoWidgetBox" style={boxStyle}>
        {children}
      </WidgetBox>
    );
  }
}
