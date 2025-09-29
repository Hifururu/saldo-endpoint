FROM node:22-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json si existe
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto 8080
EXPOSE 8080

# Comando de arranque
CMD ["npm", "start"]
