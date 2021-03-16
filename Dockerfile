# pull official base image
FROM node:13

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./
RUN npm run build


EXPOSE 8091
# start app
CMD ["serve", "-s","build","-l", "8091"]