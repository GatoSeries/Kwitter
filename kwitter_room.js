const firebaseConfig = {
    apiKey: "AIzaSyCU5CbViMmYy2OlJLZ_iZGT4bpIk1iMSKk",
    authDomain: "kwitter-8164a.firebaseapp.com",
    databaseURL: "https://kwitter-8164a-default-rtdb.firebaseio.com",
    projectId: "kwitter-8164a",
    storageBucket: "kwitter-8164a.appspot.com",
    messagingSenderId: "257733954202",
    appId: "1:257733954202:web:a3e2f01ddcb39880b2ed23"
  };
  
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  
 
   });});}
getData();