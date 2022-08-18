let taskId = 0;
let tasks = [];
let completedTasks = [];
let form = document.querySelector('.popup__form');
let popupInputTitle = document.querySelector('.popup__input-title');
let popupInputDescription = document.querySelector('.popup__input-description');
let popupBg = document.querySelector('.todo__overlay');
let popup = document.querySelector('.popup');
let incomplete = document.querySelector('#incomplete');
let completed = document.querySelector('#completed');
let incompleteTasksList = document.querySelector('.incomplete-Tasks-List');
let completedTasksList = document.querySelector('.completed-Tasks-List');
let contentSubtitle = document.querySelector('.content__subtitle');
let addButton = document.querySelector('.todo__add');
let incompleteList = document.querySelector('#incompleteList');

function renderTasks() {									// Отрисовка уже определенных задач
	tasks.forEach(task => {
		const cloneTemplate = incomplete.content.cloneNode(true);
		const titleElement = cloneTemplate.querySelector('.checkbox__title');
		titleElement.textContent = task.title;

		const descriptionElement = cloneTemplate.querySelector('.checkbox__subtitle');
		descriptionElement.textContent = task.description;
		incompleteTasksList.append(cloneTemplate);
	});

}

renderTasks();

function openOrClosePopup() {
	popupBg.classList.toggle('todo__overlay_active');
	popup.classList.toggle('popup_active');
}

function closepopup(event) {
	if (event.target.classList.contains('popup')) {
		openOrClosePopup();
	}
}

document.addEventListener('keydown', function (event) {
	if (event.key === '+') {
		openOrClosePopup();
	}
});

popupBg.addEventListener('click', closepopup);
addButton.addEventListener('click', openOrClosePopup);

function addTask() {											// Добавление задачи
	tasks.push({
		title: popupInputTitle.value,
		description: popupInputDescription.value,
		id: taskId
	});

	const cloneTemplate = incomplete.content.cloneNode(true);
	const titleElement = cloneTemplate.querySelector('.checkbox__title');
	const inputElement = cloneTemplate.querySelector('.checkbox__input');
	const labelElement = cloneTemplate.querySelector('.checkbox__label');
	const descriptionElement = cloneTemplate.querySelector('.checkbox__subtitle');

	inputElement.setAttribute('id', taskId);
	labelElement.setAttribute('for', taskId);
	titleElement.textContent = popupInputTitle.value;
	descriptionElement.textContent = popupInputDescription.value;
	incompleteTasksList.append(cloneTemplate);

	openOrClosePopup();
	document.querySelector('.popup__input-title').value = "";
	document.querySelector('.popup__input-description').value = "";
	taskId += 1;
	contentSubtitle.textContent = `${tasks.length} incomplete, ${completedTasks.length} completed`;
}

form.addEventListener('submit', addTask);

function removeItem(event) {									// Пометка о завершении задачи

	if (event.target.classList.contains('checkbox__input')) {

		let elementForDelete = tasks.find(item => item.id == event.target.id);

		const cloneTemplate = completed.content.cloneNode(true);
		const titleElement = cloneTemplate.querySelector('.checkbox__title');
		const inputElement = cloneTemplate.querySelector('.checkbox__input');
		const labelElement = cloneTemplate.querySelector('.checkbox__label');
		const descriptionElement = cloneTemplate.querySelector('.checkbox__subtitle');

		inputElement.setAttribute('id', elementForDelete.id);
		labelElement.setAttribute('for', elementForDelete.id);
		titleElement.textContent = elementForDelete.title;
		descriptionElement.textContent = elementForDelete.description;
		completedTasksList.prepend(cloneTemplate);
		completedTasks.unshift(elementForDelete);
		event.target.parentElement.remove();
		tasks.splice(tasks.indexOf(elementForDelete), 1);
		contentSubtitle.textContent = `${tasks.length} incomplete, ${completedTasks.length} completed`;
	}
}

incompleteList.addEventListener('click', removeItem);










