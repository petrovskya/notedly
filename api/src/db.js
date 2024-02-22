// Затребуем библиотеку Mongoose
const mongoose = require('mongoose');

module.exports = {
  connect: (DB_HOST) => {
    // Подключаемся к БД
    mongoose.connect(DB_HOST);
    // Выводим ошибку при неуспешном подключении
    mongoose.connection.on('error', (err) => {
      console.error(err);
      console.log(
        'MongoDB connection error. Please make sure MongoDB is running',
      );
      process.exit();
    });
  },

  close: () => {
    mongoose.connection.close();
  },
};
