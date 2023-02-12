# Use uma imagem Node.js como base
FROM node:14

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos da sua aplicação para o diretório de trabalho
COPY . .

# Instale as dependências
RUN npm install

# Compile a aplicação Vue.js
RUN npm run build

# Defina a porta na qual a aplicação irá escutar
EXPOSE 8080

# Defina o comando para iniciar a aplicação
CMD [ "npm", "run", "serve" ]
