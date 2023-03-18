const dollar_obj = {
  laptop: 200,
  " apple": 24,
  " car": 4000,
  " stairs": 60,
};

const rupees_obj = Object.fromEntries(
  Object.entries(dollar_obj).map(([item, price]) => [item, price * 80])
);

console.log(rupees_obj);
