// function toggleSidebar() {
//     document.getElementById('SidebarToggler').classList.toggle('active')
// }

function registrationModalToggler() {
    const registrationModal = document.getElementById('registrationModal')
    registrationModal.classList.toggle('active')
}

function loginModalToggler() {
    const loginModal = document.getElementById('loginModal')
    loginModal.classList.toggle('active')
}

function closeBtn() {
    if (registrationModal.classList.contains('active')) {
        registrationModal.classList.remove('active')
    } else if (loginModal.classList.contains('active')) {
        loginModal.classList.remove('active')
    }
}