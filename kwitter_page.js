const firebaseConfig = {
    apiKey: "AIzaSyCU5CbViMmYy2OlJLZ_iZGT4bpIk1iMSKk",
    authDomain: "kwitter-8164a.firebaseapp.com",
    databaseURL: "https://kwitter-8164a-default-rtdb.firebaseio.com",
    projectId: "kwitter-8164a",
    storageBucket: "kwitter-8164a.appspot.com",
    messagingSenderId: "257733954202",
    appId: "1:257733954202:web:a3e2f01ddcb39880b2ed23"
};

firebase.initializeApp(firebaseConfig);
var user = localStorage.getItem("username");
var room = localStorage.getItem("room");

function send() {
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room).push({
        name: user,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
function getData() {
    firebase.database().ref("/" + room).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

                console.log(firebase_message_id);
                console.log(message_data);

                name2 = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];

                tag_name = "<h4> " + name2 + "<img class='user_tick' src='tick (1).png'></h4>";
                message_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like  + " onclick='updateLike(this.id)'>";
                span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                row = tag_name + message_tag + like_button + span_tag;
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}
getData();
function back() {
    localStorage.removeItem("username");
    localStorage.removeItem("room");
    window.location.replace("index.html");
}
function regresar() {
    window.location.replace("kwitter_room.html");
}
function updateLike(id){
    likes = document.getElementById(id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room).child(id).update({
        like: updated_likes
    })
}
