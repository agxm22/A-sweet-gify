function showNextPage() {
  const current = document.querySelector('.story-page.active');
  const next = current.nextElementSibling;
  if (next && next.classList.contains('story-page')) {
    current.classList.remove('active');
    next.classList.add('active');
  }
}
