const config = {
      apiKey: "AIzaSyC_NyeMGKYTZjtt7dknHsCW9sDxMdwFBIg",
      authDomain: "kwitter-53b89.firebaseapp.com",
      databaseURL: "https://kwitter-53b89-default-rtdb.firebaseio.com",
      projectId: "kwitter-53b89",
      storageBucket: "kwitter-53b89.appspot.com",
      messagingSenderId: "472035635920",
      appId: "1:472035635920:web:23c222848e52fab6fa64d5"
    };
    
    // Initialize Firebase
  firebase.initializeApp(config);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag="<h4 class="message_h4">+message+"</h4>"; 
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class="glyphicon glyphicon-thumbs-up">like:"+like+"</span></button>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementByI("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}