window.onload = function(){
  let user = sessionStorage.user;
  if(user ===  undefined || user === null){
    window.location.replace("http://localhost:3000");
  }else{
    // Om autentisering lyckas, så finns användarinfo i user
    let userInfo = document.getElementById("userInfo");
    user = JSON.parse(user);//parse user string to object
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
    //delete often is used on deleting object property, but can also be used on deleting what value,
    //in this case, to delete user property
    window.location.replace("http://localhost:3000");
  })
  .catch(function(err) {
    // Utloggning misslyckades
    let error = document.getElementById("errDiv");
    error.innerHTML = `<span class="alert alert-danger" role="alert"><strong>Oh snap!</strong>${err.message}</span>`
  });
}
