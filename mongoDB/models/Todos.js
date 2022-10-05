import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  jop: String,
  priotry: Number,
  status: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Todos = mongoose.models.Todos || mongoose.model('todos', Schema);

export default Todos;
