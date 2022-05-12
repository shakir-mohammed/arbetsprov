const bellSvg = document.querySelector('.bell')
const closeBtn = document.querySelector('.close')
const showcaseDiv = document.querySelector('.showcase')
const notificationsDiv = document.querySelector('.notifications')
const toggleSvg = document.querySelector('.toggle')


bellSvg.addEventListener('click', () => toggleMenu())
closeBtn.addEventListener('click', () => toggleMenu())


function toggleMenu() {
if (bellSvg.classList.contains('bell-toggled')) {
       showcaseDiv.classList.remove('showcase-hidden')
       bellSvg.classList.remove('bell-toggled')
       notificationsDiv.style.display = 'none'
   } else {
       
       bellSvg.classList.add('bell-toggled')
       notificationsDiv.style.display = 'block';
    showcaseDiv.classList.add('showcase-hidden')
    toggleSvg.classList.add('toggled')
    }
}
