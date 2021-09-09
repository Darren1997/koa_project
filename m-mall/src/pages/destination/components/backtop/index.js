import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('destination-content');
const backEl = document.querySelector('.destination-layout .backtop');

console.log(backEl);

new Backtop(backEl, scrollContainer.offsetHeight, scrollContainer);