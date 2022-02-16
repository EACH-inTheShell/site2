FROM node

WORKDIR /srv/site/
COPY ./site/ /srv/
RUN npm install

CMD npm start
