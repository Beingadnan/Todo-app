const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/taskModel'); // Importing the task model
const app = express();

app.use(express.json());

mongoose
  .connect('mongodb+srv://beingadnankhan678:J5OoLzZl3BfVb4h7@cluster0.nbhcf.mongodb.net/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));



// Create Task
app.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).send({ error: 'Title is required' });
    }

    const task = await Task.create({ title, description });
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create task', details: error.message });
  }
});

// Get All Tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch tasks', details: error.message });
  }
});

// Mark Task as Completed
app.patch('/tasks/:id/complete', async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }

    if (task.completed) {
      return res.status(400).send({ error: 'Task is already marked as completed' });
    }

    task.completed = true;
    await task.save();

    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ error: 'Failed to mark task as completed', details: error.message });
  }
});

// Edit Task Details
app.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).send({ error: 'Title is required' });
    }

    const task = await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ error: 'Failed to update task', details: error.message });
  }
});

// Delete Task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }
    res.status(200).send({ message: 'Task deleted successfully', task });
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete task', details: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
