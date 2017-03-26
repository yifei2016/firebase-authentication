window.onload = function(){
  let user = sessionStorage.user;
    if(user ===  undefined || user === null){
      window.location.replace("http://localhost:3000");
    }else{
      // Om autentisering lyckas, så finns användarinfo i user
      let userInfo = document.getElementById("userInfo");
      user = JSON.parse(user);
      userInfo.innerHTML = user.displayName;
      let imageDiv = document.getElementById("imageDiv");
      imageDiv.setAttribute( 'src', user.photoURL );
    }
}
function logOut(){
  firebase.auth().signOut()
  .then(function(result) {
    // Utloggning lyckades
    delete sessionStorage.user;
     window.location.replace("http://localhost:3000");
  })
  .catch(function(err) {
    // Utloggning misslyckades
    let error = document.getElementById("errDiv");
    error.innerHTML = `<span class="alert alert-danger" role="alert"><strong>Oh snap!</strong>${err.message}</span>`
  });
}
