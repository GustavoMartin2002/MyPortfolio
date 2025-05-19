import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  _id: {
    // unique id by default
    type: mongoose.Schema.Types.ObjectId, // mongoose generate IDs uniques
    required: [true, 'O ID é obrigatório.'], // message error
  },
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
    maxlength: [600, 'A descrição do projeto não pode ter mais de 300 caracteres.'],
  },
  categorie: {
    type: String,
    required: [true, 'A categoria do projeto é obrigatória.'],
    enum: ['web', 'software', 'mobile'], // options
    lowercase: true, // save categorie in lowercase
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'A imagem é obrigatória.'],
    validate: {
      validator: (value) => {
        return value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/');
      },
      message: 'A imagem deve ser uma URL ou um caminho de arquivo válido.',
    }
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
    trim: true,
  }],
  link: {
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        if (value) {
          // validates if the URL is valid
          return value.startsWith('http://') || value.startsWith('https://');
        }
        return true; // if the link is empty
      },
      message: 'O link deve ser uma URL válida.',
    },
  },
  github: {
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        if (value) {
          // validates if the URL github is valid
          return value.startsWith('https://github.com/');
        }
        return true; // if the link is empty
      },
      message: 'O link do GitHub deve ser uma URL válida',
    },
  }
});

export const Project = mongoose.model('Project', projectSchema);