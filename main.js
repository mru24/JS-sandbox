const cont = document.querySelector('.container');

const lis = document.querySelectorAll('li');

console.log(lis);

var lisArray = Array.from(lis);

console.log(lisArray);

lisArray.forEach(e => {
  e.addEventListener('click', function() {
    if(this.classList.contains('red')) {
      this.classList.remove('red');
    } else {
      this.classList.add('red');
    }
  });
})
