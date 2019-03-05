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
const prelight= document.getElementById('light');
//Create refences
const dbReflight= firebase.database().ref().child('light');
// sync logs cahnges
dbReflight.on('value', snap => {
prelight.innerText=JSON.stringify(snap.val(),null,3);
});
const pretemp= document.getElementById('temp');
//Create refences
const dbReftemp= firebase.database().ref().child('temperature');
// sync logs cahnges
dbReftemp.on('value', snap => {
pretemp.innerText=JSON.stringify(snap.val(),null,3)+" c";
});
const prehum= document.getElementById('hum');
//Create refences
const dbRefhum= firebase.database().ref().child('moisture');
// sync logs cahnges
dbRefhum.on('value', snap => {
prehum.innerText=JSON.stringify(snap.val(),null,3);
});
}());
