(function() {
// Initialize Firebase
const config = {
  apiKey: "AIzaSyDxVOe3CgKhDSTTU80bpgYOau_f7E4521Q",
  authDomain: "farmers-guide-f752c.firebaseapp.com",
  databaseURL: "https://farmers-guide-f752c.firebaseio.com",
  projectId: "farmers-guide-f752c",
  storageBucket: "farmers-guide-f752c.appspot.com",
  messagingSenderId: "819588637821"
};
firebase.initializeApp(config);
//Get element
const preObject= document.getElementById('object');
//Create refences
const dbRefObject= firebase.database().ref().child('object');
// sync object cahnges
dbRefObject.on('value', snap => console.log(snap.val()));
}());
