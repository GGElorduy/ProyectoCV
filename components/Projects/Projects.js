import './Projects.css'
import { projects } from '../../data/data'

export const printProject = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  hero.className = 'proyects'

  const h2 = document.createElement('h2')
  h2.textContent = 'Recent Projects'
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'proyectUl'
  hero.appendChild(allCards)
  for (let i = 0; i < projects.length; i++) {
    const a = document.createElement('a')
    a.href = projects[i].link

    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    h3.textContent = projects[i].Name
    const img = document.createElement('img')
    img.src = projects[i].img
    img.className = 'project-pic'
    const p = document.createElement('p')
    p.textContent = projects[i].desccription
    allCards.appendChild(li)
    li.appendChild(img)
    li.appendChild(a)
    a.appendChild(h3)
    li.appendChild(p)
  }
}
