FROM node:20.10.0-alpine
WORKDIR /frontend/voda
COPY ./frontend/voda ./frontend/voda
RUN npm install
COPY  ./frontend/voda ./frontend/voda
RUN npm run build
