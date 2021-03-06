const input = document.querySelector('input');
const demo = document.querySelector('p.demo i');
const container = document.querySelector('.container');

let index = 1;

function demoText(e) {
  demo.textContent = input.value;

  if (e.key === 'Enter' && input.value.trim() !== '') createDisplay();
}

function createDisplay() {
  const div = document.createElement('div');
  div.classList.add('content');
  div.innerHTML = `
	<span>${index}</span>
	<p>${input.value}</p>
	`;

  container.appendChild(div);

  input.value = '';
  input.focus();
  demo.textContent = '';
  index++;
}

input.addEventListener('keyup', demoText);
