


firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
            
            });
      });
}
getData();


var firebaseConfig = {
      apiKey: "AIzaSyBlTzzeFHQAG7NQ5SP-1ZuCdAPLFIT-mS4",
      authDomain: "kwitter-d43e4.firebaseapp.com",
      projectId: "kwitter-d43e4",
      storageBucket: "kwitter-d43e4.appspot.com",
      messagingSenderId: "280270820238",
      appId: "1:280270820238:web:4574e6952b0e24e720cadf"
};