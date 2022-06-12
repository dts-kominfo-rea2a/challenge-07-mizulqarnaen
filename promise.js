const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    let filmTheater = (await promiseTheaterIXX()).concat(await promiseTheaterVGC());

    return filmTheater.filter(data => {
      return data.hasil == emotion;
    }).length;
    
  } catch(err) {
    return err;
  }
};

module.exports = {
  promiseOutput,
};
