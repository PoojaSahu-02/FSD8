// AJAX- Asynchronous javascript and XML
// HTTP Request --> client(Browser) --> server (Communication is done by the help of HTTP)
// we are not using xml(data format) rather then we are using JSON
//3 ways to create and send request to server
    //1. xmlHTTPRequest (XHR)
    //2. fetch API(ES-6)
    //3. axios (Third party library)

// REST API(Representational State Transfer)
// Routes => HTTP Methods
//GET(browser by default)
// POST
// PUT
// PATCH
// DELETE

//Responce header - meta information given by server
// eg - 200 -OK / 404- Not found etc.
 
// JSON(javascript Object Notation)=>(library of javascript)
//KEY VALUE Pair
// "Key" - key should be in double quates
// can't use method


// JSON.parse() ==> (Convert JSON to javascript object)
// JSON.Stringify() ==> (convert object in JSON Format)


//fetch(URL) --> (by default get request and return one promise ,we can resolve the promise by using .then by (which we will get response) but if in responce there is no data found --> in this case we have to apply one method called as json() ,json( method is also return one promise so again we have to resolve the promise by .then and .catch(for error))


// let userStr = '{
//     "name":"Sammy",
//     "email":"sammy@example.com",
//     "plan":"Pro"
// }';

// console.log(userStr)
// let userObj = JSON.parse(userStr);

// console.log(userObj);


// let userObj = {
//     name: "Sammy",
//     email: "sammy@example.com",
//     plan: "Pro"
//   };
  
//   console.log(userObj)
//   let userStr = JSON.stringify(userObj);
  
//   console.log(userStr);

// let userObj = {
//     "name": "Sammy",
//     "email": "sammy@example.com",
//     "plan": "Pro"
//   };
  
//   console.log(userObj)


