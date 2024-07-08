# GYM Machine Reservation Update Service

This is the microservice for updating the GYM FITNESS BODY machine reservations.

## Group Members

- Christopher Pallo
- Brayan Davila

## Table of Contents

1. [Microservice Description](#microservice-description)
2. [Installation](#installation)
   - [Requirements](#requirements)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Start the Server](#start-the-server)
   - [Evidence](#evidence-create)
3. [Usage](#usage)
   - [Verify Server Functionality](#verify-server-functionality)
   - [Update a reservation](#update-a-reservation)
4. [Program Execution](#program-execution)
   - [Create Docker Image](#create-docker-image)
5. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)


## Microservice Description

The microservice `gymBackendUpMicroservice` is responsible for updating the existing reservations of the gym machines. It allows editing the reservations through an HTTP PUT request to the corresponding path.

## Installation

### Requirements

- Node.js
- npm (Node Package Manager)

### Clone the Repository

```sh
git clone https://github.com/BrayanBJ27/gymBackendUpdMicroservice.git
cd gymBackendUpdMicroservice
```

### Install Dependencies
```sh
npm install
```

### Start the Server
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of Microservices through Docker-Compose, if you do not want to run the application independently, you must leave the file as it is and subsequently execute the DockerCompose file found in the attached repository, where you will find how to run it, and thus the application It will work together through Docker.
Repository:

Changes to run locally and independently
We are located on line of code 5

Current:
```sh
const port = process.env.PORT || 8090;
```
New:
```sh
const port = 8090;
```

We are located on line of code 11 to 16

Current:
```sh
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
```
New:
```sh
const db = mysql.createConnection({
    host: 'mysql-programaciondis.alwaysdata.net',
    user: '357676_bj',
    password: 'Uyt:tBHLgt4Kk_E',
    database: 'programaciondis_gym'
});

```

```sh
npm run start
```

### Evidence
![Imagen de WhatsApp 2024-07-07 a las 23 14 16_ff2664ac](https://github.com/BrayanBJ27/gymBackendUpdMicroservice/assets/87538474/63291715-c915-4f53-b13c-b56129faf15c)

## Usage

### Verify Server Functionality

Method: GET  
URL: `http://localhost:8090/`  
Description: This route displays a message to verify that the server is running.
![Captura de pantalla 2024-07-03 214528](https://github.com/BrayanBJ27/gymBackendUpdMicroservice/assets/87538474/369a4a65-fb86-482b-80ad-0f67e10e5aba)

### Update a reservation

Method: PUT  
URL: `http://localhost:8090/reservations`  
Description: This route allows you to update an existing reservation.
Example request body (JSON):

```json
{
    "machineName": "Treadmill",
    "userName": "Juliana",
    "startTime": "2024-07-05 11:00:00",
    "endTime": "2024-07-05 12:00:00"
}
```
![image](https://github.com/BrayanBJ27/gymBackendUpdMicroservice/assets/87538474/ba2adb3c-32ac-41bd-9405-0fcd66be5606)

## Program Execution
### Create Docker Image with DockerFile

```sh
docker build -t update-gym-services .
```
![Imagen de WhatsApp 2024-07-07 a las 22 58 43_9408fddc](https://github.com/BrayanBJ27/gymBackendUpdMicroservice/assets/87538474/71a97cfc-4fa1-4014-9b37-c555e2d20808)

## DockerHub
### DockerHub Repository

[brayanbj27/bd-update-gym-services](https://hub.docker.com/r/brayanbj27/bd-update-gym-services)

Docker Pull Command
```sh
docker pull brayanbj27/bd-update-gym-services
```
