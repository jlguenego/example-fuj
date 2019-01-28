# Example FUJ

Example for making a full JS app.

# Deployment

Install docker on your platform.

## Local

Build the angular app with `local` configuration.

```
cd 06-deploy
cd 01-angular
ng build --configuration=local
```

```
docker run --name my-mongo -d -p 27017:27017 -v /data:/data/db mongo
```

```
cd 05-rest
npm start
```

```
cd 06-deploy
cd 02-docker
npm start
```
