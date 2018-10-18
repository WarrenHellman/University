const data = [
  {
    name: 'Warren Hellman',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Seattle, WA',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    name: 'Beefy Chunker',
    age: 44,
    gender: 'female',
    lookingfor: 'female',
    location: 'Olympia, WA',
    image: 'https://randomuser.me/api/portraits/women/21.jpg'
  },
  {
    name: 'Rachel Width',
    age: 30,
    gender: 'female',
    lookingfor: 'male',
    location: 'Seattle, WA',
    image: 'https://randomuser.me/api/portraits/women/81.jpg'
  },
  {
    name: 'Aric Czaban',
    age: 33,
    gender: 'male',
    lookingfor: 'male',
    location: 'Bellingham, WA',
    image: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
];

const profiles = profileIterator(data)

// Call first profile
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value
  
  if(currentProfile!==undefined){
  document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group'>
      <li class='list-group-item'>Name: ${currentProfile.name}
      <li class='list-group-item'>Age: ${currentProfile.age}
      <li class='list-group-item'>Gender: ${currentProfile.gender}
      <li class='list-group-item'>Looking For: ${currentProfile.lookingfor}
      <li class='list-group-item'>Location: ${currentProfile.location}
    </ul>
  `
  document.getElementById('imageDisplay').innerHTML = `
  <img src=${currentProfile.image}>
  `
  } else {
    window.location.reload();
  }
}

// Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done:false} : 
      {done:true}
    }
  }
}