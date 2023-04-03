const elements = document.querySelectorAll('.kanban p')
const LIMIT = 20

for (let p of elements) {
  const aboveLimit = p.innerText.length > LIMIT
  const dotsOrEmpty = aboveLimit ? '...' : ''
  p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty
}