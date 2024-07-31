FROM node:18-alpine

# Crear directorio de trabajo y establecer permisos
WORKDIR /app
RUN chown -R node:node /app

# Cambiar a usuario no root por seguridad
USER node

# Copiar archivos de la aplicación
COPY package*.json ./
RUN npm install

RUN mkdir -p /app/data

COPY index.js ./

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]