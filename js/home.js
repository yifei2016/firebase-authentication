window.onload = function(){
  let user = sessionStorage.user;
  let special = document.getElementById("special");
  if(user ===  undefined || user === null){
    window.location.href = '/';
  }else{
    // Om autentisering lyckas, så finns användarinfo i user
    let userInfo = document.getElementById("userInfo");
    user = JSON.parse(user);//parse user string to object
    console.log(user)
    userInfo.innerHTML = user.displayName;
    if(user.displayName==="Yifei Wang"){
      special.disabled = false;
    } else {
      special.disabled = true;
    }
    let imageDiv = document.getElementById("imageDiv");
    imageDiv.setAttribute( 'src', user.photoURL );
  }
}
//   special.addEventListener("click",function(event){
//     console.log(user)
//     //event.preventDefault();
//     //user = JSON.parse(user);
//     /*if(user.displayName==="David Andersson"){
//       special.disabled = true;
//     }else*/
//   })
// }
function logOut(){
  firebase.auth().signOut()
  .then(function(result) {
    // Utloggning lyckades
    delete sessionStorage.user;
    //delete often is used on deleting object property, but can also be used on deleting what value,
    //in this case, to delete user property
     window.location.href = '/';
  })
  .catch(function(err) {
    // Utloggning misslyckades
    let error = document.getElementById("errDiv");
    error.innerHTML = `<span class="alert alert-danger" role="alert"><strong>Oh snap!</strong>${err.message}</span>`
  });
}
