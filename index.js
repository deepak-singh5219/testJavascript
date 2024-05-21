const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Authorization",
  "Basic cGF5dV9hcGk6M016a3FZUFFKak52UVRYJEJ5OGttM01tQDRxZEs4SUhIWWVqMyZRQ2F2MWdAaW1YaCZNcW9uWlNPVkFBTjlVTg==",
);

const raw = JSON.stringify({
  api_key:
    "9caa60a7ce62d181c34beac524c463e3a5019a9c11bfd649535fe5ae18b37d362b22757eaa99e068a49836ae2f75566b0c76a65f452fcd137e7c52e52a319602",
  datasetKey:
    "6a64a1f89aad3c2e4fad545a0acdd5128924424ad38c5b0ea93f6a726441d5443b2adcbc29e7727e521026da734a1c7708b497cc25ca9927502c31b9ce589f2a",
  date_of_activation: "1-1-2011 00:00:00",
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://payu.darwinbox.in/masterapi/employee", requestOptions)
  .then((response) => response.text())
  .then((result) => {
     const res = JSON.parse(result);
     console.log("Response", res);
  })
  .catch((error) => console.error(error));
``