FROM cypress/browsers:node14.17.0-chrome91-ff89

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY ./cypress.config.js .
COPY ./cypress ./cypress

ENTRYPOINT ["npx", "cypress", "run"]

CMD [""]