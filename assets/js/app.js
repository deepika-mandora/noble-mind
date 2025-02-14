
const menulist = document.querySelector('.menulist')
const menuicon = document.querySelector('.menuicon')
const navlink = document.querySelectorAll('.navlink')


menuicon.addEventListener('click' , () => {
    menulist.classList.toggle('show')
    menuicon.classList.toggle('cros')
    document.querySelector('body').classList.toggle('overflow-hidden')
}
)

navlink.forEach((e) => {
    e.addEventListener('click' ,()=>{
        menulist.classList.remove('show')
        menuicon.classList.remove('cros')
        document.querySelector('body').classList.remove('overflow-hidden')
    })
})

