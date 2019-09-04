# base image
FROM node:8-alpine

# Port Application listens on
EXPOSE 3000

# Copy app and install packages
WORKDIR /app
COPY . /app
RUN npm install --silence

# start app
ENTRYPOINT ["npm"]
CMD ["run", "start"]