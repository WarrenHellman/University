// Done without Arrow functions. => is below
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalAPI);

// Uses promises to get simple text from local text file
function getText(){
  fetch('text.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data) {
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    })
}

// Uses promises to get simple json from local json file
function getJson(){
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    })
}

// Uses promises to get api data
function getExternalAPI(){
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    })
}



// With Arrow Functions!

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalAPI);

// Uses promises to get simple text from local text file
function getText(){
  fetch('text.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Uses promises to get simple json from local json file
function getJson(){
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err =>{
      console.log(err);
    })
}

// Uses promises to get api data
function getExternalAPI(){
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    })
}