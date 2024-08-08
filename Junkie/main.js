const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY_PLACEHOLDER",
  authDomain: "validator-533ce.firebaseapp.com",
  projectId: "validator-533ce",
  storageBucket: "validator-533ce.appspot.com",
  messagingSenderId: "367967988323",
  appId: "1:367967988323:web:18390dc55e99e718d9a656",
  measurementId: "G-0KGQDK3R0Y",
  databaseURL: "https://validator-533ce-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let message = document.querySelector('.text');
let title = document.querySelector('.title');
function fetchArticle(){
  const dataRef = database.ref('content');
  dataRef.once('value')
  .then((snapshot) => {
    const data1 = snapshot.val().title;
    const data2 = snapshot.val().message;
    title.innerHTML = `<img src = "https://cdn-icons-png.flaticon.com/512/11504/11504574.png" class = "iconSize"> ${data1}`;
    message.innerHTML = `${data2}`;
  }).catch((error) => {
    
  });
  dataRef.on('value',(snapshot) => {
    const data1 = snapshot.val().title;
    const data2 = snapshot.val().message;
    title.innerHTML = `<img src = "https://cdn-icons-png.flaticon.com/512/11504/11504574.png" class = "iconSize"> ${data1}`;
    message.innerHTML = `${data2}`;
  })
}

function later(){
  iziToast.success({
    title:'Coming soon',
    timeOut: 2000
  });
}

function info(){
  iziToast.success({
    title: 'About me',
    message:'Faith Ipinyomi ©Fashion Junkie All rights reserved',
    timeOut: 20000
    
  });
}
window.onload = () => {
  fetchArticle();
  let Announcement = document.getElementById('Announcement');
  let Text = "Welcome to our store!, Feel free to explore.";
  let colors = ["blue","yellow","green","pink","gold","grey","black","white","red"];
  
  setInterval(() => {
    let index = Math.floor(Math.random() * colors.length);
    Announcement.style.color = colors[index];
    Announcement.innerHTML = Text;
  },2000);
  
}