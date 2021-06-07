# Giraffe Sample (React)

## Dependencies to Install
`@influxdata/giraffe`

`@influxdata/influxdb-client`

`@influxdata/influxdb-client-giraffe`

## Environment Variables
Replace `http://localhost:8086`, `my-token`, `my-org`, and `my-bucket` in `env.js`.
* url should correlate with the server being used (https://docs.influxdata.com/influxdb/cloud/reference/regions/)
* `my-org` can be the ID or the name
* `my-bucket` has to be the bucket name

## Customize
- In `RenderResults`, modify `mosaicLayerConfig` and `config` accordingly as you modify the query, dataset, or want to custimize the render.
    - https://github.com/influxdata/giraffe/tree/master/giraffe#layerconfig
    - https://github.com/influxdata/giraffe/tree/master/giraffe#config
- `queryString` in `componentDidMount`can be modified to do any FLux query from a bucket.

## Other Data
`nflCSV.tsx` is a CSV file from Flux, and it is used in the commented in the function `componentDidMount()`. 
To view that data set, comment out the other code in `componentDidMount()`, remove the comments wrapping, and modify mosaicLayerConfig accordingly.

      const dataFromFlux = fromFlux(nfl);
      this.setState({
        data: dataFromFlux.table
      });
