var firebaseConfig = {
      apiKey: "AIzaSyB1j_HXEffqIf9jzg3Gr9YSvBz3qbyAz3A",
      authDomain: "kwitter-1-13585.firebaseapp.com",
      databaseURL: "https://kwitter-1-13585-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-13585",
      storageBucket: "kwitter-1-13585.appspot.com",
      messagingSenderId: "176134762752",
      appId: "1:176134762752:web:8f1a5d1fcd3858ccc083e5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message = message_data['message'];
like = message_data ['like'];
name_with_tag = "<h4> "+ name  +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like; "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
     window.location.replace("index.html");
      }