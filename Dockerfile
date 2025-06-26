# Usa una imagen oficial de Node.js
FROM node:20

# Crea el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Construye la app
RUN npm run build

# Expone el puerto que usa Next.js
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
