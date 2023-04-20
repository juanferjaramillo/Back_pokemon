//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("running index.js");

require ('dotenv').config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
var port = process.env.PORT || 3001;
// const { DB_PORT } = process.env;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  // conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`server listening at ${DB_PORT}`); // eslint-disable-line no-console
  });
});
