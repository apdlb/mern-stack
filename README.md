# mern-stack

## Setup con Docker

Use [docker-compose](https://docs.docker.com/compose/) para levantar el stack. Los datos son éfimeros y los contenedores desaparecerán cuando el stack se baje.

Para levantar,

    $ docker-compose up

Navega a http://localhost:3001 para verificar la app.

Para bajar,

    $ docker-compose down

Este stack está en modo de desarrollo, todos los cambios que realice en el código volverán a recargar automáticamente ambas aplicaciones.
