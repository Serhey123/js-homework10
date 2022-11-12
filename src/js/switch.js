const switchRef = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const getCurrentTheme = localStorage.getItem('theme');
const bodyRef = document.body;

bodyRef.classList.add(Theme.LIGHT);

if (getCurrentTheme !== null) {
  if (getCurrentTheme === Theme.DARK) {
    switchRef.checked = true;
  }
  bodyRef.className = getCurrentTheme;
}

switchRef.addEventListener('change', () => {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);
  localStorage.setItem('theme', bodyRef.className);

  console.log(bodyRef);
});
