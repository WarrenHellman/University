//Init class
const github = new GitHub;

const ui = new UI;

// Search input
const searchUser = document.getElementById("searchUser");

//search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then( data => {
        if (data.profile.message === "Not Found"){
          //Show Alert
          ui.showAlert('User not found', 'alert alert-danger')
        }
        else {
          //show profile
          ui.showProfile(data.profile);
        }
      })
  }
  else {
    //Clear Profile
    ui.clearProfile();
  }
});
