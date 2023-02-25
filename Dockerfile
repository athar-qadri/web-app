# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /webapp
COPY . .
RUN yarn install --production
CMD ["node", "app.js"]
EXPOSE 3000
