#Uses lightweight node image as a base, to use npm
FROM node:alpine as builder

#Sets work directory
WORKDIR '/app'

#Installs project dependencies
COPY ./package.json ./
RUN npm install --legacy-peer-deps

#Copies project files - unnecessary due to volume
#but kept for easy migration to different deployment
COPY ./ ./

#Builds project intoto local /app/build/
RUN npm run build

#Nginx base image to serve the built project
FROM nginx

#Copies nginx configuration file, then built project directory
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build/ /usr/share/nginx/html
