FROM node:alpine

RUN apk --no-cache add curl
ADD . /app
WORKDIR /app
RUN npm install 

HEALTHCHECK --interval=5m --start-period=5s CMD curl -f localhost:${APP_PORT}/socket.io/?EIO=4&transport=polling
CMD ["npm", "run", "dev"]