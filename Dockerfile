# FROM node:12-buster

# WORKDIR /usr/app

# COPY package.json /usr/app/

# RUN yarn install 

# COPY . .

# EXPOSE 3000

# RUN yarn prisma generate \
#     yarn prisma migrate dev --name init_database \
#     ts-node src/services/script.ts
