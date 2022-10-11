FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
# COPY ./package.json ./package-lock.json ./
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install
WORKDIR /opt/app
COPY ./ .

# 构建 admin ui
RUN npm run build
EXPOSE 1337

# start 与 devlope 的区别是：start 模式下不支持修改 entity 的结构，原因是 start 模式下不支持 auto restart
CMD ["npm", "run", "start"]
