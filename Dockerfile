FROM weboaks/node-karma-protractor-chrome:xvfb
WORKDIR /webchat_components_image

# Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    wget -q -O - https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update -qqy && \
    apt-get -qqy install google-chrome-stable && \
    rm /etc/apt/sources.list.d/google-chrome.list && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*

COPY package.json /webchat_components_image
RUN npm install -g @angular/cli
RUN npm install

COPY . /webchat_components_image

#Replace a setting in the Karma test runner to only run once
# CMD ["sh", "-c", "google-chrome --version && ng test"]
