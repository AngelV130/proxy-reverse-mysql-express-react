FROM node:latest AS build

WORKDIR /app

COPY ./api /app

RUN npm install

EXPOSE 3000



# # Utilizar la imagen base de Node.js
# FROM node:latest

# # Establecer el directorio de trabajo en /app
# WORKDIR /app

# # Copiar el código de la aplicación desde el contexto de construcción al directorio de trabajo en el contenedor
# COPY ./api /app

# # Establecer los volúmenes
# VOLUME ["/app"]

# # Especificar el comando para ejecutar la aplicación al iniciar el contenedor
# CMD ["npm", "start"]

# # Exponer el puerto 3000
# EXPOSE 3000
