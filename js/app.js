const menuBar = document.querySelector('.menuBar');
const p       = document.querySelector('p');
p.style.display = 'none';
let i = false;
menuBar.addEventListener('click', function(){
    if (i === false) {
        menuBar.classList.toggle('open');
        i = true;
        p.style.display = 'block';

    } else{
        menuBar.classList.toggle('open');
        i = false;
    p.style.display = 'none';

    }

    

});