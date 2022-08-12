let items = [];
let form = document.querySelector('.popup__form');
let inputTitle = document.querySelector('.popup__input');

function renderTodoArray() {

	let fullTemplate = '';

	for (let index = 0; index < items.length; index++) {
		let template = `
            <div class="checkbox">
                <input id="checkbox${items[index].title}" type="checkbox" class="checkbox__input">
                <label for="checkbox${items[index].title}" class="checkbox__label">
                    <div class="checkbox__text">
                        <div class="checkbox__title">
                            ${items[index].title}
                        </div>
                    </div>
                </label>
            </div>
        `;
		fullTemplate = fullTemplate + template;
		document.querySelector('.todo__list').innerHTML = fullTemplate;
	}
}

renderTodoArray();

function addItem() {
	items.push({
		title: inputTitle.value
	});

	renderTodoArray();
	popupBg.classList.remove('todo__overlay_active');
	popup.classList.remove('popup_active');
	document.querySelector('.popup__input').value = "";
}

form.addEventListener('submit', addItem);

function removeItem(event) {
	if (event.target.classList.contains('checkbox__input')) {
		event.target.parentElement.remove();
		items.splice(event.id, 1);
	}
}

let todoElement = document.querySelector('.todo__list');
todoElement.addEventListener('click', removeItem);

let popupBg = document.querySelector('.todo__overlay');
let popup = document.querySelector('.popup');
let btn = document.querySelector('.todo__add');


function addpopup() {
	popupBg.classList.add('todo__overlay_active');
	popup.classList.add('popup_active');
}

function closepopup(event) {
	if (event.target.classList.contains('popup')) {
		popupBg.classList.remove('todo__overlay_active');
		popup.classList.remove('popup_active');
	}
}

document.addEventListener('keydown', function (event) {
	if (event.key === '+') {
		addpopup();
	}
});

popupBg.addEventListener('click', closepopup);

btn.addEventListener('click', addpopup);





