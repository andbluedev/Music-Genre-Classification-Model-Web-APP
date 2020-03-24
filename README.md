# RoomFix - API

## Configurer les paramètres et le profil

La première chose à faire pour lancer l'application est de configurer les paramètres spécifiques à votre machine.
Tous les paramètres ont des valeurs par défaut faites pour faciliter la première prise en main.

| Usage            | Format               | Valeur par défaut      | Variable à modifier    |
|------------------|----------------------|------------------------|------------------------|
| BDD              | user:mdp@host/dbname | root@localhost/roomfix | DB_URL                 |


[Modifier facilement ce tableau sur TablesGenerator](https://www.tablesgenerator.com/markdown_tables)


## Le profil de développement

Nous utilisons [les profiles Spring](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html)
pour configurer les variables spécifiques à chaque environnement (dev, production, etc.).

Pour lancer l'application en local, vous devez la lancer avec le profil `dev`.

* Avec IntelliJ : [suivre ce tuto sur Stacko](https://stackoverflow.com/a/39775038/7248759)
* Avec Maven et le plugin : `./mvnw spring-boot:run -Dspring.profiles.active=dev`

## Les plugins Intellij recommandés

- Lombok : pour les POJO (java beans) nous utilisons @data pour auto-générer les getters, setters et constructeur. Ce plugin à ajouter
à Intellij permet de faire comprendre à l'IDE que ces fonctions existent mais ne sont pas écrites explicitement.
(Evite que l'IDE dise qu'il ne trouve pas les fonctions)


## Les Endpoints

Toutes les endpoints sont sur la collection postman associée au repo.







