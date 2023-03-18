let regex =
  /^(http|https:\/\/)[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=]+.[a-zA-Z]+$/;

const check_your_url = (url) => {
  if (regex.test(url)) {
    console.log(`${url} is a valid URL`);
  } else {
    console.log(`${url} is not a valid URL`);
  }
};
check_your_url("http://www.example.com");
check_your_url("cppt://www.example.com");
