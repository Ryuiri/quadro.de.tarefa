const columns = document.querySelectorAll('.column__cards');
const cards = document.querySelectorAll('.card');
let draggedCard;

const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed= 'move';
};
const dragOver = (event) => {
    event.preventDefault();

};
const dragEnter = ({target}) => {
    if (target.classList.contains('column__cards')){
        target.classList.add('column--highlight');
    }
};
const dragLeave = ({target}) => {
     
    };



cards.forEach((card) => {
    card.addEventListener('dragstart', dragStart);
});

columns.forEach((column) => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragEnter);
});
