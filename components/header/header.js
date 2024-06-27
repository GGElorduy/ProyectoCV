import './header.css'
import { printPersonalInfo } from '../PersonalInfo/PersonalInfo'
import { printEducation } from '../Education/Education'
import { printExp } from '../Experience/Experience'
import { printSkills } from '../Skills/Skills'
import { printProject } from '../Projects/Projects'

export const printHeader = () => {
  const perInfoBut = document.querySelector('#perInfo')
  const education = document.querySelector('#education')
  const skills = document.querySelector('#skills')
  const exp = document.querySelector('#exp')
  const project = document.querySelector('#project')

  perInfoBut.addEventListener('click', () => printPersonalInfo())
  education.addEventListener('click', () => printEducation())
  skills.addEventListener('click', () => printSkills())
  exp.addEventListener('click', () => printExp())
  project.addEventListener('click', () => printProject())
}
