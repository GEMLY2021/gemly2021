let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
document.querySelectorAll('.video-container video').forEach(vid =>{
    vid.onclick=() => {
   document.querySelector('.popup-video').style.display= 'block';
   document.querySelector('.popup-video video').src= vid.getAttribute('src');
   }
});

document.querySelector('.popup-video span').onclick=() => {
document.querySelector('.popup-video').style.display= 'none';
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}