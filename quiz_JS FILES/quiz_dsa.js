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
    q:'How can we initialize an array in C language?',
    options:['int arr[2]=(10, 20)','int arr(2)={10, 20}','int arr[2] = {10, 20}','int arr(2) = (10, 20)'],
    answer:2
},
{
    q:'Which of the following is the correct way of declaring an array?',
    options:['int javatpoint[10];','int javatpoint;','javatpoint{20};','array javatpoint[10];'],
    answer:0
},
{
    q:'Which of the following highly uses the concept of an array?',
    options:['Binary Search tree','Caching','Spatial locality','Scheduling of Processes'],
    answers:2
},
{
    q:'Which of the following is the disadvantage of the array?',
    options:['Stack and Queue data structures can be implemented through an array.','Index of the first element in an array can be negative','Wastage of memory if the elements inserted in an array are lesser than the allocated size','Elements can be accessed sequentially.'],
    answer:0
},
{
    q:'Which of these best describes an array?',
    options:['A data structure that shows a hierarchical behavior','Container of objects of similar types','Arrays are immutable once initialised','Array is not a data structure'],
    answer:1
},
{
    q:'How do you instantiate an array in Java?',
    options:['int arr[] = new int(3);','int arr[];','int arr[] = new int[3];','int arr() = new int(3);'],
    answers:2
},
{
    q:'Which of the following is the correct way to declare a multidimensional array in Java?',
    options:['int[] arr;','int arr[[]];','int[][]arr;','int[[]] arr;'],
    answer:2
},
{
    q:'When does the ArrayIndexOutOfBoundsException occur?',
    options:['Compile-time','Run-time','Not an error','Not an exception at all'],
    answer:1
},  
{
    q:'Which of the following concepts make extensive use of arrays?',
    options:['Binary trees','Scheduling of processes','Caching','Spatial locality'],
    answers:3
},
{
    q:'What are the advantages of arrays?',
    options:['Objects of mixed data types can be stored','Elements in an array cannot be sorted','Index of first element of an array is 1','Easier to store elements of same data type'],
    answer:3
},
{
    q:'Assuming int is of 4bytes, what is the size of int arr[15];?',
    options:['15','19','11','60'],
    answer:3
},
{
    q:'Elements in an array are accessed _____________',
    options:['randomly','sequentially','exponentially','logarithmically'],
    answer:0
},
{
    q:' A linear collection of data elements where the linear node is given by means of pointer is called?',
    options:['Linked list','Node list','Primitive list','Unordered list'],
    answer:0
},
{
    q:'In linked list each node contains a minimum of two fields. One field is data field to store the data second field is?',
    options:['Pointer to character','Pointer to integer','Pointer to node',' Node'],
    answer:2
},
{
    q:'What would be the asymptotic time complexity to add a node at the end of singly linked list, if the pointer is initially pointing to the head of the list?',
    options:['O(1)','O(n)','θ(n)','θ(1)'],
    answer:2
},
{
    q:'What would be the asymptotic time complexity to insert an element at the front of the linked list (head is known)?',
    options:['O(1)','O(n)','O(n2)','O(n3)'],
    answer:0
},
{
    q:'What would be the asymptotic time complexity to find an element in the linked list?',
    options:['O(1)','O(n)','O(n2)','O(n4)'],
    answer:1
},
{
    q:'What would be the asymptotic time complexity to insert an element at the second position in the linked list?',
    options:['O(1)','O(n)','O(n2)','O(n3)'],
    answer:0
},
{
    q:'The concatenation of two lists can be performed in O(1) time. Which of the following variation of the linked list can be used?',
    options:['Singly linked list','Doubly linked list','Circular doubly linked list','Array implementation of list'],
    answer:2
},
{
    q:'In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is?',
    options:['log2 n','n⁄2','log2 n – 1','n'],
    answer:3
},
{
    q:'What is the time complexity of inserting at the end in dynamic arrays?',
    options:['O(1)','O(n)','O(logn)','Either O(1) or O(n)'],
    answer:3
},
{
    q:'What is the time complexity to count the number of elements in the linked list?',
    options:['O(1)','O(n)','O(logn)','O(n2)'],
    answer:1
},
{
    q:'Linked lists are not suitable for the implementation of ___________',
    options:['Insertion sort','Radix sort','Polynomial manipulation','Binary search'],
    answer:3
},
{
    q:'Linked list is considered as an example of ___________ type of memory allocation.',
    options:['Dynamic','Static','Compile time','Heap'],
    answers:0
},
{
    q:'Linked list data structure offers considerable saving in _____________',
    options:['Computational Time','Space Utilization','Space Utilization and Computational Time','Speed Utilization'],
    answers:2
},
{
    q:'Which of the following is false about a doubly linked list?',
    options:['We can navigate in both the directions','It requires more space than a singly linked list','The insertion and deletion of a node take a bit longer','Implementing a doubly linked list is easier than singly linked list'],
    answer:3
},
{
    q:' What is a memory efficient double linked list?',
    options:['Each node has only one pointer to traverse the list back and forth','The list has breakpoints for faster traversal','An auxiliary singly linked list acts as a helper list to traverse through the doubly linked list','A doubly linked list that uses bitwise AND operator for storing addresses'],
    answer:0
},
{
    q:'How do you calculate the pointer difference in a memory efficient double linked list?',
    options:['head xor tail','pointer to previous node xor pointer to next node','pointer to previous node – pointer to next node','pointer to next node – pointer to previous node'],
    answer:1
},
{
    q:'What is the worst case time complexity of inserting a node in a doubly linked list?',
    options:['O(nlogn)','O(logn)','O(n)','O(1)'],
    answers:2
},
]