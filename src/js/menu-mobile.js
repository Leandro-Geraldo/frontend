const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a')

links.forEach(link => {
    link.addEventListener('click', ()=>{
        removeNavBar()
    })
});

menuIcon.addEventListener('click', ()=>{
    toggleNavBar()
    if (navbar === 'active') {
        removeNavBar()
    }
})


function toggleNavBar(){
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

function removeNavBar(){
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}