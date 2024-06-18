import './Skills.css'
import { skills } from '../../data/data'
const printList = (x) => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = x
}
export const printSkills = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  hero.className = 'skills'
  const h2 = document.createElement('h2')
  h2.textContent = 'Skills'
  h2.addEventListener('click', () => printSkills())
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'allCards'
  hero.appendChild(allCards)
  for (const key in skills) {
    const title = document.createElement('h3')
    const card = document.createElement('li')
    title.textContent = skills[key].Name
    card.className = 'card'
    allCards.appendChild(card)
    card.appendChild(title)
    card.addEventListener('click', () => {
      allCards.innerHTML = skills[key].html
    })
  }
}
