/* global Plotly */
// Plot.js
import React from 'react';

class Plot extends React.Component {

  componentDidMount() {
    Plotly.newPlot('plot');
  }

  render() {
    return (
      <div id="plot">I AM PLOT</div>
    );
  }
}

export default Plot;