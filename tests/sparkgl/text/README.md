# General
There are few different tests defined in App.js. Only one can be imported at a time. 
Uncomment one of the "import" dirs and build a bundle.

# Building for Spark
```
npm i
npm run release-spark
cd dist/spark
npm i
Then run dist/spark/lightning-demo-spark.js
```
# Building for the web
You'll need a web server to run the bundle. One of the possibilities is `instant-server`:
```
npm install -g instant-server
npm i
npm run release-web
cd dist/web
instant -p 8081 ./
```
Then open http://localhost:8081

