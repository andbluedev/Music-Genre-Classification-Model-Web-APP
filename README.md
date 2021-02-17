# Music-Genre-Classification-Model-Web-APP

## Context

This project is a React.js webapp based on a Python Fast API seving a Tensorflow Neural Network ([link](https://github.com/andbluedevMusic-Genre-Classification-Model-REST-API)).

This repository contains the React.js webapp.

The project also uses sass (`.scss`) files instead of` .css`. Overall it works the same, any classic css will work fine but it is possible to use functions and variables for the css (very useful).


## Online Version 

Demo version of the application: https://classify.k8s.pouretadev.com


## Development

For this project, it is recommended to use [yarn](https://classic.yarnpkg.com/en/docs/install) to manage npm packages.

Installing dependencies

```
yarn install
```

### Run the APP

```
yarn start
```

If necessary, you may need to change the backend url in the `.env` file, the name of the variable is:` REACT_APP_API_URI`.

You also need to configure your IDE for eslinctrc so that everyone can follow the same coding format and conventions.

## Production

The Fast API for production uses Docker, python and uvicorn and is deployed on a kubernetes cluster.

Compiling static files in the / build folder (dev "React" files to "html / css / js" browser-friendly files for the web)":
```
yarn install
yarn build
``` 
Build the Docker image : 
```
docker build -t roomfix-front:v1 .
```  

Run the container on port 3000 :  
```
docker run -d -p 3000:80 roomfix-front:v1 
```
