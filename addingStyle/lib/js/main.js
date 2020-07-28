let rightSide = document.querySelector('.right_side');
rightSide.style['background-color'] = '#d3c26f';

let namesRef = document.getElementsByClassName('name');
for(let i=0; i< namesRef.length; i++){
    namesRef[i].style.textShadow = '-6px 5px 2px yellow';
}