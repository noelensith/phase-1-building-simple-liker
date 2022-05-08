// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//this const hearts selects the like glyph for all the glyphs on the page
const hearts = document.querySelectorAll('.like-glyph');
//fucnction likeHeart takes in an element being the glyph that we are targeting
// callsback the function mimic server, after the function runs we use .then
//which is takes in an anonymous function that checks to see whether the heartAction is empty
//if so since we clicked it we change the innerText to become full, and also add the classname 'activated-heart'
//if the full heart is unliked it returns an empty glyph
function likeHeart(e) {
  const heartAction = e.target;
  mimicServerCall("")
    .then(() => {
      if (heartAction.innerText === EMPTY_HEART) {
        heartAction.innerText = FULL_HEART;
        heartAction.className = 'activated-heart';
      } else {
        heartAction.innerText = EMPTY_HEART;
        heartAction.className = '';
      }
    })
//catch is meant to display error message if error occurs
    .catch((error) => {
      const modal = document.getElementById('modal');
      modal.className = '';
      modal.innerText = error;
      setTimeout(() =>  modal.className = 'hidden', 3000);
    });
}
//eventlistener listens to check for each glyph of hearts is clicked, if so run likeHeart
for (const glyph of hearts) {
  glyph.addEventListener("click", likeHeart);
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
