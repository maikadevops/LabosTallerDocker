# Argumentos para personalizar la imagen
ARG NODE_ENV=18
ARG PORT=3000

# Imagen base
FROM node:${NODE_ENV}-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar dependencias (solo producción en modo producción)
RUN npm install --only=production

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto de la aplicación
EXPOSE ${PORT}

# Comando para iniciar la aplicación
CMD ["npm", "start"]

# Definir un volumen para datos persistentes
VOLUME /app/data

# Chequeo de salud para verificar si la aplicación está respondiendo
HEALTHCHECK --interval=30s --timeout=5s \
  CMD curl -f http://localhost:${PORT}/health || exit 1

# Instrucción ONBUILD para proyectos que usen esta imagen como base
ONBUILD RUN npm run build
