import axios from 'axios'

// STEP 1: using axios, send a GET request to the following URL
  //   (replacing the placeholder with your Github name):
  //   https://api.github.com/users/<your name>

  let res =  axios.get("https://api.github.com/users/pak11273")

  // STEP 2: Inspect and study the data coming back, this is YOUR
  //   github info! You will need to understand the structure of this
  //   data in order to use it to build your component function
  res.then(x => console.log(x))

  //   Skip to STEP 3.

  // STEP 4: Pass the data received from Github into your function,
  //   and append the returned markup to the DOM as a child of .cards

  res.then(x => {
    let card = getCard(x.data)
    let cards = document.querySelector('.cards')
    cards.appendChild(card)
  })

  // STEP 5: Now that you have your own card getting added to the DOM, either
  //   follow this link in your browser https://api.github.com/users/<Your github name>/followers,
  //   manually find some other users' github handles, or use the list found at the
  //   bottom of the page. Get at least 5 different Github usernames and add them as
  //   Individual strings to the friendsArray below.

  //   Using that array, iterate over it, requesting data for each user, creating a new card for each
  //   user, and adding that card to the DOM.

const followersArray = [
     "tetondan",
     "dustinmyers",
     "justsml",
     "luishrd",
     "bigknell",
];

followersArray.map( x => {
  let res =  axios.get(`https://api.github.com/users/${x}`)
  res.then(x => {
  let card = getCard(x.data)
  let cards = document.querySelector('.cards')
  cards.appendChild(card)
  })
})

  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:
  const getCard = (ob) => {
    let card = document.createElement("div")
    let image = document.createElement("img")
    let info = document.createElement("div")
    let name = document.createElement("h3")
    let username = document.createElement("p") 
    let location = document.createElement("p") 
    let profile = document.createElement("p") 
    let profileLink = document.createElement("a") 
    let followers = document.createElement("p") 
    let following = document.createElement("p") 
    let bio = document.createElement("p") 
    card.classList.add("card")
    image.src = ob.avatar_url
    info.classList.add("card-info")
    name.classList.add("name")
    name.textContent = ob.name
    username.classList.add("username")
    username.textContent = ob.login
    location.textContent = `Location: ${ob.location}`
    profile.textContent = `Profile: `
    profileLink.href = `${ob.html_url}` 
    profileLink.textContent = `${ob.html_url}`  
    followers.textContent = `Followers: ${ob.followers}` 
    following.textContent = `Following: ${ob.following}` 
    bio.textContent = `Bio: ${ob.bio}`
    card.appendChild(image)
    card.appendChild(info)
    info.appendChild(name)
    info.appendChild(username)
    info.appendChild(location)
    info.appendChild(profile)
    profile.appendChild(profileLink)
    info.appendChild(followers)
    info.appendChild(following)
    info.appendChild(bio)
    return card
  }

//     <div class="card">
//       <img src={image url of user} />
//       <div class="card-info">
//         <h3 class="name">{users name}</h3>
//         <p class="username">{users user name}</p>
//         <p>Location: {users location}</p>
//         <p>Profile:
//           <a href={address to users github page}>{address to users github page}</a>
//         </p>
//         <p>Followers: {users followers count}</p>
//         <p>Following: {users following count}</p>
//         <p>Bio: {users bio}</p>
//       </div>
//     </div>
// */

//   List of LS Instructors Github username's:
//     tetondan
//     dustinmyers
//     justsml
//     luishrd
//     bigknell