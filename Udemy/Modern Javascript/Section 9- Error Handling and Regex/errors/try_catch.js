try {
  // myFunction();

  if(!user){
    // throw 'No such user'
    throw new SyntaxError('No such User exists')
  };
}
catch(e){
  console.log(e)// will console.log error message

  console.log(e.name) // gives error type

  console.log(e.message) // gives error message

  console.log(e instanceof TypeError) //evaluates a Boolean
}
finally {
  console.log('I still run')
}