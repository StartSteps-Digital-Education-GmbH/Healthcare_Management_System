// Step 1: Import the Express framework to create a web server and handle HTTP requests

// Step 2: Create a new router instance for handling routes related to patients

// Step 3: Define a Patient interface to specify the structure of a patient object
// - This interface will help ensure that all patient objects have the same properties.

// Step 4: Create a mock database (in-memory storage) to temporarily store patient data
// - This will allow us to simulate a database without needing a real one.

// Step 5: Define a route to create a new patient
// - This route will handle incoming requests to add a new patient to our mock database.

// Step 5.1: Extract patient details (name, age, medical history) from the request body
// - We will retrieve the necessary information from the incoming request.

// Step 5.2: Create a new patient object with a unique ID and the extracted details
// - We will generate a unique ID for the new patient based on the current number of patients.

// Step 5.3: Add the new patient to the mock database
// - We will store the newly created patient in our in-memory database.

// Step 5.4: Respond with the created patient and a 201 status code indicating successful creation
// - This informs the client that the patient was successfully created.

// Step 6: Define a route to get all patients
// - This route will allow clients to retrieve a list of all patients in the database.

// Step 6.1: Respond with the list of patients and a 200 status code indicating success
// - We will send back the current list of patients to the client.

// Step 7: Define a route to get a patient by their ID
// - This route will allow clients to retrieve a specific patient using their unique ID.

// Step 7.1: Extract the patient ID from the request parameters
// - We will get the ID from the URL to identify which patient to retrieve.

// Step 7.2: Find the patient in the mock database using the extracted ID
// - We will search our in-memory database for the patient with the given ID.

// Step 7.3: If the patient is not found, respond with a 404 status code and an error message
// - This informs the client that the requested patient does not exist.

// Step 7.4: Respond with the found patient and a 200 status code indicating success
// - If the patient is found, we will send their details back to the client.

// Step 8: Define a route to update a patient's information
// - This route will allow clients to modify the details of an existing patient.

// Step 8.1: Extract the patient ID from the request parameters
// - We will get the ID from the URL to identify which patient to update.

// Step 8.2: Find the index of the patient in the mock database
// - We will locate the patient in our in-memory database to update their information.

// Step 8.3: If the patient is not found, respond with a 404 status code and an error message
// - This informs the client that the patient they want to update does not exist.

// Step 8.4: Extract updated patient details from the request body
// - We will retrieve the new information for the patient from the incoming request.

// Step 8.5: Update the patient in the mock database with the new details
// - We will modify the existing patient record with the new information provided.

// Step 8.6: Respond with the updated patient and a 200 status code indicating success
// - We will send back the updated patient details to the client.

// Step 9: Define a route to delete a patient
// - This route will allow clients to remove a patient from the database.

// Step 9.1: Extract the patient ID from the request parameters
// - We will get the ID from the URL to identify which patient to delete.

// Step 9.2: Remove the patient from the mock database using the filter method
// - We will create a new array that excludes the patient with the given ID.

// Step 9.3: Respond with no content and a 204 status code indicating successful deletion
// - This informs the client that the patient was successfully deleted without returning any content.

// Step 10: Export the router for use in the main server file
// - This allows the router to be used in the main application to handle patient-related requests.
