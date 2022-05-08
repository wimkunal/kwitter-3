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
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
 window.location = "index.html";
  }
