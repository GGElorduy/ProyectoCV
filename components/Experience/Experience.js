import './Experience.css'
import { experience } from '../../data/data'

export const printExp = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  hero.className = 'experience'

  const h2 = document.createElement('h2')
  h2.addEventListener('click', () => printExp())
  h2.textContent = 'Work Experience'
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'allCards'
  hero.appendChild(allCards)
  for (let i = 0; i < experience.length; i++) {
    const card = document.createElement('li')
    card.className = 'card'
    const title = document.createElement('h3')
    const company = document.createElement('h4')
    const time = document.createElement('p')
    const location = document.createElement('p')

    allCards.appendChild(card)
    card.appendChild(title)
    card.appendChild(company)
    card.appendChild(time)
    card.appendChild(location)

    title.textContent = experience[i].Name
    company.textContent = experience[i].Company
    time.textContent = experience[i].Time
    location.textContent = experience[i].Location

    card.addEventListener('click', () => {
      allCards.innerHTML = ''
      const divInfo = document.createElement('div')
      const pIntro = document.createElement('p')
      const ul = document.createElement('ul')
      ul.className = 'sampleList'
      pIntro.textContent = experience[i].Paragraph
      divInfo.className = 'container'
      hero.appendChild(divInfo)
      divInfo.appendChild(title)
      divInfo.appendChild(company)
      divInfo.appendChild(time)
      divInfo.appendChild(location)
      divInfo.appendChild(pIntro)
      divInfo.appendChild(ul)
      for (let index = 0; index < experience[i].List.length; index++) {
        const li = document.createElement('li')
        li.textContent = experience[i].List[index]
        ul.appendChild(li)
      }
    })
  }
}
