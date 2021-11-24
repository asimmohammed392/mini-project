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
    q:'Which function is called when the following Python program is executed?  f = foo() format(f)',
    options:['str()',' format()','__str__()',' __format__()'],
    answer:1
},
{
    q:'Which of the following statements is used to create an empty set in Python?',
    options:['()','[]','{}','set()'],
    answer:3
},
{
    q:' What arithmetic operators cannot be used with strings in Python?',
    options:['*','-','+','All of the mentioned'],
    answer:1
},
{
    q:'Which of the following statements is used to create an empty list in Python?',
    options:['()','[]','{}','set()'],
    answer:1
},
{
    q:'What is the maximum possible length of an identifier in Python?',
    options:['79 characters','31 characters','63 characters','none of the mentioned'],
    answer:3
},
{
    q:'The output of executing string.ascii_letters can also be achieved by:',
    options:['string.ascii_lowercase_string.digits','string.ascii_lowercase+string.ascii_uppercase','string.letters','string.lowercase_string.uppercase'],
    answer:1
},
]
