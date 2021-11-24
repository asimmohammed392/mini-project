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
    q:' What is the average of first five multiples of 12?',
    options:['36','38','40','42'],
    answer:0
},
{
    q:'What is the difference in the place value of 5 in the numeral 754853?',
    options:['49500','49950','45000','49940'],
    answer:1
},
{
    q:'What is the compound interest on Rs. 2500 for 2 years at rate of interest 4% per annum?',
    options:['180','204','210','220'],
    answer:1
},
{
    q:'A mother is twice as old as her son. If 20 years ago, the age of the mother was 10 times the age of the son, what is the present age of the mother?',
    options:['38 years','40 years','43 years','45 years'],
    answer:3
},
{
    q:'Sohan started a business with a capital of Rs. 80000. After 6 months Mohan joined as a partner by investing Rs. 65000. After one year they earned total profit Rs. 20000. What is share of Sohan in the profit?',
    options:['5222.2','5777.7','6222.2','6777.7'],
    answer:1
},
{
    q:'If January 1, 1996, was Monday, what day of the week was January 1, 1997?',
    options:['Thursday','Wednesday','Friday','Sunday'],
    answer:1
},
{
    q:'The speed of a boat in still water is 5km/hr. If the speed of the boat against the stream is 3 km/hr, what is the speed of the stream?',
    options:['1.5 km/hr','2 km/hr','2.5 km/hr','1 km/hr'],
    answer:2
},
{
    q:'The ratio of the ages of Minu and Meera is 4:2. If the sum of their ages is 6 years, find the ratio of their ages after 8 years.',
    options:['8:6','6:5','6:4','7:5'],
    answer:1
},
{
    q:'How many times the hands of a clock coincide in a day?',
    options:['24','22','23','21'],
    answer:1
},
{
    q:'A clock is set at 4am. It loses 16 minutes in 24 hours. What will be the correct time when the clock indicates 9pm on the 4th day?',
    options:['8pm','7pm','10pm','11pm'],
    answer:2
},
{
    q:'A shopkeeper sold an article for Rs. 2500. If the cost price of the article is 2000, find the profit percent.',
    options:['23%','25%','27%','29%'],
    answer:1
},
{
    q:' A running man crosses a bridge of length 500 meters in 4 minutes. At what speed he is running?',
    options:['8.5 km/s','7.5 km/s','9.5 km/s','6.5km/s'],
    answer:1
},
{
    q:'Worker A completes a task in 8 days and worker B completes the same task in 10 days. If both A and B work together, in how many days they will complete the task?',
    options:['40/10 days','40/9 days','40/8 days','40/7 days'],
    answer:1
},
{
    q:' A, B, and C together can complete a work in 6 days. The efficiency of A and C is 3 times of B, and the efficiency of A is 4 times of C, and then they alone can finish the job in how many days.',
    options:['10,24,40 days','15, 30, 60 days','12, 12, 18 days','15, 60, 30 days'],
    answer:0
},
{
    q:'30 men can complete the work in 30 days. If after every 10 days, 5 workers leave the job, the work will be finished in how many days?',
    options:['32 days','35 days','37 days','40 days'],
    answer:3
},
{
    q:' A: B: C is in the ratio of 3: 2: 5. How much money will C get out of Rs 1260?',
    options:['252','125','503','none of these'],
    answer:3
},
{
    q:' In a kilometer race, A beats B by 40 meters or by 5 seconds. What is the time taken by A over the course?',
    options:['1 minute 57 seconds','2 minutes.','1.5 minutes.','None of these'],
    answer:1
},
{
    q:'What is the probability of getting an even number when a dice is rolled?',
    options:['1/5','1/2','1/3','1/4'],
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
    answer:0
},
{
    q:'A box contains 2 red balls, 3 black balls, and 4 white balls. Find the number of ways by which 3 balls can be drawn from the box in which at least 1 black ball should be present.',
    options:['64','48','32','96'],
    answer:0
},

]
