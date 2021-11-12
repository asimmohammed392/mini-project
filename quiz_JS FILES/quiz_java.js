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
        q:'Which Set class should be most popular in a multi-threading environment, considering performance constraint?',
        options:[' HashSet',' ConcurrentSkipListSet','LinkedHashSet',' CopyOnWriteArraySet'],
        answer:1
},
{
    q:'Which Map class should be most popular in a multi-threading environment, considering performance constraint?',
    options:['Hashtable','  CopyOnWriteMap',' ConcurrentHashMap','  ConcurrentMap'],
    answer:1
    },
    
    {
        q:'Which allows the removal of elements from a collection?',
        options:['Enumeration','Iterator',' Both',' None of the above'],
        answer:3
    },
    
    {
        q:'Static functions can be accessed using null reference.',
        options:['True','False'],
        answer:0
    },
    
    {
        q:'What is Abstraction?',
        options:['Abstraction is a technique to define different methods of same type.',' Abstraction is the ability of an object to take on many forms.','It refers to the ability to make a class abstract in OOP.','None of the above.'],
        answer:2
    },
    
    {
        q:'What is JRE?',
        options:['JRE is a java based GUI application.','JRE is an application development framework.',' JRE is an implementation of the Java Virtual Machine which executes Java programs.',' None of the above.'],
        answer:2
    },
    {
        q:'What is Deserialization?',
        options:['Deserialization is the process of restoring state of an object from a byte stream.','Serialization is the process of restoring state of an object from an object.',' Both',' None of the above'],
        answer:0
    },
    {
        q:'Can a top level class be private or protected?',
        options:['True.','False'],
        answer:3
    },
    {
        q:'You want subclasses in any package to have access to members of a superclass. Which is the most restrictive access that accomplishes this objective?',
        options:['public','private','protected','transient'],
        answer:2
    },
    {
        q:'What is the most restrictive access modifier that will allow members of one class to have access to members of another class in the same package?',
        options:['public','abstract','synchronized','default access'],
        answer:3
    },
    {
        q:'Which cause a compiler error?',
        options:['Enumeration','Iterator',' Both',' None of the above'],
        answer:3
    },
    {
        q:'Which allows the removal of elements from a collection?',
        options:['int[ ] scores = {3, 5, 7};','int [ ][ ] scores = {2,7,6}, {9,3,45};','String cats[ ] = {"Fluffy", "Spot", "Zeus"};','boolean results[ ] = new boolean [] {true, false, true};'],
        answer:1
    },
    
    {
        q:'Which one creates an instance of an array?',
        options:['int[ ] ia = new int[15];','float fa = new float[20];','char[ ] ca = "Some String";','int ia[ ] [ ] = { 4, 5, 6 }, { 1,2,3 };'],
        answer:0
    },
    
    {
        q:'Which of the following class level (nonlocal) variable declarations will not compile?',
        options:['protected int a;','transient int b = 3;','private synchronized int e;','volatile int d;'],
        answer:2
    },
    {
        q:'Given a method in a protected class, what access modifier do you use to restrict access to that method to only the other members of the same class?',
        options:['final','static','protected','private'],
        answer:3
    },
    
    {
        q:'Which is a valid declaration within an interface?',
        options:['public static short stop = 23;','protected short stop = 23;','transient short stop = 23;','final void madness(short stop);'],
        answer:0
    },
    
    {
        q:' Which of the below is valid way to instantiate an array in java?',
        options:['int myArray [] = {1, 3, 5};',' int myArray [] [] = {1,2,3,4};',' int [] myArray = (5, 4, 3);',' int [] myArray = {“1”, “2”, “3”};'],
        answer:0
    },
    
    {
        q:'Which of the below are reserved keyword in Java?',
        options:['array',' int','goto',' null'],
        answer:2
    },
    
    {
        q:'Select all the core concepts of OOPS',
        options:[' Abstraction','Data Encapsulation','Interface',' Generics'],
        answer:3
    },
    
    {
        q:'Can we have two main methods in a java class?',
        options:['Yes',' No'],
        answer:0
    },
    
    {
        q:'Which of the below are Not built-in class loaders in java?',
        options:['Bootstrap Class Loader','Extensions Class Loader','Runtime Class Loader','System Class Loader'],
        answer:2
    },
    
    
    

]