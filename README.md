# Healthcare Management System

## Overview

In this exercise, we will create two microservices:
1. **Patient Service**: Manages patient records, appointments, and history.
2. **Doctor Service**: Handles doctor profiles, schedules, and availability.

Microservices architecture allows us to build applications as a collection of small, independent services that communicate over a network. This modular approach enhances flexibility, scalability, and maintainability.


### Directory Structure

```
healthcare-management-system/
├── src/
│   ├── patient-service/
│   │   ├── patientRoutes.ts
│   │   └── server.ts
│   └── doctor-service/
│       ├── doctorRoutes.ts
│       └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Step 1: Set Up the Project

### 1. Open Your Terminal
Before starting, ensure that you have Node.js and npm (Node Package Manager) installed. Node.js is a JavaScript runtime that allows you to run JavaScript on the server side, while npm is used to manage packages (libraries) for Node.js applications.

### 2. Create a New Directory for the Project
Creating a new directory helps organize your project files. By naming it `healthcare-management-system`, we clearly define the purpose of this project.

### 3. Initialize a Node.js Project
Running the initialization command creates a `package.json` file. This file contains metadata about the project, including its name, version, and dependencies. It helps manage the project and its libraries.

### 4. Edit `package.json`
In the `package.json` file, add `"type": "module"` to enable ES module syntax (import/export). This is important for modern JavaScript development. Additionally, update the `scripts` section to include commands for building and running the application:
- **build**: Compiles TypeScript files into JavaScript.
- **dev**: Runs the application using `ts-node`, which allows us to run TypeScript files directly.

### 5. Install Required Packages
Install the necessary packages for our project:
- **express**: A web framework for Node.js that simplifies building web applications and APIs.
- **typescript**: A programming language that enhances JavaScript by introducing features such as type annotations and interfaces.
- **@types/node** and **@types/express**: Type definitions for Node.js and Express, allowing TypeScript to understand the types used in these libraries.
- **ts-node**: A TypeScript execution environment for Node.js, enabling us to run TypeScript files directly.

### 6. Create TypeScript Configuration
Generate a `tsconfig.json` file, which is used to configure TypeScript options for the project. This file specifies how TypeScript should compile the code.

## Step 2: Configure TypeScript

### 1. Edit `tsconfig.json`
In the `tsconfig.json` file, configure various options:
- **target**: Specifies the ECMAScript version to compile to (e.g., ES2020).
- **module**: Defines the module system to use (NodeNext for modern Node.js).
- **rootDir**: The root directory of our TypeScript source files.
- **outDir**: The directory where the compiled JavaScript files will be placed.
- **strict**: Enables strict type-checking options, which helps catch errors early.
- **esModuleInterop**: Allows for better interoperability between CommonJS and ES Modules.

## Step 3: Create Directory Structure

### 1. Create Source Directory
Creating a `src` directory helps organize our source code files. This is a common practice in software development to keep the project structure clean.

### 2. Create Service Directories
Inside the `src` directory, create separate directories for each microservice. This modular approach allows us to manage each service independently.

### 3. Create Files for Each Service
Create the necessary files for each service, including the main server file and route handling files.

## Step 4: Build the Patient Service

### 1. Set Up the Patient Service Server
In the server file for the Patient Service, set up the Express server. Import the necessary modules and define the server's behavior. Use middleware to parse incoming JSON requests and define the `/patients` endpoint to handle patient-related requests.

### 2. Define Patient Routes
In the routes file for the Patient Service, define the routes for managing patients. Each route corresponds to a specific operation (create, read, update, delete). Use an in-memory array to temporarily store patient data and implement the necessary routes.

## Step 5: Build the Doctor Service

### 1. Set Up the Doctor Service Server
Similar to the Patient Service, set up the Express server for the Doctor Service. This service will handle doctor-related requests.

### 2. Define Doctor Routes
In the routes file for the Doctor Service, define the routes for managing doctors. Each route corresponds to a specific operation (create, read, delete). Use an in-memory array to temporarily store doctor data and implement the necessary routes.

## Step 6: Build and Run the Application

### 1. Compile TypeScript Files
Run the command to compile the TypeScript files into JavaScript. This step converts your TypeScript code into a format that Node.js can execute.

### 2. Start the Patient Service
Open a new terminal window and run the command to start the Patient Service. This will make the service available to handle requests.

### 3. Start the Doctor Service
In another terminal window, run the command to start the Doctor Service. This will also make the service available to handle requests.

## Step 7: Test the Endpoints

Use Postman or any API testing tool to test the following endpoints for both services.

### Patient Service Endpoints

- **Create Patient**: Use a POST request to add a new patient.
- **Get All Patients**: Use a GET request to retrieve all patients.
- **Get Patient by ID**: Use a GET request to retrieve a specific patient by their ID.
- **Update Patient**: Use a PUT request to update a patient's information.
- **Delete Patient**: Use a DELETE request to remove a patient.

### Doctor Service Endpoints

- **Create Doctor**: Use a POST request to add a new doctor.
- **Get All Doctors**: Use a GET request to retrieve all doctors.
- **Get Doctor by ID**: Use a GET request to retrieve a specific doctor by their ID.
- **Delete Doctor**: Use a DELETE request to remove a doctor.

## Step 8: Discuss Microservices Architecture

- **Independent Functionality**: Each microservice (Patient Service and Doctor Service) handles specific functionalities. This allows for independent development, deployment, and scaling.

- **Communication**: Microservices communicate over HTTP, allowing them to be part of a larger system where different services can interact with each other.

- **Scalability**: If the patient management service needs to handle more requests, it can be scaled independently of the doctor service.

- **Real-World Application**: In a real-world application, this healthcare management system could be part of a larger platform where different services handle patient management, doctor scheduling, appointment booking, etc. Each service can be developed and maintained by different teams, allowing for faster development cycles and better resource allocation.

## Conclusion

In this exercise, we learned how to build a healthcare management system using microservices. By following these steps, you now understand how microservices work and how to create them.

### How to Use Microservices Together

To make a complete application with multiple microservices, you can connect them in the following ways:

1. **API Gateway**: Use an API Gateway as a single entry point for all client requests. The API Gateway routes requests to the appropriate microservices handles authentication, and manages cross-cutting concerns like logging and monitoring. This simplifies client interactions and provides a unified interface.

2. **Service Communication**: Microservices can communicate with each other using lightweight protocols such as HTTP/REST or messaging queues (e.g., RabbitMQ, Kafka). For example, the Patient Service can notify the Doctor Service when a new appointment is booked.

3. **Data Management**: Each microservice should have its own storage to keep its data. If one service needs information from another, it can ask for it through an API. This keeps everything organized and prevents confusion.

4. **Service Discovery**: Implement a service discovery mechanism that allows microservices to find and communicate with each other dynamically.

5. **Orchestration**: Use orchestration tools (like Kubernetes) to manage your microservices' deployment, scaling, and operation.

By using these methods, you can connect different microservices to create a complete application that offers all the features users need. This approach makes your application flexible and easier to manage.

Now that you've learned how to build and connect microservices, I encourage you to dive in and experiment with the code! Try making changes, adding new features, or even creating additional microservices. Your creativity and exploration will help you understand the power of microservices and prepare you for real-life software development challenges.

## Step 9: Use MongoDB in Modal and controller
Create a Database in MongoDB server and link it to your project, modify the modal and controller to store data in MongoDB.

## Step 10: Use Joi or Express Validator as Middleware

## Step 11: Deploy your project in serverless mode to Vercel:
Create a Serverless function for each service and deploy it to Vercel.

## Step 12: Practice Microservices Communication using HTTP requests.

## Step 13: Use TypeOrm and Sqlite in the project:

Create a new branch and a folder for SQL database and Entities

Use TypeOrm in our current services

## Step 14: Use TypeOrm and Postgresql in the project:

Create a "Healthcare_Management_System" Database in PostgreSQL and a user who have all privileges on this DB

In a new branch, update TypeORM configuration to use PostgreSQL

## Step 15: Create Appointment Microservice

The Appointment microservice will handle all operations related to appointments and manage associations with the Doctors and Patients services. 

**in your main branch:**

- Define Appointment Schema with Mongoose
- Create CRUD Operations
- Test the Appointment Microservice
- Run the Appointment service, and use a tool like Postman to test the CRUD endpoints for managing appointments:

-   POST /appointments: Create an appointment.
-   GET /appointments: Retrieve all appointments.
-   GET /appointments/:id: Retrieve a specific appointment by ID.
-   DELETE /appointments/:id: Delete an appointment by ID.

### Step 16: Advanced Query Techniques

In this step, you’ll be working with various querying techniques such as filtering, sorting, skipping, limiting, and projecting. Your objective is to create endpoints that retrieve data from the **Patient**, **Doctor**, and **Appointment** services with these features.

#### Task 1: Filtering Data
1. Create an endpoint to retrieve all patients based on specific criteria:
   - **Endpoint**: `GET /patients?age=30&name=John`
   - **Objective**: Return all patients aged 30 with the name "John".
2. For the Appointment service:
   - **Endpoint**: `GET /appointments?status=confirmed`
   - **Objective**: Retrieve only appointments that have a status of "confirmed".

#### Task 2: Sorting Data
1. Create an endpoint to retrieve all doctors sorted by specialty:
   - **Endpoint**: `GET /doctors?sort=specialty`
   - **Objective**: Return a sorted list of doctors by their specialty, in ascending order.
2. Sort appointments by booking date in descending order:
   - **Endpoint**: `GET /appointments?sort=-bookingDate`
   - **Objective**: Retrieve appointments with the most recent booking dates first.

#### Task 3: Skipping and Limiting Results
1. Limit the number of patients retrieved:
   - **Endpoint**: `GET /patients?limit=5`
   - **Objective**: Return the first 5 patients from the patient database.
2. Skip certain records and retrieve the next set:
   - **Endpoint**: `GET /appointments?skip=10&limit=5`
   - **Objective**: Skip the first 10 appointments and return the next 5.

#### Task 4: Projecting Specific Fields
1. Retrieve only the names and ages of all patients:
   - **Endpoint**: `GET /patients?fields=name,age`
   - **Objective**: Return a list of patients with only their name and age fields.
2. For the Doctor service:
   - **Endpoint**: `GET /doctors?fields=name,specialty`
   - **Objective**: Retrieve only the names and specialties of all doctors.

---

### Step 17: Aggregations and Reporting

In this step, you’ll implement aggregation techniques to calculate statistics or gather insights from your data. Use these examples to build the following endpoints:

#### Task 1: Count Aggregation
1. Count the total number of patients aged over 40:
   - **Endpoint**: `GET /patients/over-40-count`
   - **Objective**: Return a single value indicating the total count of patients who are over 40 years old.

#### Task 2: Summing Data
1. Calculate the total number of confirmed appointments:
   - **Endpoint**: `GET /appointments/confirmed-count`
   - **Objective**: Return a value representing the total number of appointments with a status of "confirmed".

#### Task 3: Grouping and Calculating Averages
1. Group patients by age and calculate the average number of appointments per age group:
   - **Endpoint**: `GET /appointments/average-per-age`
   - **Objective**: Return a list where each age group is represented along with the average number of appointments.

#### Task 4: Advanced Aggregation Pipeline
1. For each doctor, calculate the total number of patients they’ve seen:
   - **Endpoint**: `GET /doctors/patient-count`
   - **Objective**: Return a list where each doctor is paired with the total count of their patients.

2. Generate a report that shows the number of appointments in each status:
   - **Endpoint**: `GET /appointments/status-summary`
   - **Objective**: Return a report summarizing the count of appointments by status (e.g., confirmed, pending, canceled).

---

This step will provide a robust way to work with data in MongoDB and Mongoose while strengthening your query-building skills!
**_Happy coding!_** 👩‍💻 😊
