// Запросим библиотеку mongoose
const mongoose = require('mongoose');

// Определеяем схему БД заметки
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },

  {
    // Присваиваем поля createdAt and updatedAt  с типом данных
    timestamps: true,
  },
);

// Определяем модель 'Note' со схемой
const Note = mongoose.model('Note', noteSchema);

// Экспортируем модуль
module.exports = Note;
