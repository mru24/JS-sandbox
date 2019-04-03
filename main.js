const cont = document.querySelector('.container');

console.log(cont.nodeType);
console.log(cont.nodeName);
console.log(cont.hasChildNodes());
// parent node/element
console.log(cont.parentNode);
// or
console.log(cont.parentElement);
console.log(cont.parentElement.parentElement);
// child nodes/elements
console.log(cont.childNodes);
console.log(cont.children);

// next sibling
console.log(cont.nextSibling);
// next element sibling
console.log(cont.nextElementSibling);
// previous sibling
console.log(cont.previousSibling);
// previous element sibling
console.log(cont.previousElementSibling);

console.log(cont.children[1]);


const navItem = document.querySelectorAll('nav a');

console.log(navItem);
const navItemArray = Array.from(navItem);
console.log(navItemArray);
navItemArray.forEach(e => {
  e.addEventListener('mouseover', function() {
    e.classList.add('red');
  })
  e.addEventListener('mouseout', function() {
    e.classList.remove('red');
  })
})

// const lis = document.querySelectorAll('li');
//
// console.log(lis);
//
// // check for array
// console.log(Array.isArray(lis));
//
// // create array from node list
// var lisArray = Array.from(lis);
//
// console.log(lisArray);
//
// // check for array
// console.log(Array.isArray(lisArray));
//
// // use forEach method on array
// lisArray.forEach(e => {
//   e.addEventListener('click', function() {
//     if(this.classList.contains('red')) {
//       this.classList.remove('red');
//     } else {
//       this.classList.add('red');
//     }
//   });
// })
