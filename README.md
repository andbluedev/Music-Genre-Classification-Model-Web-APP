# RoomFix - React WebApp

<p align="center">
<img width="300" height="300" src="https://i.ibb.co/tKtb8mv/roomfix8-logo-light.png" alt="roomfix8-logo-light">
</p>

## Context

Roomfix is a 4th Year Software Engineering school Web Technologies Project. The goal was to make a platform to report broken devices in a set of buildings to facilitate and optimize the maintenance.

This project is a React.js webapp based on a Spring Boot Boot API ([link](https://github.com/andbluedev/Arizona-Roomfix-Backend/)).

This repository contains the React.js webapp.

The project also uses sass (`.scss`) files instead of` .css`. Overall it works the same, any classic css will work fine but it is possible to use functions and variables for the css (very useful).


## Online Version 

Demo version of the application: http://roomfix.k8s.pouretadev.com/

Admin user
```
username:  admin@isep.fr
password: test
```

Regular classique ("Student") 
```
username:  bob@isep.fr
password: test
```

## Project setup

It is recommended to use [yarn](https://classic.yarnpkg.com/en/docs/install) to manage npm packages.

Installing dependencies
```
yarn install
```

Run locally for development

```
yarn start
```

If necessary, you may need to change the backend url in the `.env` file, the name of the variable is:` REACT_APP_API_URI`.

You also need to configure your IDE for eslinctrc so that everyone can follow the same coding format and conventions.

## Docker

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
