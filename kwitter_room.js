var firebaseConfig = {
  apiKey: "AIzaSyC_NyeMGKYTZjtt7dknHsCW9sDxMdwFBIg",
  authDomain: "kwitter-53b89.firebaseapp.com",
  databaseURL: "https://kwitter-53b89-default-rtdb.firebaseio.com",
  projectId: "kwitter-53b89",
  storageBucket: "kwitter-53b89.appspot.com",
  messagingSenderId: "472035635920",
  appId: "1:472035635920:web:23c222848e52fab6fa64d5"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 user_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome  "+user_name;

function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerhtml=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({ 
    name:user_name, 
    message:msg,
     like:0 
    });

    document.getElementById("msg").value="";
}