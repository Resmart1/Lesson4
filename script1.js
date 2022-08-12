let items = [
	{
		title: 'text1',
		id: 0
	},
	{
		title: 'text2222',
		id: 1
	}
];




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

function removeItem(event) {
	if (event.target.classList.contains('checkbox__input')) {
		event.target.parentElement.remove();
		items.splice(event.id, 1);
	}
}


function addItem() {
	items.push({
		title: inputTitle.value
	});

	renderTodoArray();
}

document.querySelector('.todo__list').innerHTML = fullTemplate;

let todoElement = document.querySelector('.todo__list');

todoElement.addEventListener('click', removeItem);


let inputTitle = document.querySelector('.form__title');
let forme = document.querySelector('.form');

forme.addEventListener('submit', addItem);