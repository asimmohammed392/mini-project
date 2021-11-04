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
},
{
    q:'Python is better than C++?',
    options:['True','False'],
    answer:0
},
{
    q:'Which of these is OOPS concept?',
    options:['Encapsulation','Abstraction','Format Specifiers','Inheritance'],
    answer:2
},
{
    q:'Best Sport?',
    options:['Cricket','Football','Baseball'],
    answer:0
},
{
    q:'Can We convert list to tuple in python?',
    options:['True','False'],
    answer:0
},
{
    q:'Who is the founder of Haryanka Dynasty?',
    options:['Ajatashatru','Harshvardhan','Bimbisara'],
    answer:2
},
{
    q:'The Rowlatt Act was passed in :',
    options:['1963','1980','1959'],
    answer:2
},
{
    q:'Best programming language',
    options:['Java','pthon','c++'],
    answer:1
},
{
    q:'Which language is use for back end of website',
    options:['c#','php','c'],
    answer:1
},
{
    q:'which of the following is not used for creating websites',
    options:['c','python','php'],
    answer:0
},
{
    q:'mother of computer',
    options:['Adam','charles babbage','ertugrul'],
    answer:0
},
{
    q:'number of semester in B.E',
    options:['7','8','9'],
    answer:1
},
{
    q:'In which year india won the t20 world cup',
    options:['2011','2009','2007'],
    answer:2
},
{
    q:'number of players in cricket team',
    options:['11','15','10'],
    answer:0
},
{
    q:'number of languages in india',
    options:['932','392','293'],
    answer:2
},
{
    q:'Father of humayun',
    options:['babur','akbar','shah jahan'],
    answer:0
},
{
    q:'99+12=',
    options:['111','112','110'],
    answer:0
},
{
    q:'Which rule we use in maths',
    options:['BODMAS','none','sigma'],
    answer:0 
},
{
    q:'Which country has highest military',
    options:['India','America','china'],
    answer:0
},
{
    q:'How many types of keys are there in DBMS?',
    options:['6','5','4'],
    answer:0
},
{
    q:'In Below names, who is the Indian WWE wrestler',
    options:['big show','john cena','kali'],
    answer:2
},
{
    q:'Capital of Telangana',
    options:['Delhi','Hyderabad','kashmir'],
    answer:1
},
{
    q:'Largest animal in world',
    options:['dinosaur','giraffe','Whale'],
    answer:2
},
{
    q:'Best premire league',
    options:['IPL','BBL','PPL'],
    answer:0
},
{
    q:'Capital of India',
    options:['Lucknow','Delhi','Ahmedabad'],
    answer:1
},
{
    q:'How many days are there in a year',
    options:['366','354','365'],
    answer:2
},

]