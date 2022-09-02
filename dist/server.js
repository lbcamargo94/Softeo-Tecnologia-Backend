"use strict";var _app = require('./app');

const PORT = process.env.PORT || 3001;

_app.app.listen(PORT, () => {
  console.log(`Servidor rodando http://localhost:${PORT}`);
});
