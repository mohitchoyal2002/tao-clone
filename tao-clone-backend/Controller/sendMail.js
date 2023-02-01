const axios = require('axios')

const sendEmail = (data)=>{
  const options = {
    method: 'POST',
    url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '8c82a479e9msh125119819a49830p1e33dcjsnf8ba7b7e897c',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
    },
    data: `{"personalizations":[{"to":[{"email":"${data.email}"}],"subject":"Demo Test Link from TAO Clone"}],"from":{"email":"ly277423@gmail.com"},"content":[{"type":"text/plain","value":"Hello ${data.name}, This is from TAO Demo test this is your password for demo test : ${data.password} click on the link of the test http://localhost:3000/test-login"}]}`
  };
  
    axios.request(options).then((res)=>{
      return res
    }).catch((err)=>{
      return err;
    })
}

module.exports = sendEmail