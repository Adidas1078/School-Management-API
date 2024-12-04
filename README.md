# School Management API

This project implements a RESTful API to manage school data using **Node.js**, **Express.js**, and **MySQL**. The API provides endpoints to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Features
- **Add School API**: Allows adding a new school with details such as name, address, latitude, and longitude.
- **List Schools API**: Retrieves schools from the database, sorted by proximity to a user-specified location.
- Data stored and managed using **MySQL**.

---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Hosting**: Deployed on [Heroku](https://www.heroku.com/) (or specify your hosting platform)
- **Testing Tools**: Postman

---

## Installation and Setup

### Prerequisites
- **Node.js** (v14 or later)
- **MySQL** (with a running instance)
- **Git**

### Steps to Set Up Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/school-api.git
   cd school-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a MySQL database:
   ```sql
   CREATE DATABASE SchoolData;
   USE SchoolData;

   CREATE TABLE schools (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       address VARCHAR(255) NOT NULL,
       latitude FLOAT NOT NULL,
       longitude FLOAT NOT NULL
   );
   ```

4. Configure database connection:
   - Update `db.js` with your MySQL credentials:
     ```javascript
     const db = mysql.createConnection({
         host: 'localhost',
         user: 'your_username',
         password: 'your_password',
         database: 'SchoolData'
     });
     ```

5. Start the server:
   ```bash
   node app.js
   ```

6. The server will run on `http://localhost:3000`.

---

## API Endpoints

### 1. **Add School**
- **URL**: `/api/addSchool`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
      "name": "Example School",
      "address": "123 Main Street",
      "latitude": 40.7128,
      "longitude": -74.0060
  }
  ```
- **Response**:
  ```json
  {
      "message": "School added successfully.",
      "schoolId": 1
  }
  ```

### 2. **List Schools**
- **URL**: `/api/listSchools`
- **Method**: `GET`
- **Query Parameters**:
  - `latitude`: Latitude of the user
  - `longitude`: Longitude of the user
- **Example**:
  ```
  GET /api/listSchools?latitude=40.7128&longitude=-74.0060
  ```
- **Response**:
  ```json
  [
      {
          "id": 1,
          "name": "Example School",
          "address": "123 Main Street",
          "latitude": 40.7128,
          "longitude": -74.0060,
          "distance": 0.0
      },
      {
          "id": 2,
          "name": "Another School",
          "address": "456 Elm Street",
          "latitude": 40.7306,
          "longitude": -73.9352,
          "distance": 2.3
      }
  ]
  ```

---

## Postman Collection
You can find the Postman collection [here](postman-collection.json) (include a link to the file in your repository) or access it via this [shared link](#) (replace `#` with the actual link).

---

## Deployment
The API is hosted and live at:  
[**Live API URL**](https://your-live-api-url.com)

---

## Contribution
Feel free to fork this repository and submit pull requests for improvements or new features.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Let me know if you'd like to customize it further!
