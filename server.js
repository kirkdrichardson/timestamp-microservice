 const express = require('express');
 const app = express();

 const MONTH_HASH = { 0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December' };

 app.get('/', (req, res) => {
   res.send('This is a Timestamp microservice example requests: https://timestamp-ms.herokuapp.com/December%2015,%202015  https://timestamp-ms.herokuapp.com/1450137600');
 });

 app.get('/:time', function(req, res) {
    const dateParam = decodeURI(req.params.time);
    const dateObject = new Date(parseInt(dateParam) || dateParam);

    const isValid = Boolean(!(isNaN(dateObject.getTime())));

    let unix = null;
    let naturalTime = null;

    if  (isValid) {
      unix = dateObject.getTime();
      naturalTime = `${MONTH_HASH[dateObject.getMonth()]} ${dateObject.getDay() + 1}, ${dateObject.getFullYear()}`;
    }
    res.send({ unix, naturalTime });
 });

 app.listen(3000);
 console.log('Listening on port 3000...');
