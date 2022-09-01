"use strict"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _app = require('./app');

const PORT = _nullishCoalesce(process.env.PORT, () => ( 3001));

_app.app.listen(PORT, () => {
  console.log(`Srvidor rodando http://localhost:${PORT}`);
});
