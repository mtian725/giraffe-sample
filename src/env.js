/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'https://us-east-1-1.aws.cloud2.influxdata.com'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || '6juAAqWKpDi7WO9lBT4qkcxVba36hrZPlGXRgzJB26bh3OOuaR_K4LxLJX9b5ZvGToYtC-NH26OyUhOTO0OcRQ=='
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || '882f0952c1216374'
/**InfluxDB bucket used in examples  */
const bucket = 'mtian\'s Bucket'

module.exports = {
  url,
  token,
  org,
  bucket,
}
