# To-Do List Application  
A simple RESTful API for managing tasks using Node.js, Express, and MongoDB.

## Features  
- **Create Tasks**: Add tasks with a title and description.  
- **Get All Tasks**: View a list of all tasks.  
- **Mark Tasks as Completed**: Update the status of a task.  
- **Edit Tasks**: Modify task details (title and description).  
- **Delete Tasks**: Remove tasks from the database.  

## Tech Stack  
- **Backend**: Node.js with Express.js  
- **Database**: MongoDB (using Mongoose ORM)  
- **Deployment**: Local or cloud-hosted MongoDB Atlas  

## Installation  

### 1. Clone the repository:  
```bash
git clone <repository_url>
cd <repository_folder>

npm install
Start the server: node app.js


# API Endpoints
Create Task
Endpoint: POST /tasks
Description: Add a new task to the database.
Request Body:
{
  "title": "Task Title",
  "description": "Task Description"
}


2. Get All Tasks
Endpoint: GET /tasks
Description: Fetch all tasks.
Response:json
[
  {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
  }
]

3. Mark Task as Completed
Endpoint: PATCH /tasks/:id/complete
Description: Mark a specific task as completed.
Response:json
{
  "_id": "task_id",
  "title": "Task Title",
  "description": "Task Description",
  "completed": true
}

4. Edit Task
Endpoint: PUT /tasks/:id
Description: Update the title or description of a specific task.
Request Body:
json
Copy code
{
  "title": "Updated Title",
  "description": "Updated Description"
}
Response:
json
{
  "_id": "task_id",
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": false
}

5. Delete Task
Endpoint: DELETE /tasks/:id
Description: Delete a specific task by ID.
Response:
json
{
  "message": "Task deleted successfully",
  "task": {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
  }
}

project-root/
├── app.js              # Main application file
├── models/
│   └── taskModel.js    # Task model schema
├── package.json        # Project metadata and dependencies
└── README.md           # Documentation
