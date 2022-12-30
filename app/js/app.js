// active button
function href_link() {
    alert("УПССССС!\n Эта функция пока не работает\n Однако, спасибо за запись");
}
function href_social() {
    alert("УПССССС!\n К сожалению нет ссылки на соц.сети");
}
function href_video() {
    alert("УПССССС!\n К сожалению видео нет!!");
}
function phone_number(){
    alert("Эта ссылка переносит вас на быстрый звонок контакту, не вводя его номер телефона.")
}
function mail_too(){
    alert("Эта ссылка переносит вас на быструю отправку Email")
}
// active button end

// Hamburger
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navigation-top');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
// Hamburger end

// Tabs start
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("name");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabs__link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}
// Tabs end