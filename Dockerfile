FROM node:14.9
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .

EXPOSE 3000
 
RUN npm run build

CMD ["npx", "serve", "-s", "build"]
