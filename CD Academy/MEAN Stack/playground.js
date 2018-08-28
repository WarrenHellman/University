//Event Listeners
let button = document.getElementById('github')
let textDiv = document.getElementById('display')

button.addEventListener('click', getGitHubAPI);

function getGitHubAPI(){
  fetch("https://api.github.com/users/WarrenHellman")
  .then(response => {
    return response.json();
  })
  .then(myData => {
    textDiv.innerHTML = (JSON.stringify(myData.login))
  })
  .catch(err => {
    console.log(err);
  })
}
