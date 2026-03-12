# Scitara SDET Assignment

### User Management API + Playwright Automation

## Overview

This project demonstrates a **User Management REST API service** with a **modern automation testing framework** built using **Playwright API testing**.

The goal of this project is to showcase **SDET engineering practices**, including:

* API design and development
* Automation-first testing approach
* Data-driven testing
* JSON schema validation
* WebSocket event validation
* Clean architecture and modular design

The solution reflects a **shift-left quality strategy**, where automated tests validate system behavior continuously during development.

---

# Technology Stack

## Backend

* Node.js
* Express.js
* WebSocket (Socket.io)
* In-memory JSON data store

## Automation

* Playwright API Testing
* JSON Schema Validation (AJV)
* Data-driven tests

## Development Tools

* npm
* Git
* Playwright HTML Reports

---

# Project Architecture

```
scitara-sdet-user-service
│
├── src
│   ├── server.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── controllers
│   │   └── userController.js
│   ├── db
│   │   └── users.json
│   └── websocket
│       └── socket.js
│
├── tests
│   ├── api
│   │   └── users.spec.js
│   ├── websocket
│   │   └── websocket.spec.js
│   ├── schemas
│   │   └── user.schema.json
│   └── data
│       └── usersData.json
│
├── playwright.config.js
├── package.json
├── README.md
└── .gitignore
```

---

# REST API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| POST   | /api/users      | Create new user |
| GET    | /api/users      | Get all users   |
| GET    | /api/users/{id} | Get user by ID  |
| PUT    | /api/users/{id} | Update user     |
| DELETE | /api/users/{id} | Delete user     |

---

# API Behavior

The API follows standard REST principles:

* Proper HTTP response codes
* Input validation
* Meaningful error messages
* Stateless request handling

### Example Response

```
POST /api/users

Response:
{
"id": "12345",
"name": "Alice",
"email": "alice@test.com"
}
```

---

# Automation Test Strategy

The automation suite validates the complete behavior of the API.

### Coverage

✔ All REST endpoints
✔ Positive test scenarios
✔ Negative test scenarios
✔ Data-driven testing
✔ Schema validation
✔ Event-driven behavior validation (WebSocket)

### Testing Framework

Automation is implemented using **Playwright**, which allows:

* API testing
* UI testing
* WebSocket testing
* Parallel execution
* Rich HTML reporting

---

# Schema Validation

JSON schema validation ensures that API responses follow a consistent structure.

Example schema:

```
{
"type": "object",
"required": ["id","name","email"]
}
```

This ensures the response always returns required fields.

---

# Data Driven Testing

Test data is stored separately to enable scalable test coverage.

Example:

```
tests/data/usersData.json
```

```
[
{ "name": "Alice", "email": "alice@test.com" },
{ "name": "Bob", "email": "bob@test.com" }
]
```

The automation suite dynamically executes tests using this dataset.

---

# WebSocket Event Testing

When a user is created, the system emits a WebSocket event:

```
userCreated
```

Automation validates:

* Connection to WebSocket server
* Event emission
* Correct payload data

This demonstrates testing of **asynchronous event-driven systems**.

---

# Setup Instructions

## Install Dependencies

```
npm install
```

---

# Run API Server

```
npm start
```

Server runs at:

```
http://localhost:3000
```

---

# Run Automation Tests

```
npm test
```

---

# Generate Playwright Report

```
npx playwright show-report
```

Playwright provides an interactive HTML test report for debugging and trace analysis.

---

# Example Test Execution

```
Running 6 tests using 2 workers

✓ Create User
✓ Get Users
✓ Get User By ID
✓ Update User
✓ Delete User
✓ Data Driven User Creation
```

---

# Key SDET Practices Demonstrated

This project highlights important **Software Design Engineer in Test (SDET)** principles:

### Shift-left Testing

Tests are written alongside development to detect issues early.

### Automation-first Development

All APIs are covered with automated tests.

### Modular Architecture

Controllers, routes, and services are separated.

### Data-driven Testing

Test data is externalized for maintainability.

### Event-driven Testing

WebSocket validation ensures asynchronous workflows are tested.

---

# Possible Enhancements

Future improvements could include:

* Kafka event streaming integration
* Dockerized deployment
* CI/CD pipeline integration
* Database integration
* Performance testing

---

# Author

Prepared as part of the **SDET technical evaluation assignment** demonstrating modern automation and API testing practices.

---

# Notes

The project intentionally uses an **in-memory datastore** to keep the focus on API design and automated testing strategies rather than database configuration.

---

# Contact

For any clarifications or questions regarding the implementation, please feel free to reach out.
