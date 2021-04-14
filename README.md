# Music-Genre-Classification-Model-Web-APP

## Overview

This project is a React.js webapp based on a Python Fast API seving a Tensorflow Neural Network ([link](https://github.com/andbluedevMusic-Genre-Classification-Model-REST-API)).

This repository contains the React.js webapp.

The project also uses sass (`.scss`) files instead of` .css`. Overall it works the same, any classic css will work fine but it is possible to use functions and variables for the css (very useful).


## Context

This project aims to predict the genre of a given song file using Data Science and Machine Learning techniques.

This repository contains the REST API built using Fast API that serves the [Tensorflow](https://github.com/tensorflow/tensorflow) model and [librosa](https://github.com/librosa/librosa) to extract features from uploaded MP3 files.

## Live Demo

![https://res.cloudinary.com/djeszd2cw/image/upload/v1613837192/classify/classify-screen_egx3at.png](https://res.cloudinary.com/djeszd2cw/image/upload/v1613837192/classify/classify-screen_egx3at.png)

- Web application: [https://classify.k8s.pouretadev.com/](https://classify.k8s.pouretadev.com/)

## Related Repositories

- Backend - REST API: [https://github.com/andbluedev/Music-Genre-Classification-Model-REST-API](https://github.com/andbluedev/Music-Genre-Classification-Model-REST-API)
- Project Notebooks: [https://github.com/andbluedev/Music-Genre-Classification-Notebooks](https://github.com/andbluedev/Music-Genre-Classification-Notebooks)


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
docker build -t classify-front:v1 .
```  

Run the container on port 3000 :  
```
docker run -d -p 3000:80 classify-front:v1
```
