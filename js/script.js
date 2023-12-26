// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar uyk menghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

//modal box
// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// itemDetailButtons.forEach((btn) =>{
//     btn.onclick = (e) => {
//         itemDetailModal.style.display ='flex';
//         e.preventDefault();
//     };
// });

// //klik tombol close modal
// document.querySelector('.modal .close-icon').onclick = (e) => {
//     itemDetailModal.style.display ='none';
//     e.preventDefault();
// };

// //klik diluar modal
// window.onclick = (e) => {
//     if (e.target === itemDetailModal) {
//         itemDetailModal.style.display = 'none';
//     }
// };

