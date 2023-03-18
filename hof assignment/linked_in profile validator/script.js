let regex =
  /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9\-_[\]]{5,30}[a-zA-Z|0-9]$/;

const LinkedIn_Profile_URL_Validator = (url) => {
  if (regex.test(url)) {
    console.log(`${url} is a valid linked in url`);
  } else {
    console.log(`${url} is not a valid linked in url`);
  }
};
LinkedIn_Profile_URL_Validator("https://www.linkedin.com/in/johndoe_123");
LinkedIn_Profile_URL_Validator("https://www.linkedin.com/in/john.doe");
