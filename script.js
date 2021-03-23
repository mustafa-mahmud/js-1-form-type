const input = document.querySelector('input');
const demo = document.querySelector('p.demo i');
const container = document.querySelector('.container');

function demoText(e) {
  demo.textContent = input.value;

  if (e.key === 'Enter') createDisplay();
}

function createDisplay() {
  const div = document.createElement('div');
  div.classList.add('content');
  div.innerHTML = `
	<span>1</span>
	<p>${input.value}</p>
	`;

  container.appendChild(div);

  input.value = '';
  input.focus();
  demo.textContent = '';
}

input.addEventListener('keyup', demoText);
