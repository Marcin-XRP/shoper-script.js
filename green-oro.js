alert('Shoper: skrypt z GitHuba działa ✅');

document.addEventListener('DOMContentLoaded', function () {
  const h1 = document.querySelector('.header-home-bg__content.content--main h1.split');
  if (!h1) return;

  const text = (h1.textContent || '').trim();
  const parts = text.split(/\s+/);
  if (parts.length < 2) return;

  const first = parts.shift();
  const rest = parts.join(' ');

  h1.innerHTML =
    `<span class="first-word">${first}</span><br><span class="rest-words">${rest}</span>`;
});
