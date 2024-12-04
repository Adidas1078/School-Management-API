# School Management API

This project provides a set of APIs to manage school data. The APIs allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

---

## Features
- Add new schools to the database.
- Retrieve a list of schools sorted by distance from a given location.

---

## Technologies Used
- **Node.js**: For building the server.
- **Express.js**: Framework for API development.
- **MySQL**: Database for storing school data.

---

## API Endpoints

### 1. Add School
- **Endpoint**: `/addSchool`
- **Method**: `POST`
- **Description**: Adds a new school to the database.
- **Request Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.3456,
    "longitude": 78.9012
  }
  ```
- **Response**:
  - Success:
    ```json
    {
      "message": "School added successfully!"
    }
    ```
  - Validation Error:
    ```json
    {
      "error": "All fields are required."
    }
    ```

---

### 2. List Schools
- **Endpoint**: `/listSchools`
- **Method**: `GET`
- **Description**: Retrieves all schools from the database and sorts them based on proximity to the user's location.
- **Request Parameters**:
  - `latitude` (required): Latitude of the user's location.
  - `longitude` (required): Longitude of the user's location.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "School A",
      "address": "Address A",
      "latitude": 12.3456,
      "longitude": 78.9012,
      "distance": 2.34
    },
    {
      "id": 2,
      "name": "School B",
      "address": "Address B",
      "latitude": 12.3467,
      "longitude": 78.9023,
      "distance": 4.56
    }
  ]
  ```

---

## Database Setup
1. Create a MySQL database named `school_management`.
2. Create a table called `schools` with the following structure:
   ```sql
   CREATE TABLE schools (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       address VARCHAR(255) NOT NULL,
       latitude FLOAT NOT NULL,
       longitude FLOAT NOT NULL
   );
   ```

---

## How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd school-management-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure the database**:
   - Update the database credentials in `app.js`:
     ```javascript
     const db = mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'your_password',
         database: 'school_management'
     });
     ```

4. **Start the server**:
   ```bash
   node app.js
   ```

5. **Access the APIs**:
   - Server runs on `http://localhost:3000`.

---

## Postman Collection
A Postman collection has been created to test the APIs. Import the collection file and use it to test the `/addSchool` and `/listSchools` endpoints.

---

Let me know if further changes are needed!
