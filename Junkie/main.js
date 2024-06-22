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
  let Announcement = document.getElementById('Announcement');
  let Text = "Welcome to our store!, Feel free to explore.";
  let colors = ["blue","yellow","green","pink","gold","grey","black","white","red"];
  
  setInterval(() => {
    let index = Math.floor(Math.random() * colors.length);
    Announcement.style.color = colors[index];
    Announcement.innerHTML = Text;
  },2000);
  
}