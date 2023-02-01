
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDwl5KRYKhKqju3_z6fyuB05J3pBvHoegA",
      authDomain: "adv-c101.firebaseapp.com",
      databaseURL: "https://adv-c101-default-rtdb.firebaseio.com",
      projectId: "adv-c101",
      storageBucket: "adv-c101.appspot.com",
      messagingSenderId: "576790038540",
      appId: "1:576790038540:web:c598c94da674d00c908629",
      measurementId: "G-QHW96P4D65"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirctToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();


function redirctToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}