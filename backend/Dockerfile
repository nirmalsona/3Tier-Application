FROM ubuntu

WORKDIR /app

RUN apt update && apt-get install -y \
curl \
gnupg \
nodejs \
npm \

&& rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install express mongoose


COPY . .

EXPOSE 3000


CMD ["node", "server.js"]

 

