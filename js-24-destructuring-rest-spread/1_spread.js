var user = { 
    id: 42, 
    displayName: "jdoe",
    fullName: { 
        firstName: "John",
        lastName: "Doe"
    }
  };
  
  var fields = ['id', 'fullName'];
  
  var {id: idX, fullName: fullNameX, ...temp} = user;
  
  console.log(idX);
  console.log(fullNameX);
  console.log(temp);