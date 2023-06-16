

FROM node:16

#RUN apt-get update && apt-get install -y mysql-server


#RUN service mysql start && mysql -u root -e "root'root'@'localhost' IDENTIFIED BY 'root'"


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your Node.js application will run
# EXPOSE 3000

# Define the command to run your Node.js application
CMD [ "npm", "start" ]

#  docker build --no-cache -t node:0.1 .
#  589  docker run -p 3000:3000 node:0.1
