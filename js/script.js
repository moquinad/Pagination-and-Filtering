/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const pageHead = document.querySelector('.page-header');
const page = document.querySelector('.page');
const listItems = document.querySelectorAll('li.student-item');
var itemsPerPage = 10;
var currentPage = 1;





/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;
   for (let i = 0; i < list.length; i++) {
      
      if ((i >= startIndex) && (i <= endIndex)){
         list[i].style.display = 'block'
      }
      else {
         list[i].style.display = 'none'
      }
   }
}





/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = () => {
// math function the total number of list items, divides it by the number of items I want per page, rounds up to a whole number, then subtracts 1 to account for the rounding.
const totalPages = Math.ceil(listItems.length / itemsPerPage) - 1;
const navDiv = document.createElement('div');
navDiv.className = 'pagination';
navDiv.setAttribute('id', 'navDiv');
page.appendChild(navDiv);
const navUl = document.createElement('ul');
navUl.setAttribute('id', 'navUl');
navDiv.appendChild(navUl);
// Loops over the total number of pages and creates li elements which each contain an <a> tag for the pagination buttons.
for (let p = 0; p < totalPages; p++) {
   let newLi = document.createElement('li');
   newLi.setAttribute('class', 'newLi');
   newLi.innerHTML = ` <a href="#">${p + 1}</a> `;
   // Appends the newly created li and a elements to the earlier-created div element.
   navUl.appendChild(newLi);
   // Attaches an event listener to each a tag within the created li element that calls the function to display the desired page.
   newLi.addEventListener('click', () =>{
      showPage(listItems,p + 1);
   })
}
}
appendPageLinks();

document.addEventListener('DOMContentLoaded', () => {
   showPage(listItems, 1);
})
const createSearchBar = () => {
   let searchBar = document.createElement('input');
   searchBar.setAttribute('type', 'text');
   searchBar.setAttribute('id', 'search');
   searchBar.setAttribute('class', 'student-search');
   searchBar.setAttribute('placeholder', 'Search');
   searchBar.setAttribute('onkeyup', 'enterSearch()');
   pageHead.appendChild(searchBar);
}
createSearchBar();

const enterSearch = () => {
   const searcher = document.getElementById('search');
   let filter = searcher.value.toUpperCase();
   let navDiv = document.getElementById('navDiv');
   for (let s = 0; s < listItems.length; s++) {
      let h3 = listItems[s].getElementsByTagName('h3')[0];
      let txtValue = h3.textContent || h3.innerText;
      if (searcher.value === ''){
         for (let t = 0; t < listItems.length; t++) {
            if (t < 10){
               listItems[t].style.display = "block";
            } else {
               listItems[t].style.display = "none";
            }
            
         }
         navDiv.style.display = "block"
      } else if (txtValue.toUpperCase().indexOf(filter) > -1){
         listItems[s].style.display = "block";
         navDiv.style.display = "none";
      } else{
         listItems[s].style.display = "none";
         navDiv.style.display = "none";
      }
      
   }
}

const navUl = document.getElementById('navUl');
const newLi = document.getElementsByClassName('newLi');
const aTags = navUl.querySelectorAll('a');
aTags[0].setAttribute('class', 'active');
const setActiveClass = (ev) => {
   for (let a = 0; a < newLi.length; a++) {
      aTags[a].removeAttribute('class');
   }
   ev.target.setAttribute('class', 'active');
}
navUl.addEventListener('click', setActiveClass, false);