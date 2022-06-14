// const burgerButton = document.querySelector("#mobileButton");//кнопка на которую нажимаем
// const menu = document.querySelector('.navigation');//меню которое будем показывать
// // const overlay = document.querySelector('.overlay');//затемнение
// const showMenu = () => {
//     menu.classList.toggle('visible');
//     // overlay.classList.toggle('visible');
//     burgerButton.classList.toggle('open-menu');
// }

// burgerButton.addEventListener('click', showMenu)

$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});