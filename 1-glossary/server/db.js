const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost/glossary');

const TermSchema = new mongoose.Schema({
  name: String,
  definition: String
});

const Term = mongoose.model('Term', TermSchema);

exports.getAll = () => {
  return Term.find({});
}

exports.add = (term) => {
  return Term.create(term);
}

exports.update = (updatedTerm, termID) => {
  return Term.findByIdAndUpdate(termID, updatedTerm);
}