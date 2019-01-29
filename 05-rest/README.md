# Express Server in local

This express server connect to a mongodb (localhost:27017).

It also have a HTTPS protocol.

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

### Setup HTTPS locally

The purpose is to allow HTTPS running in development.
We create a fake certificate for domain name  `localhost`.

To create the fake certificate, open a bash.
```
$ cd ./config-https
$ bash getCA.sh
```

Follow the questions.

It will create an `./config-https/out` directory with the HTTPS certificates.

#### Running on Chrome

You install the RA Certificate in you google chrome in the "Manage Certificates" > "Trusted Root Certification Authorities".
The file to import is :
```
./config-https/out/rootCA.pem
```


### Start the express server

```
npm start
```

Then open chrome in :
```
http://localhost:9000
```

Test if listing and creating tickets are working.

### Author
Jean-Louis GUENEGO @2019

