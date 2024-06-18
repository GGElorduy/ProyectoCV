import './sectionMain.css'
import { school, experience, skills, projects } from '../../data/data'

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

  for (let i = 0; i < skills.length; i++) {
    const card = document.createElement('li')
    const title = document.createElement('h3')
    card.className = 'card'
    allCards.appendChild(card)
    card.appendChild(title)
    title.textContent = skills[i].Name

    card.addEventListener('click', () => {
      if (card.textContent == 'Language') {
        const h3 = document.createElement('h3')
        h3.textContent = 'Language'
        hero.insertBefore(h3, allCards)
        allCards.innerHTML = skills[i].html
      }
      if (card.textContent == 'Professional Skills') {
        hero.innerHTML = ''
        hero.appendChild(h2)
        const h3 = document.createElement('h3')
        h3.textContent = skills[i].Name
        const ul = document.createElement('ul')
        ul.className = 'list'
        hero.appendChild(h3)
        hero.appendChild(ul)
        for (let index = 0; index < skills[i].Data.length; index++) {
          const li = document.createElement('li')
          li.textContent = skills[i].Data[index]
          ul.appendChild(li)
        }
      }
      if (card.textContent == 'Programming Languages') {
        hero.innerHTML = ''
        hero.appendChild(h2)
        h2.addEventListener('click', () => printSkills())

        const h3 = document.createElement('h3')
        h3.textContent = skills[i].Name
        const ul = document.createElement('ul')
        ul.className = 'progLang'
        hero.appendChild(h3)
        hero.appendChild(ul)
        for (let index = 0; index < skills[i].List.length; index++) {
          const li = document.createElement('li')
          li.textContent = skills[i].List[index]
          ul.appendChild(li)
        }
      }
    })
  }
}
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
