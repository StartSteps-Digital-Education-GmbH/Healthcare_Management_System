// Step 1: Import the Express framework to create a web server

// Step 2: Create a new router instance to define and handle routes for doctor-related operations

// Step 3: Define a Doctor interface to specify the structure of a doctor object

// Step 4: Create a mock database (in-memory storage) to temporarily hold doctor data

// Step 5: Define a route to create a new doctor

    // Step 5.1: Extract doctor details (name, specialty, availability) from the request body

    // Step 5.2: Create a new doctor object with a unique ID and the extracted details

    // Step 5.3: Add the new doctor to the mock database

    // Step 5.4: Respond with the created doctor object and a 201 status code indicating successful creation

// Step 6: Define a route to get all doctors

    // Step 6.1: Respond with the list of all doctors and a 200 status code indicating success

// Step 7: Define a route to get a specific doctor by their ID

    // Step 7.1: Extract the doctor ID from the request parameters

    // Step 7.2: Search for the doctor in the mock database using the extracted ID

    // Step 7.3: If the doctor is not found, respond with a 404 status code and an error message

    // Step 7.4: Respond with the found doctor object and a 200 status code indicating success

// Step 8: Define a route to delete a doctor by their ID

    // Step 8.1: Extract the doctor ID from the request parameters

    // Step 8.2: Remove the doctor from the mock database using the filter method

    // Step 8.3: Respond with no content and a 204 status code indicating successful deletion

// Step 9: Export the router for use in the main server file
