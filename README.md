# Updating Existing GYM Machine Reserves Service

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
3. [Program Execution](#program-execution)
   - [Execute Microservice](#execute-microservice)
4. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)
5. [AWS](#aws)
   - [Evidence](#evidence-create)


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
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of the Microservices.

Port Verification

Current:
```sh
const port = 8090;
```

## Program Execution
### Execute Microservice

```sh
npm run start
```

## DockerHub
### DockerHub Repository

https://hub.docker.com/r/brayanbj27/bd-update-gym-services

Docker Pull Command
```sh
docker pull brayanbj27/bd-update-gym-services
```

## AWS
### Evidence
**Summary of the Instance** 

![image](https://github.com/BrayanBJ27/gymBackendUpdMicroservice/assets/87538474/7e000c79-dbf1-4496-87fb-4549992ed49a)

**Service running on the instance IP**

![image](https://github.com/BrayanBJ27/gymBackendUpdMicroservice/assets/87538474/5fc23f56-5bd3-4177-816a-c5f2fcd1c91d)
