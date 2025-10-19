import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // remove spaces at the beginning and end
    required: [true, 'O nome do projeto é obrigatório.'],
    minlength: [3, 'O nome do projeto deve ter pelo menos 3 caracteres.'],
    maxlength: [50, 'O nome do projeto não pode ter mais de 50 caracteres.'],
  },
  description: {
    type: String,
    required: [true, 'A descrição do projeto é obrigatória.'],
    minlength: [10, 'A descrição do projeto deve ter pelo menos 10 caracteres.'],
    maxlength: [600, 'A descrição do projeto não pode ter mais de 600 caracteres.'],
  },
  categorie: {
    type: String,
    required: [true, 'A categoria do projeto é obrigatória.'],
    enum: ['web', 'software', 'mobile'], // options
    lowercase: true, // save categorie in lowercase
    trim: true, // remove spaces at the beginning and end
  },
  image: {
    type: String,
    required: [true, 'A imagem é obrigatória.'],
    validate: {
      validator: (value) => value.startsWith('https://') || value.startsWith('/'),
      message: 'A imagem deve ser uma URL segura (https://) ou um caminho de arquivo local.',
    }, // custom validator
  },
  date: {
    type: Date,
    default: Date.now,
  },
  technologies: [{
    type: String,
    required: [true, 'Pelo menos uma tecnologia é obrigatória.'],
    minlength: [2, 'Cada tecnologia deve ter pelo menos 2 caracteres.'],
    maxlength: [50, 'Cada tecnologia não pode ter mais de 50 caracteres.'],
    trim: true, // remove spaces at the beginning and end
  }],
  link: {
    type: String,
    trim: true, // remove spaces at the beginning and end
    validate: {
      validator: (value) => !value || value.startsWith('https://'),
      message: 'O link deve ser uma URL segura (https://)',
    }, // custom validator
  },
  github: {
    type: String,
    trim: true, // remove spaces at the beginning and end
    validate: {
      validator: (value) => !value || value.startsWith('https://github.com/'),
      message: 'O link do GitHub deve ser uma URL válida começando com https://github.com/.',
    }, // custom validator
  },
});

export const Project = mongoose.model('Project', projectSchema);