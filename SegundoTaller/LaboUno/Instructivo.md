# Mini-Laboratorio Avanzado: Aplicación Web con React y Node.js en Docker

## Objetivo:

* Construir y ejecutar contenedores Docker para un frontend en React y un backend en Node.js, utilizando instrucciones avanzadas de Dockerfile.
* Simular una conexión a una base de datos MongoDB.
* Demostrar el uso de ARG, VOLUME, EXPOSE, HEALTHCHECK y ONBUILD.

## Prerrequisitos:

* Docker instalado y en funcionamiento.
* Node.js y npm instalados.

## Paso 1: Preparar el Entorno

1. **Clonar el repositorio:**

   URL del repo: 

## Paso 2: Construir las Imágenes Docker

1. **Frontend:**

    Bash

    docker build -t mi-app-frontend ./frontend

2. **Backend:**

    Bash

    docker build --build-arg MONGODB_URI=mongodb://host.docker.internal:27017/mi_app -t mi-app-backend ./backend

## Paso 3: Ejecutar los Contenedores

1. **Backend:**

    Bash

    docker run -d -p 3001:3000 --name mi-app-backend mi-app-backend

2. **Frontend:**

    docker run -d -p 3000:80 --name mi-app-frontend mi-app-frontend

## Paso 4: Probar la Aplicación

1. **Abre tu navegador web y visita http://localhost:3000.**

## Paso 5: Detener y Eliminar los Contenedores (Opcional) ##

    Bash

    docker stop mi-app-frontend mi-app-backend
    docker rm mi-app-frontend mi-app-backend