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
    q:' Who developed Python Programming Language?',
    options:['Wick van Rossum','Rasmus Lerdorf','Guido van Rossum','Niene Stom'],
    answer:2
},
{
    q:'Which type of Programming does Python support?',
    options:['object-oriented programming','structured programming','functional programming',' all of the mentioned'],
    answer:3
},
{
    q:'Is Python case sensitive when dealing with identifiers?',
    options:['no','yes',' machine dependent','none of the mentioned'],
    answer:0
},
{
    q:'Which of the following is the correct extension of the Python file?',
    options:['.python','.pl','.py','.p'],
    answer:2
},
{
    q:'Which keyword is used for function in Python language?',
    options:['Function','Def','Fun','Define'],
    answer:1
},
{
    q:'Which of the following character is used to give single-line comments in Python?',
    options:['//','#','!','/*'],
    answer:1
},
{
    q:'What is output of print(math.pow(3, 2))?',
    options:['9.0','None','9','None of mentioned'],
    answer:0
},
{
    q:' Python supports the creation of anonymous functions at runtime, using a construct called __________',
    options:['pi','anonymous','lambda','none of the mentioned'],
    answer:2
},
{
    q:'Which of the following is the truncation division operator in Python?',
    options:['|','//','/','%'],
    answer:1
},
{
    q:'Which of the following functions is a built-in function in python?',
    options:['factorial()','print()','seed()',' sqrt()'],
    answer:1
},
{
    q:'Which of the following is the use of id() function in python?',
    options:[' Every object doesn’t have a unique id','Id returns the identity of the object','All of the mentioned','None of the mentioned'],
    answer:1
},
{
    q:'What will be the output of the following Python function? min(max(False,-3,-4), 2,7)',
    options:['-4','-3','2','False'],
    answer:3
},
{
    q:' Which of the following is not a core data type in Python programming?',
    options:['Tuples','Lists','Class','Dictionary'],
    answer:2
},
{
    q:' What will be the output of the following Python expression if x=56.236?    print("%.2f"%x)',
    options:['56.236','56.23','56.0000','56.24'],
    answer:3
},
{
    q:'Which of these is the definition for packages in Python?',
    options:['A set of main modules','A folder of python modules','A number of files containing Python definitions and statements','A set of programs making use of Python modules'],
    answer:1
},
{
    q:'  What will be the output of the following Python function?      len(["hello",2, 4, 6])',
    options:['Error','6','4','3'],
    answer:2
},
{
    q:' What will be the output of the following Python statement?',
    options:['bc','abc','a','bca'],
    answer:1
},
{
    q:'Which function is called when the following Python program is executed?  f = foo() format(f)',
    options:['str()',' format()','__str__()',' __format__()'],
    answer:1
},
{
    q:'What is the probability of getting a sum 5 from two throws of a dice?',
    options:['1/9','1/8','1/7','1/6'],
    answer:0
},
{
    q:' A man draws two cards together from a pack of 52 cards. What is the probability of both the cards being kings?',
    options:['1/111','1/121','1/221','1/321'],
    answer:2
},
{
    q:'What is the market price of a 9% share when a person gets 180 by investing Rs. 4000?',
    options:['150','200','250','300'],
    answer:1
},
{
    q:'If 15 men can reap the crops of a field in 28 days, in how many days will 5 men reap it?',
    options:['50 days','60 days','84 days','9.333 days'],
    answer:2
},
{
    q:'The true discount on a bill of Rs. 2700 is Rs. 200. What is the banker s discount?',
    options:['Rs. 210','Rs. 212','Rs. 216','Rs. 218'],
    answer:2
},
{
    q:'If 30% of a certain number is 12.6, what is the number?',
    options:['24','42','23','32'],
    answer:1
},
{
    q:'Complete the series 2, 5, 9, 19, 37.......',
    options:['76','74','75','None of these'],
    answer:2
},
{
    q:'Find out the wrong number in the series: 125, 106, 88, 76, 65, 58, 53',
    options:['125','106','88','76','65'],
    answer:2
},
{
    q:'What should come in place of the question mark (?) in the following number series:4, 5, 14, 51, ?',
    options:['220','162','280','216'],
    answer:0
},
{
    q:'40 % of 280 =?',
    options:['112','116','115','120'],
    answer:0
},
{
    q:' In what ways the letters of the word "RUMOUR" can be arranged?',
    options:['180','150','200','230'],
    answer:3
},
{
    q:'A box contains 2 red balls, 3 black balls, and 4 white balls. Find the number of ways by which 3 balls can be drawn from the box in which at least 1 black ball should be present.',
    options:['64','48','32','96'],
    answer:0
},

]