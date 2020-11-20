FROM node:latest as builder

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm i

COPY [".", "."]

RUN npm run build

FROM nginx:latest

COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html

EXPOSE 80