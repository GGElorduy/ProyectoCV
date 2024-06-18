import './PersonalInfo.css'
import { personalInfo } from '../../data/data'
const printInfo = (title, text) => {
  const hero = document.querySelector('#hero')
  const h3 = document.createElement('h3')
  h3.textContent = title
  const p = document.createElement('p')
  p.textContent = text
  hero.appendChild(h3)
  hero.appendChild(p)
}
export const printPersonalInfo = () => {
  const hero = document.querySelector('#hero')
  const img = document.createElement('img')
  hero.className = 'aboutMe'
  img.className = 'avatarIcon'
  img.src = personalInfo.aboutMe.img
  hero.innerHTML = '<h2>About me</h2>'
  hero.appendChild(img)
  printInfo(
    'Front-End Developer with International Experience',
    personalInfo.aboutMe.coverLeter
  )
  printInfo(
    'Seeking Opportunities: Summer 2024',
    personalInfo.aboutMe.oportunities
  )
}
