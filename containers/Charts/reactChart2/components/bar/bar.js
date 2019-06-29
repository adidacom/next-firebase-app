import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { data, barSettings } from './barConfig';

export default class extends Component {
  render() {
    return (
      <Bar
        data={data}
        width={barSettings.width}
        height={barSettings.height}
        options={{ maintainAspectRatio: false }}
      />
    );
  }
}
