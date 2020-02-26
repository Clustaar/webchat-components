FROM weboaks/node-karma-protractor-chrome:xvfb
WORKDIR /webchat_components_image

COPY package.json /webchat_components_image
RUN npm install -g @angular/cli
RUN npm install

COPY . /webchat_components_image

#Replace a setting in the Karma test runner to only run once
CMD ["sh", "-c", "google-chrome --version && ng lint && npm run stylelint && ng test"]
