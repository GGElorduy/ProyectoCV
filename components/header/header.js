import './header.css'
import {
  printEducation,
  printExp,
  printProject
} from '../sectionMain/sectionMain'
import { printPersonalInfo } from '../PersonalInfo/PersonalInfo'
import { printSkills } from '../Skills/Skills'

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
