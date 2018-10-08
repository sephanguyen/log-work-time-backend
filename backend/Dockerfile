FROM node:8
RUN apk update && \
    apk --no-cache add --virtual builds-deps build-base python

COPY . /usr/server

ENV APP_ENV dev



WORKDIR /usr/server

CMD npm i; npm run serve