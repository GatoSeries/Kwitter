const firebaseConfig = {
  apiKey: "AIzaSyCU5CbViMmYy2OlJLZ_iZGT4bpIk1iMSKk",
  authDomain: "kwitter-8164a.firebaseapp.com",
  databaseURL: "https://kwitter-8164a-default-rtdb.firebaseio.com",
  projectId: "kwitter-8164a",
  storageBucket: "kwitter-8164a.appspot.com",
  messagingSenderId: "257733954202",
  appId: "1:257733954202:web:a3e2f01ddcb39880b2ed23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "¡Aloha " + username + "!"

function room(){
  room = document.getElementById("room").value;
  
  firebase.database().ref("/").child(room).update({
    purpose: "adding room name"
  })
  window.location.replace("kwitter_page.html");
  localStorage.setItem("room", room);
  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
 
   });});}

getData();
function redirectToRoomName(name){ 
console.log(name);
localStorage.setItem("room", name);
window.location = "kwitter_page.html"
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room");
  window.location.replace("index.html");
}
