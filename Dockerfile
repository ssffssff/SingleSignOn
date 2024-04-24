FROM node

# Copy all files from the local directory to the Docker container
COPY . .

# Install dependencies
RUN npm install

# Set entry point
ENTRYPOINT ["node", "index.js"]
