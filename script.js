function addToFavorites() {
  const url = window.location.href;
  const title = document.title;
  if (window.sidebar && window.sidebar.addPanel) {
    window.sidebar.addPanel(title, url, '');
  } else if (window.external && ('AddFavorite' in window.external)) {
    window.external.AddFavorite(url, title);
  } else {
    alert('Press Ctrl+D (Cmd+D on Mac) to bookmark this site!');
  }
}
function copySiteLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Site link copied to clipboard!');
  });
}
function openModal(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex';
  modalImg.src = img.src;
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
const guestbookForm = document.getElementById('guestbook-form');
const guestbookList = document.getElementById('guestbook');
const guestbookKey = 'phze_guestbook_v1';
function loadGuestbook() {
  const entries = JSON.parse(localStorage.getItem(guestbookKey) || '[]');
  guestbookList.innerHTML = '';
  entries.forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${entry.name}:</strong> ${entry.message}`;
    guestbookList.appendChild(li);
  });
}
if (guestbookForm) {
  guestbookForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('guest-name').value.trim();
    const message = document.getElementById('guest-message').value.trim();
    if (!name || !message) return;
    const entries = JSON.parse(localStorage.getItem(guestbookKey) || '[]');
    entries.unshift({ name, message });
    localStorage.setItem(guestbookKey, JSON.stringify(entries));
    loadGuestbook();
    guestbookForm.reset();
  });
  window.addEventListener('DOMContentLoaded', loadGuestbook);
}
const viewsKey = 'phze_profile_views';
function incrementProfileViews() {
  let views = parseInt(localStorage.getItem(viewsKey) || '0', 10);
  views += 1;
  localStorage.setItem(viewsKey, views);
  document.getElementById('view-count').textContent = views;
}
window.addEventListener('DOMContentLoaded', incrementProfileViews);