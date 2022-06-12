const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    let filmTheaterIXX = await promiseTheaterIXX();
    let filmTheater = filmTheaterIXX.concat(await promiseTheaterVGC());

    return filmTheater;
  } catch(err) {
    return err;
  }
};

module.exports = {
  promiseOutput,
};
