VideoAmp Reporting Microservice
===============================

<img src="http://www.steveheimoff.com/wp-content/uploads/2010/01/carygrant-300x225.jpg" style="float: right; padding-left: 20px; padding-bottom: 20px;"/><br/>

The Reporting API service has two major features:
- a Druid API which takes our custom Druid DSL, transforms the query for Druid, and responds with data from Druid
- a reporting API which stores our Druid DSL in a Postgres queue and sends it off to the [report scheduler](https://github.com/VideoAmp/data-marts/tree/master/core/src/main/scala/com/videoamp/reports/scheduler) for processing

# Run Service
```
yarn start
```

# Running Tests
```
yarn test
```

# Druid Dimensions
For more information on Druid dimensions, run the command below:
```
curl http://druid-broker.prod.use1/druid/v2/datasources/beacon/dimensions
```
