FROM node:22-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY . .

ENV NODE_ENV=production
ENV PORT=7788

EXPOSE 7788

CMD ["node", "server/multiplayer-server.js"]
