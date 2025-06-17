const form = document.getElementById('contact-form');
const inputs = ['name', 'email', 'mobile', 'message'].map(id => document.getElementById(id));
const errorBox = document.getElementById('errorBox');

form.addEventListener('submit', e => {
  e.preventDefault();
  errorBox.textContent = '';
  inputs.forEach(input => input.classList.remove('error-input'));

  const [name, email, mobile, message] = inputs.map(i => i.value.trim());

  if (!name || !email || !mobile || !message) {
    errorBox.textContent = 'All fields are required.';
    highlightEmpty();
    return;
  }

  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    errorBox.textContent = 'Please enter a valid email address.';
    document.getElementById('email').classList.add('error-input');
    return;
  }

  alert('Form submitted successfully!');
  form.reset();
});

function highlightEmpty() {
  inputs.forEach(input => {
    if (!input.value.trim()) input.classList.add('error-input');
  });
}
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}

