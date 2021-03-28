/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const ulList = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

sections.forEach((element)=>{
	const sectionIterator = element.getAttribute('data-nav');
	const newli = document.createElement('li');
	const newLink = document.createElement('a');
	const textNode = document.createTextNode(sectionIterator);
	//Add tags to links
	newLink.setAttribute("href",`#${sectionIterator.toLowerCase().replace(/\s/g, "")}`);

	newLink.addEventListener('click', function(e){
		e.preventDefault();
		element.scrollIntoView({behavior: "smooth"});
	});
	//Build the navbar with links
	newLink.appendChild(textNode);
	newli.appendChild(newLink);
	fragment.appendChild(newli);
});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
	//window.addEventListener(‘scroll’, toggleActiveState); 
	// function toggleActiveState
	// build the nav
	ulList.appendChild(fragment);
	const navBarLinks = document.querySelectorAll('a');
	// Add class 'active' to section when near top of viewport
	window.addEventListener('scroll',()=>{
		sections.forEach((sec) => {
		const rect = sec.getBoundingClientRect();
		//detect active sections and items in the navbar
		if(rect.top >= 0 && rect.top <= 200) {
		sec.classList.add("activeSection");
		navBarLinks.forEach( (nLink)=>{
			if(sec.getAttribute('data-nav') == nLink.textContent){
				nLink.classList.add('activeSection');
			}else{
				if (nLink.classList.contains('activeSection')){
				nLink.classList.remove("activeSection");
				}
			}
		})
		} else {
			if (sec.classList.contains('activeSection')){
			sec.classList.remove("activeSection");
				navBarLinks.forEach( (nLink)=>{
				if (nLink.classList.contains('activeSection')){
				nLink.classList.remove("activeSection");
				}	
				})
			}
		};
})});
