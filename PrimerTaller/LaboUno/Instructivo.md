## Mini-Laboratorio: Despega tu primera imagen Docker 🚀

### Objetivo:

* Este instructivo te guiará en el proceso de crear una imagen Docker y ejecutar un contenedor para mostrar tu página web personalizada con tu perfil de LinkedIn.

### 🛠️ Requisitos previos:

* Docker: Asegúrate de tener Docker instalado en tu sistema. Puedes descargarlo e instalarlo desde el sitio web oficial de Docker: https://www.docker.com/get-started

### 📂 Estructura de archivos:

Crea la siguiente estructura de carpetas y archivos en tu computadora:

mi_sitio_web/
├── sitio/
│   └── index.html
└── Dockerfile

1. **Paso 1: Crear el archivo Dockerfile**

* En la raíz de la carpeta mi_sitio_web, crea un archivo llamado Dockerfile (sin extensión).

* Copia y pega el siguiente contenido en el archivo Dockerfile:

```FROM nginx:latest

# Path: /usr/share/nginx/html
COPY /sitio /usr/share/nginx/html```

2. **Paso 2: Crear el archivo index.html**

* Dentro de la carpeta sitio, crea un archivo llamado index.html.

* Copia y pega el siguiente código HTML en el archivo index.html, reemplazando la URL de LinkedIn y la URL de tu imagen de perfil con tus propias URL:

```<!DOCTYPE html>
<html>
<head>
<title>Mi primera imagen Docker</title>
</head>
<body>
<style>
  /* ... (tu código CSS aquí) ... */
</style>

  <p class="greeting">Hola! Mi nombre es [Tu Nombre],</p>

  <a href="[Tu URL de LinkedIn]" target="_blank"> 
    <img class="profile-image" src="[Tu URL de imagen de perfil de LinkedIn]" alt="Mi foto de perfil de LinkedIn">
  </a>

  <p>Y esta es mi primera imagen Docker :)</p>

  <a href="[Tu URL de LinkedIn]" target="_blank" class="linkedin-button">
    S&iacute;gueme en LinkedIn
  </a>b
</body>
</html>```

3. **Paso 3: Construir la imagen Docker**

* Abre una terminal o línea de comandos y navega hasta la carpeta mi_sitio_web.

* Ejecuta el siguiente comando para construir la imagen Docker:

------

docker build -t mi-sitio-web .

------

Esto creará una imagen Docker llamada mi-sitio-web.

4. **Paso 4: Ejecutar el contenedor Docker**

* Ejecuta el siguiente comando para iniciar un contenedor a partir de la imagen que acabas de crear:

------

docker run -d -p 80:80 mi-sitio-web

------

-d: Ejecuta el contenedor en segundo plano (modo detached).
-p 80:80: Mapea el puerto 80 del contenedor al puerto 80 de tu máquina local.

5. **Paso 5: Acceder a tu sitio web**

Abre tu navegador web y ve a http://localhost. Deberías ver tu página web personalizada con tu perfil de LinkedIn.