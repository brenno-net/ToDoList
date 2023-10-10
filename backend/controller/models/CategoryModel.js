const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 // Outros campos relevantes para as categorias, se necessário
});

module.exports = mongoose.model('Category', categorySchema);