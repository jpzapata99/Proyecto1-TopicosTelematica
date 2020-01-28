# Descripción
Lo que se realizó en este proyecto fue basicamente una aplicación web bajo un stack MERN. El fin principal de está aplicación es poder registrar datos en la BD correspondientes a datos de sensores como: humedad, temperatura, localización. Además, tambien se pueden visualizar los datos recolectados en la base de datos de dos formas:
  - Ingresando un nombre de usuario, se podrá ver los registros asociados especificamente a ese usuario.
  - Sin nombre de usuario, se podrá ver todos los registros de la base de datos.

### Tecnologías usadas
Para la realización de este proyecto se usaron las siguientes tecnologías:
* [Mongo] - Base de datos no relacional
* [node.js] - Entorno de ejecución de js
* [express] - Framework de Nodejs para construir Back end
* [React] - Biblioteca de js para construir interfaces de usuario

### Instalación
Se recomienda [Node.js](https://nodejs.org/) v4+ para correr.
Después de clonar el repositorio, en su terminal realice los siguientes comandos:
```sh
$ cd Proyecto1-TopicosTelematica
$ npm install 
$ npm run dev //Para ejecutar el back-end
```
En  otra consola debemos ejecutar el FRONT-END
```sh
$ npm run webpack
```
### Funcionamiento
Por medio de el programa PostMan realizamos la inserción de los datos, simplemente realizando un POST a nuestro servidor a la dirección http://localhost:3000/api/registro como se ve a continuación:

![Alt text]: {Muestra1.PNG}

Para la visualización de los datos ingresamos a http://localhost:3000/ e ingresamos el nombre de usuario del cual queremos ver los registros, como se ve en la siguiente imagen:

![Alt text]: {Muestra2.PNG}

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [dill]: <https://github.com/joemccann/dillinger>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
[Mongo]: <https://www.mongodb.com/es>
[React]: <https://es.reactjs.org/>
  

