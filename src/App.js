import React from 'react';
import { Plot, newTable, fromFlux } from '@influxdata/giraffe';
import { InfluxDB } from '@influxdata/influxdb-client';
import { queryToTable } from '@influxdata/influxdb-client-giraffe';
import { url, token, org, bucket } from './env';

import { nfl } from './data/nflCSV';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  RenderResults () {
    if (Object.keys(this.state.data).length === 0) {
      return (<div style={{textAlign:"center"}}>
        <p>Failure</p>
      </div>);
    } else {
      // adjust y and yLabelColumns as the dataset changes or to expore  
      const mosaicLayerConfig = {
        type: 'mosaic',
        x: "_time",
        y: ["cpu"],
        yLabelColumns: ["cpu"],
        fill: ["_value"],
      };
      const config = {
        table: this.state.data,
        layers: [mosaicLayerConfig],
      }
      return (<Plot config = {config} />)
    }
  }

  async componentDidMount () {
    const queryString = `from(bucket:"${bucket}") |> range(start: -5m) |> filter(fn: (r) => r._measurement == "cpu")`;
    // creates a configuation based on the url and token
    const queryAPI = new InfluxDB({url, token}).getQueryApi(org);
    try {
      const table = await queryToTable(
        queryAPI,
        queryString,
        newTable
      )
      this.setState({
        data: table
      });
    } catch (err) {
      console.log(err);
      this.setState({
        data: {}
      })
    }

    /*
    const dataFromFlux = fromFlux(nfl);
    this.setState({
      data: dataFromFlux.table
    });
    */
  }

  render () {
    const graph = this.RenderResults();

    const style = {
      width: "calc(70vw - 20px)",
      height: "calc(70vh - 20px)",
      margin: "40px",
    };

    return (
      <div>
        <div style = {style} >
          {graph}
        </div>
      </div>
    )
  }
}
       
export default App;
