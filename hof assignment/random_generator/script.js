let delay = 3;
console.log(`generating a random number after ${delay} seconds`);

let count_down = setInterval(() => {
  for (let i = delay; i > 0; i--) {
    console.log(`Time remaning is ${i} seconds`);
  }
  let random_num = Math.floor(Math.random() * 100 + 1);

  console.log(`Random number is ${random_num}`);
}, delay * 1000);
