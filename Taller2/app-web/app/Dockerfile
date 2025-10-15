FROM node:22-alpine

WORKDIR /usr/src/app
COPY app.js .
RUN npm install express mysql2

EXPOSE 3000

CMD ["node", "app.js"]
