const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const quiz=[
{
    q:'Which month comes before June?',
    options:['May','September','July','August'],
    answer:0
},
{
    q:'What colour is a banana?',
    options:['Red','Yellow','White','Blue'],
    answer:1
},
{
    q:'3+4=7?',
    options:['True','False'],
    answer:0
},
{
    q:'What time of day we have breakfast?',
    options:['Afternoon','Evening','Morning'],
    answer:2
},
{
    q:'What is 22+6?',
    options:['99','26','16','78'],
    answer:3
}
]