import './contact.css'
import { personalInfo } from '../sectionMain/sectionMain'
export const printContact = () => {
  const list = document.querySelector('.contactList')
  const mainbut = document.createElement('li')
  const mainIcon = document.createElement('img')
  list.className = 'contactList'
  mainIcon.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1717585228/Iconos/charla_e2dbph.png'

  mainbut.className = 'mainBut'
  list.appendChild(mainbut)
  mainbut.appendChild(mainIcon)

  mainIcon.addEventListener('click', () => {
    list.innerHTML = ''
    const closeLi = document.createElement('li')
    const icon = document.createElement('img')
    icon.src =
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1714727007/cerrar-el-simbolo-de-la-cruz-en-un-circulo_n63eqz.png'
    icon.className = 'closeIcon'
    closeLi.addEventListener('click', () => {
      list.innerHTML = ''
      printContact()
    })

    list.appendChild(closeLi)
    closeLi.appendChild(icon)

    for (const key in personalInfo.contacts) {
      const li = document.createElement('li')
      const link = document.createElement('a')
      const icon = document.createElement('img')
      icon.className = 'iconContact'
      icon.src = personalInfo.contacts[key].icon
      link.href = personalInfo.contacts[key].adress
      list.appendChild(li)
      li.appendChild(link)
      link.appendChild(icon)
    }
  })
}
