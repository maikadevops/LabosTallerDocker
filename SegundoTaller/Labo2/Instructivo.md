# Ejercicio: Gestión de Datos con Volúmenes en Docker

## Objetivo:

* Aprender a utilizar los tres tipos principales de volúmenes en Docker: bind mounts, named volumes y tmpfs mounts.
*Comprender cómo cada tipo de volumen afecta la persistencia y el rendimiento de los datos.

## Prerrequisitos:

* Docker instalado y en funcionamiento.
* Node.js y npm instalados.

## Preparación:

* Ten los archivos index.js, package.json, y el Dockerfile en el mismo directorio.

**Paso 1: Construir la Imagen Docker**

* Abre tu terminal y navega al directorio donde se encuentran tus archivos.
* Ejecuta el siguiente comando para construir la imagen Docker:

```Bash
docker build -t mi-contador .
```

**Paso 2: Experimentar con Volúmenes**

#### a) Volumen Anónimo:

1. Ejecutar el contenedor:

``` Bash
docker run -d -p 3000:3000 --name mi-app-contador -v /app/data mi-contador
```

2. Verificar el volumen:

``` Bash
docker inspect mi-app-contador
```

* Busca la sección "Mounts" en la salida. Deberías ver un volumen con un nombre largo y aleatorio (por ejemplo, 2a9c28f09...). Este es el volumen anónimo que Docker creó automáticamente.

3. Probar el contador: 

Abre tu navegador y visita http://localhost:3000. Refresca varias veces y observa cómo aumenta el contador.

4. Detener y eliminar el contenedor:

``` Bash
docker stop mi-app-contador
docker rm mi-app-contador
```

5. Verificar la pérdida de datos: 
Vuelve a ejecutar el contenedor con `docker run -d -p 3000:3000 --name mi-app-contador -v /app/data mi-contador` y notarás que el contador se reinicia a 0 porque los datos se almacenaron en un volumen anónimo que fue eliminado con el contenedor.

#### b) Volumen Nombrado:

1. Crear el volumen:

``` Bash
docker volume create contador-volumen
```

2. Ejecutar el contenedor:

``` Bash
docker run -d -p 3000:3000 --name mi-app-contador -v contador-volumen:/app/data mi-contador
```
3. Probar el contador: Interactúa con el contador en tu navegador.

4. Detener y eliminar el contenedor:

``` Bash
docker stop mi-app-contador
docker rm mi-app-contador
```

5. Verificar la persistencia de datos: 

Vuelve a ejecutar el contenedor con el mismo comando y verás que el contador mantiene su valor porque los datos se almacenaron en el volumen nombrado contador-volumen.

#### c) Bind Mount (Montaje de Enlace):

1. Crear un directorio local: Crea una carpeta en tu máquina (por ejemplo, C:\Users\mesteves\Documents\DockerTaller\volumen).

2. Ejecutar el contenedor:

``` Bash
docker run -d -p 3000:3000 --name mi-app-contador -v //c/Users/mesteves/Documents/DockerTaller/volumen:/app/data mi-contador
```

* Asegúrate de reemplazar //c/Users/mesteves/Documents/DockerTaller/volumen con la ruta real de tu carpeta.
* Modifica el directorio local en Windows adaptado para Docker. Es importante usar barras dobles (//) al principio y barras inclinadas simples (/) en el resto de la ruta.

3. Probar el contador: Interactúa con el contador en tu navegador.

4. Verificar el archivo local: Abre la carpeta //c/Users/mesteves/Documents/DockerTaller/volumen en tu sistema de archivos. Deberías ver un archivo llamado contador.txt que contiene el valor actual del contador.

***Observaciones Importantes:***

* -v /app/data: Esta opción es crucial para montar un volumen (anónimo o nombrado) en el directorio /app/data dentro del contenedor, permitiendo que el archivo contador.txt persista.
* Verifica siempre la salida de docker inspect: Después de ejecutar el contenedor, usa docker inspect mi-app-contador para confirmar que el volumen se ha montado correctamente en la sección "Mounts".
* Permisos: Si tienes problemas de permisos con bind mounts, ajusta los permisos del directorio local o usa --user en docker run.
