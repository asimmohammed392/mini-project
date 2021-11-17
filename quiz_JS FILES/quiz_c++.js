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
    q:'C++ was developed by ___',
    options:['Thomas Kushz','John Kemney',' Bjarne Stroutstrup','James Goling'],
    answer:2
},
{   
    q:'Who invented C++?',
    options:['Dennis Ritchie','Ken Thompson','Brian Kernighan','Bjarne Stroustrup'],
    anmwer:3
},
{   
    q:'C++ is ______________',
    options:['object oriented programming language','procedural programming language','both procedural and object oriented programming language','functional programming language'],
    answer:2
},
{
    q:'Which of the following is the correct syntax of including a user defined header files in C++?',
    options:['#include [userdefined]','#include “userdefined”','#include <userdefined.h>','#include <userdefined>'],
    answer:1
},
{
    q:'Which of the following user-defined header file extension used in c++?',
    options:['hg','cpp','h','hf'],
    answer:2
},
{   
    q:'Which of the following approach is used by C++?',
    options:['Left-right','Right-left','Bottom-up','Top-down'],
    answer:2
},
{
    q:'What is virtual inheritance in C++?',
    options:['C++ technique to enhance multiple inheritance','C++ technique to ensure that a private member of the base class can be accessed somehow','C++ technique to avoid multiple inheritances of classes','C++ technique to avoid multiple copies of the base class into children/derived class'],
    answer:3
},
{
    q:'Which of the following type is provided by C++ but not C?',
    options:['double','float','int','bool'],
    answer:3
},
{
    q:'Which of the following correctly declares an array in C++?',
    options:['array{10};','array array[10];','int array;','int array[10];'],
    answer:3
},
{
    q:'What is the size of wchar_t in C++?',
    options:['Based on the number of bits in the system','2 or 4','4','2'],
    answer:0
},
{
    q:'Which concept allows you to reuse the written code in C++?',
    options:['Inheritance','Polymorphism','Abstraction','Encapsulation'],
    answer:0
},
{
    q:'What is the benefit of c++ input and output over c input and output?',
    options:['Both Type safety & Exception','Sequence container','Exception','Type safety'],
    answer:3
},
{
    q:'What is an abstract class in C++?',
    options:['Any Class in C++ is an abstract class','Class from which any class is derived','Class specifically used as a base class with atleast one virtual functions','Class specifically used as a base class with atleast one pure virtual functions'],
    answer:3
},
{
    q:'What is the size of wchar_t in C++?',
    options:['2','4','2 or 4','Based on the number of bits in the system'],
    answer:3
},
{
    q:'Pick the odd one out.',
    options:['array type','character type','boolean type','integer type'],
    answer:0
},
{
    q:'Which data type is used to represent the absence of parameters?',
    options:['int','short','void','float'],
    answer:2
},
{
    q:'What does ‘\a’ escape code represent?',
    options:['alert','backslash','tab','form feed'],
    answer:0
},
{
    q:'Which type is best suited to represent the logical values?',
    options:['integer','boolean','character','float'],
    answer:1
},
{
    q:'The value 132.54 can be represented using which data type?',
    options:['double','void','int','bool'],
    answer:0
},
{
    q:'The operator used for dereferencing or indirection is ____',
    options:['*','&','->','–>>'],
    answer:0
},
{
    q:'Which one of the following is not a possible state for a pointer.',
    options:['hold the address of the specific object','point one past the end of an object','zero','point to a type'],
    answer:3
},
{
    q:'The void pointer can point to which type of objects?',
    options:['int','float','double','all of the mentioned'],
    answer:3
},
{
    q:'A void pointer cannot point to which of these?',
    options:['methods in c++','class member in c++','methods & class member in c++','none of the mentioned'],
    answer:3
},
{
    q:'What we can’t do on a void pointer?',
    options:['pointer arithmetic','pointer functions','pointer objects','pointer functions & objects'],
    answer:0
},
{
    q:'The data elements in the structure are also known as what?',
    options:['objects','members','data','objects & data'],
    answer:1
},
{
    q:'What will be used when terminating a structure?',
    options:[':','}',';',';;'],
    answer:2
},
{
    q:'What will happen when the structure is declared?',
    options:['it will not allocate any memory','it will allocate the memory','it will be declared and initialized','it will be declared'],
    answer:0
},    
{
    q:'Which of the following is a properly defined structure?',
    options:['struct {int a;}','struct a_struct {int a;}','struct a_struct int a;','struct a_struct {int a;};'],
    answer:3
},
{
    q:'Which of the following is the default return value of functions in C++?',
    options:['int','char','float','void'],
    answer:0
},
{
    q:'What is an inline function?',
    options:['A function that is expanded at each call during execution','A function that is called during compile time','A function that is not checked for syntax errors','A function that is not checked for semantic analysis'],
    answer:0
},
{
    q:'When we define the default values for a function?',
    options:['When a function is defined','When a function is declared','When the scope of the function is over','When a function is called'],
    answer:1
},
{
    q:'If an argument from the parameter list of a function is defined constant then _______________',
    options:['It can be modified inside the function','It cannot be modified inside the function','Error occurs','Segmentation fault'],
    answer:1
},    
{
    q:'Which of the following feature is used in function overloading and function with default argument?',
    options:['Encapsulation','Polymorphism','Abstraction','Modularity'],
    answer:1
},
{
    q:'From which function the execution of a C++ program starts?',
    options:['start() function','main() function','new() function','end() function'],
    answer:1
},
{
    q:'To which does the function pointer point to?',
    options:['variable','constants','function','absolute variables'],
    answer:2
},
{
    q:'What is the default calling convention for a compiler in c++?',
    options:['__cdecl',' __stdcall','__pascal',' __fastcall'],
    answer:0
},
{
    q:'What is the mandatory part to present in function pointers?',
    options:['&','return values','data types','$'],
    answer:2
},
{
    q:'which of the following can be passed in function pointers?',
    options:['variables','data types','functions','objects'],
    answer:2
},    
{
    q:'What is the meaning of the following declaration?int(*ptr[5])();',
    options:['ptr is pointer to function','ptr is array of pointer to function','ptr is pointer to such function which return type is array','ptr is pointer to array of function'],
    answer:1
},
{
    q:'To where does the program control transfers when the exception is arisen?',
    options:['catch','handlers','throw','try'],
    answer:1
},
{
    q:'Which keyword is used to check exception in the block of code?',
    options:['catch','throw','try','handlers'],
    answer:2
},
{
    q:' What will happen when the handler is not found for an exception?',
    options:['calls the standard library function terminate()','raise an error','executes the remaining block','raise an error and executes the remaining block'],
    answer:0
},
{
    q:'What does a class in C++ holds?',
    options:['data','functions','both data & functions','arrays'],
    answer:2
},
{
    q:'How many specifiers are present in access specifiers in class?',
    options:['1','2','3','4'],
    answer:2
},
{
    q:'Which is used to define the member of a class externally?',
    options:[':','::','#','!!$'],
    answer:1
},
{
    q:'Which other keywords are also used to declare the class other than class?',
    options:['struct','union','object','both struct & union'],
    answer:3
},
{
    q:'Constructors are used to ____________',
    options:['initialize the objects','construct the data members','both initialize the objects & construct the data members','delete the objects'],
    answer:0
},
{
    q:'when struct is used instead of the keyword class means, what will happen in the program?',
    options:['access is public by default','access is private by default','access is protected by default','access is denied'],
    answer:0
},
{
    q:'What is the role of a constructor in classes?',
    options:['To modify the data whenever required','To destroy an object','To initialize the data members of an object when it is created','To call private functions from the outer world'],
    answer:2
},
{
    q:'Why constructors are efficient instead of a function init() defined by the user to initialize the data members of an object?',
    options:['Because user may forget to call init() using that object leading segmentation fault','Because user may call init() more than once which leads to overwriting values','Because user may forget to define init() function','All of the mentioned'],
    answer:3
},
{
    q:'What happens if a user forgets to define a constructor inside a class?',
    options:['Error occur','Segmentation fault','Objects are not created properly','Compiler provides a default constructor to avoid faults/errors'],
    answer:3
},
{
    q:'How many parameters does a default constructor require?',
    options:['1','2','0','3'],
    answer:2
},
{
    q:'How many types of constructors are there in C++?',
    options:['1','2','3','4'],
    answer:2
},
{
    q:'What is the role of destructors in Classes?',
    options:['To modify the data whenever required','To destroy an object when the lifetime of an object ends','To initialize the data members of an object when it is created','To call private functions from the outer world'],
    answer:1
},
{
    q:'When destructors are called?',
    options:['When a program ends','When a function ends','When a delete operator is used','All of the mentioned'],
    answer:3
},
{
    q:'What is Inheritance in C++?',
    options:['Wrapping of data into a single class','Deriving new classes from existing classes','Overloading of classes','Classes with same names'],
    answer:1
},
{
    q:'How many specifiers are used to derive a class?',
    options:['1','2','3','4'],
    answer:2
},
{
    q:'Which specifier makes all the data members and functions of base class inaccessible by the derived class?',
    options:['private','protected','public','both private and protected'],
    answer:0
},
{
    q:'What is a virtual function in C++?',
    options:['Any member function of a class','All functions that are derived from the base class','All the members that are accessing base class data members','All the functions which are declared in the base class and is re-defined/overridden by the derived class'],
    answer:3
},
{
    q:'Which is the correct syntax of declaring a virtual function?',
    options:['virtual int func();','virtual int func(){};','inline virtual func();','inline virtual func(){};'],
    answer:0
},
{
    q:'The concept of deciding which function to invoke during runtime is called ______________________',
    options:['late binding','dynamic linkage','static binding','both late binding and dynamic linkage'],
    answer:3
},
{
    q:'What is a pure virtual function?',
    options:['A virtual function defined inside the base class','A virtual function that has no definition relative to the base class','A virtual function that is defined inside the derived class','Any function that is made virtual'],
    answer:1
},
{
    q:'Which of the header file is used for array type manipulation?',
    options:['array','type_traits','iostream','std namespace'],
    answer:3
},
{
    q:'What is the use of is_array() function in C++?',
    options:['To check if a variable is array type or not','To check if a variable is 1-D array type or not','To check if a variable is 2-D array type or not','To check if a variable is 1-D or 2-D array type or not'],
    answer:0
},
{
    q:'What is the use of is_same() function in C++?',
    options:['To check if a variable is array type or not','To check whether two variables have the same characteristics','To check if two variable is of array type or not','To check whether two variables are different or not'],
    answer:1
},
{
    q:'Which of the following is correct about remove_extent() function?',
    options:['Removes the given dimension from an array','Removes the first dimension from the right of the array','Removes the first dimension from the left of the array','Removes the last dimension from the left of the array'],
    answer:2
},
{
    q:'What is meant by heap?',
    options:['Used for fast retrieval of elements','Used for organising the elements','Used for fast retrieval & organising the elements','Used for deleting the elements'],
    answer:2
},
{
    q:'Which value is pointed out first in heap?',
    options:['Lowest value','Highest value','First value','Third value'],
    answer:1
},
{
    q:'How to protect the heap from affecting the memory?',
    options:['Avoid using pointers for associating two data structures','Embed pointed child objects into the parent object','Allocate objects in chunks','All of the mentioned'],
    answer:3
},
{
    q:'In what form does the STL provides heap?',
    options:['queue','list','vector','priority_queue'],
    answer:3
},
{
    q:'How many types are there in binary heaps?',
    options:['1','2','3','4'],
    answers:1
},
{
    q:'What is meant by permutation in c++?',
    options:['To find all the values in the range','To find all the combination of the range','To find all the values & combination in the range','To delete all the values'],
    answer:1
},
{
    q:'How the different permutations are ordered in c++?',
    options:['Compare lexicographically to each other elements','By finding the highest element in the range','By finding the lowest element in the range','By deleting the lowest element in the range'],
    answer:0
},
{
    q:'What is the header file for vector permutation?',
    options:['vector_permutation.h','vector_perm','<algorithm>','vector_permutation'],
    answer:2
},
{
    q:'How many parameters are required for next_permutation?',
    options:['1','2','2 or 3','3'],
    answer:2
},
{
    q:'What is the use of checked iterators?',
    options:['Overwrite the bounds of your container','Not allow you to overwrite the bounds of your container','It will check the list value','Overwrite the bounds of your iterators'],
    answer:1
},
{
    q:'What will happen if the iterator is unchecked?',
    options:['Arising of compiler warnings','Unchecked behavior on program','Nothing will execute','Arising of compiler warnings & Unchecked behavior on program'],
    answer:3
},
{
    q:'How many adaptors support the checked iterators?',
    options:['1','2','3','4'],
    answer:1
},
{
    q:'What kind of errors do checked iterators detect?',
    options:['Uninitialized iterators','Initialized iterators','Range access','Both Uninitialized iterators and range access'],
    answer:3
},
{
    q:'What does the checked iterator allow you to find?',
    options:['Warnings','Compile time error','Run time error','Warnings & Run time error'],
    answers:2
},
]
