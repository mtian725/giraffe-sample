# Giraffe Mosaic Sample (Using React)

## Dependencies to Install
`@influxdata/giraffe`

`@influxdata/influxdb-client`

`@influxdata/influxdb-client-giraffe`

## Telegraph
Create a Telegraph configuration that monitors your system. Follow the instructions to configure and start Telegraph. This is the data that this sample is built around.  

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

## Start and Run
`npm start` or `yarn start`

<img width="1440" alt="Screen Shot 2021-06-07 at 3 24 14 PM" src="https://user-images.githubusercontent.com/39343323/121076594-972ffa80-c7a4-11eb-97d3-b5b46fc5534d.png">
