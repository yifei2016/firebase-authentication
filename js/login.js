function login(){
  let provider = new firebase.auth.GithubAuthProvider();
  // firebase.auth().signInWithRedirect(provider);//from index page redirect to github login
  firebase.auth().signInWithPopup(provider)
  .then(function(result){
    console.log(result.user);
    if(result.user !== null){
      window.sessionStorage.user = JSON.stringify(result.user);
      //stringify user property to string, manually give sessionStorage object a property named user,
      //result.user, user is built in property
      //send user to homepage
      window.location.replace("http://localhost:3000/home.html");
    }else{
      // fail, show log in page
      error.innerHTML = `<span class="alert alert-danger" role="alert">Login failed, please try again</span>`
    }
  })
  .catch(function(err){
    error.innerHTML = `<span class="alert alert-danger" role="alert"><strong>Oh snap!</strong>${err.message}</span>`
  })
}
//github send to firebase, firebase redirect back
var gitHubLogin = document.getElementById("gitHubLogin");
var error = document.getElementById("errDiv");
// window.onload = function(){
//   //check if github authentication succedd or not
//   firebase.auth().getRedirectResult().then(function(result) {
//     //succedd
//     if(result.user !== null){
//       sessionStorage.user = JSON.stringify(result.user);
//       //send user to homepage
//       window.location.replace("http://localhost:3000/home.html");
//     }else{
//       // fail, show log in page
//       error.innerHTML = `<span class="alert alert-danger" role="alert">Login failed, please try again</span>`
//     }
//   })
//   .catch(function(err){
//     error.innerHTML = `<span class="alert alert-danger" role="alert"><strong>Oh snap!</strong>${err.message}</span>`
//   })
// }
