FROM node:carbon

#create app directory
#and move all its contents into that new directory folder
ADD . /nodejschat


WORKDIR /app/nodeJSChat
#this image comes with node.js and NPM already installed

#ADD is the same as copy just add calls urls
COPY index.js /app/nodeJSChat

ADD templates /app/nodeJSChat/templates/
ADD public /app/nodeJSChat/public/

COPY package*.json /app/nodeJSChat/

RUN npm install

EXPOSE 5000

CMD nodejs index.js


