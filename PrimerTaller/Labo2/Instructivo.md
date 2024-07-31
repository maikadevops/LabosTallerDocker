## Mini-Laboratorio: Jugando Super Mario Bros en Docker 🚀

### Objetivo:

* Experimentar con Docker ejecutando un juego clásico en un contenedor.
* Aprender a usar imágenes Docker preconstruidas.
* Configurar el redireccionamiento de puertos para jugar desde el navegador.

### 🛠️ Requisitos previos:

* Docker: Asegúrate de tener Docker instalado en tu sistema.

**Paso 1: Obtener la Imagen de Docker**

``` bash
docker pull pengbai/docker-supermario
```

**Paso 2: Ejecutar el Contenedor**

``` bash
docker run -d -p 8600:8080 pengbai/docker-supermario
```

**Paso 3: Jugar a Super Mario Bros**

* Abre tu navegador web y visita http://localhost:8600. 

¡Deberías ver el juego Super Mario Bros listo para jugar!

**Paso 4: Detener el Contenedor (Opcional)**

``` bash
docker stop <ID_DEL_CONTENEDOR>
```

Reemplaza <ID_DEL_CONTENEDOR> con el ID del contenedor que obtuviste al ejecutarlo en el paso 2. Puedes encontrar el ID del contenedor ejecutando docker ps.

**Para mayor información sobre la imagen docker con el juego de supermario, visita:**

https://hub.docker.com/r/pengbai/docker-supermario