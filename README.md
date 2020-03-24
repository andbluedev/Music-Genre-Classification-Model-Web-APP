# RoomFix Frontend

Ce projet est une webapp react qui repose sur une API Spring Boot Boot.
Le projet utilise également des fichier sass (`.scss`) à la place des `.css`. Globalement ça marhe pareil, tout css classique fonctionnera convenablement mais il est possible d'utiliser des fonction et des variables pour le css (très utile).

## Installation du projet

Il est recommandé d'utiliser yarn comme gestionnaire de paquet npm.

Installation des paquets npm
```
yarn install
```

runner en local

```
yarn start
```


Si besoin il faut changer l'url du backend dans le fichier `.env`, la nom de la variable est : `REACT_APP_API_URI`.



Il faut également configurer votre IDE pour eslinctrc afin que tout le monde puisse respecter les mêmes conventions de dev.

## Docker

Builder l'imaage Docker : 
```
docker build -t roomfix-front:v1 .
```  

Runner le container sur le port 3000 de la machine.  
```
docker run -d -p 3000:80 roomfix-front:v1 
```
