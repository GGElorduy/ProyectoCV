import './Education.css'
import { school } from '../../data/data'

export const printEducation = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  hero.className = 'education'

  const h2 = document.createElement('h2')
  h2.textContent = 'Education'
  h2.addEventListener('click', () => printEducation())
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'allCards'
  hero.appendChild(allCards)

  for (let i = 0; i < school.length; i++) {
    const card = document.createElement('li')
    const title = document.createElement('h3')
    const year = document.createElement('p')
    const institution = document.createElement('p')
    card.className = 'card'
    title.textContent = school[i].degree
    year.textContent = school[i].year
    institution.textContent = school[i].school
    allCards.appendChild(card)
    card.appendChild(title)
    card.appendChild(year)
    card.appendChild(institution)
    card.addEventListener('click', () => {
      allCards.innerHTML = school[i].html
    })
  }
}
