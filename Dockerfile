# Imagen base de Node
FROM node:22-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto
EXPOSE 8080

# Comando de inicio
CMD ["npm", "start"]
