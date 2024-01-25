let buttons = document.querySelectorAll('.btn');
let filters = document.querySelectorAll('.filter');

// Считываем нажатие на кнопку для показа фильтра
buttons.forEach(buttonElement =>{

    buttonElement.addEventListener('click', function(e){
        filterWindow(buttonElement);
        styleButtonClick(buttonElement);
    })
})

/* Функция добавления класса file(класс для отображения фильтра) */
function filterWindow(buttonElement){
    
    let classButton = Array.from(buttonElement.classList);// здесь хранятся все названия классов нажатой кнопки для открытия фильтра
    for(let i =0;i<filters.length; i++){
        const classFilter = Array.from(filters[i].classList); // здесь хранятся все названия классов 1 фильтра I
        if(classButton[1] === classFilter[classFilter.length -1]){
            filters[i].classList.add('file');
        }
        else{
            filters[i].classList.remove('file')
        }
    }
}

/* Функция для перекраски кнопки и переворота svg элемента после нажатия*/
function styleButtonClick(buttonElement){

    let flag = buttonElement.querySelector('path');
    let colorButtonClick =buttonElement.querySelector('svg');
    
    if (buttonElement.classList.contains('btn-active')) {
        flag.style.fill =  '#002B45';
        buttonElement.classList.remove('btn-active');
        colorButtonClick.classList.remove('btn-active-path');
    }
    
    else {
        buttons.forEach(btn=> {
            btn.classList.remove('btn-active');
            btn.querySelector('path').style.fill =  '#002B45';
            btn.querySelector('svg').classList.remove('btn-active-path');
        });
        flag.style.fill =  '#FBF6EF';
        buttonElement.classList.add('btn-active');
        colorButtonClick.classList.add('btn-active-path');
    }
}












const filterCheckboxes = document.querySelectorAll('.checkbox__input');
const filterButton = document.querySelector('.apply-btn');
const itemsList = document.querySelector('.list-work-examples');

filterButton.addEventListener('click', applyFilters);

function applyFilters() {
  const selectedFilters = Array.from(filterCheckboxes).filter(item => item.checked).map(item => item.id); /// проверяем сколько нажато checkbox
    itemsList.querySelectorAll('.list-work-examples-item').forEach(item => {
    const itemCategory = item.getAttribute('data-category'); // все категории карточек
    if (selectedFilters.length === 0 || selectedFilters.includes(itemCategory)) {
      // Показываем элементы, которые соответствуют выбранным фильтрам или показываем все элементы, если ни один фильтр не выбран
      item.style.display = 'flex';
      console.log(item)
    } else {
      // Скрываем элементы, которые не соответствуют выбранным фильтрам
      item.style.display = 'none';
    }
  });
}