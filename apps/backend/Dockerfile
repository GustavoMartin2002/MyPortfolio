FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm prune --production
EXPOSE 3000
CMD ["node", "./src/index.js"]