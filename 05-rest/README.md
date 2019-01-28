# Express Server

This express server connect to a mongodb (localhost:27017).

It is good to use a docker for mongodb but not required.

# Deployment

Install docker on your platform.

## Local

Build the angular app with `local` configuration.

### Build Angular app


```
cd 06-deploy
cd 01-angular
ng build --configuration=local
```
### Start the MongoDB database

If you need to prune some container and volume (dev only):
```
npm run docker:prune
```

If you need to create the volume where mongo will store its data:
```
npm run docker:mongodata
```

To start Mongo:
```
npm run docker:mongo
```

### Start the express server

```
npm run express
```

