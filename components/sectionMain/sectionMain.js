import './sectionMain.css'

const skills = [
  {
    Name: 'Language',
    html: `<div class="container"><table><thead><tr><th>Language</th><th>Speaking</th><th>Listening</th><th>Reading/Writing</th></tr></thead><tbody><tr><td>English</td><td>B2</td><td>B2</td><td>C1</td></tr><tr><td>Portuguese</td><td>B2</td><td>B2</td><td>B2</td></tr><tr><td>Spanish</td><td>Native</td><td>Native</td><td>Native</td></tr></tbody></table></div>
`
  },
  {
    Name: 'Professional Skills',
    Data: [
      'Excellent data analysis and problem-solving skills.',
      'Experience in root cause data analysis to identify and address issues.',
      'Advanced knowledge in data analysis tools such as SPSS, Advanced Excel, and SQL.',
      'Familiarity with database management systems and customer relationship management (CRM) applications.',
      'Solid skills in statistical analysis and data visualization using tools like Tableau.',
      'Experience in data analysis to inform strategic decisions and enhance operational processes.',
      'Ability to conduct quality audits and performance evaluations.',
      'Experience in coaching and team training to ensure consistent policy and operational process application.',
      'Experience in continuous improvement of moderation and community safety policies.',
      'Competence in continuous improvement of content quality and safety in online environments.'
    ],
    html: `<div class="container"><h3>Professional Skills</h3><ul class="section"><li>Excellent data analysis and problem-solving skills.</li><li>Experience in root cause data analysis to identify and address issues.</li><li>Solid knowledge of content moderation and online safety policies.</li><li>Experience in continuous improvement of moderation and community safety policies.</li><li>Ability to conduct quality audits and performance evaluations.</li><li>Experience in coaching and team training to ensure consistent policy and operational process application.</li><li>Advanced knowledge in data analysis tools such as SPSS, Advanced Excel, and SQL.</li><li>Familiarity with database management systems and customer relationship management (CRM) applications.</li><li>Competence in continuous improvement of content quality and safety in online environments.</li><li>Solid skills in statistical analysis and data visualization using tools like Tableau.</li><li>Experience in data analysis to inform strategic decisions and enhance operational processes.</li></ul></div>`
  },
  {
    Name: 'Programming Languages',
    List: ['HMLT5', 'CSS', 'JavaScript', 'Java', 'Psython'],
    html: `<div class="container"> <ul class="section"><li>HMLT5</li><li>CSS</li><li>JavaScript</li><li>Java</li><li>Python</li>`
  }
]
const school = [
  {
    year: '2023 - 2024',
    degree: 'Full Stack Developer',
    school: 'ThePower Education',
    html: `<div class="container"><h3>FullStack Developer</h3><p>This intensive program provided me with comprehensive training in web and mobile development, covering everything from fundamentals to advanced techniques. Below are the areas of study and skills acquired:</p><h4>Prework</h4><ul class="section"><li>Basics of HTML, CSS, and JavaScript</li><li>DOM manipulation in JavaScript</li><li>Configuration and use of Vite</li></ul><h4>FullStack Development</h4><ul class="section"><li>Advanced JavaScript and asynchronous programming</li><li>Using TypeScript for safer development</li><li>Professional development tools (Dev Tools, VS Code, GIT)</li><li>Backend development with Node.js and MongoDB</li><li>Creating and consuming REST APIs</li><li>Web scraping techniques</li><li>JWT authentication implementation</li><li>Continuous Integration and Continuous Delivery (CI/CD) practices</li></ul><h4>Professional Development</h4><ul class="section"><li>Job market preparation and professional skills development</li></ul><h4>Advanced Content (CumLaude)</h4><ul class="section"><li>Developing applications with React and TypeScript</li><li>Implementing REST APIs with TypeScript</li><li>Introduction to modern frameworks like Angular, VUE, and Flutter</li><li>Developing mobile applications with Ionic and React Native</li><li>Using Next.js for high-performance web applications</li></ul><p>This program has equipped me with a solid foundation in frontend and backend technologies, as well as modern development methodologies and tools, preparing me to tackle complex challenges in software development.</p>
</div>`
  },
  {
    year: '2012-2016',
    degree: 'Degree in Primary school.',
    school: 'Virgen de Europa, Cádiz',
    html: `<div class="container"><h3>Degree in Primary School</h3><p>Completing a degree in Primary School Education equips individuals with a wide range of competencies and skills essential for effective teaching and fostering learning environments conducive to student growth and development.</p><ul class="section"><li>Planning and organizing classes and educational activities.</li><li>Designing didactic materials adapted to the needs of the students.</li><li>Handling effective teaching and learning techniques.</li><li>Evaluating the progress and performance of students.</li><li>Effective communication skills with students, parents, and colleagues.</li><li>Classroom management and conflict resolution.</li><li>Adapting to cultural and learning diversity in the classroom.</li><li>Using technological resources to enhance the educational process.</li><li>Collaborating in interdisciplinary teams and planning meetings.</li><li>Creating a positive and motivating learning environment.</li><li>Promoting inclusion and equal opportunities.</li><li>Continuously updating and developing professionally in the field of education.</li></ul><p>These competencies highlight pedagogical, social, and technical skills acquired during your Primary School Education degree, showcasing your ability to effectively engage with students, colleagues, and the educational community.</p></div>`
  }
]
const projects = [
  {
    Name: 'Photo-Galery-Unshplash',
    img: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1717237257/Proyects/ScreenShot_Tool_-20240601121946_cpwe7s.png',
    desccription: ` This project is a replica of the Pinterest web application, developed using VITE, with modular styles and independent components for each part of the application. The application allows users to search for images using the Unsplash API, integrated through the official JavaScript client.`,
    link: 'https://github.com/GGElorduy/Photo-Galery-Unshplash'
  },
  {
    Name: 'Online-shop',
    img: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1717237313/Proyects/ScreenShot_Tool_-20240601122109_2_nuo17k.png',
    desccription:
      'Este proyecto es una tienda de arte en línea de la artista Sil Elorduy. La plataforma permite a los usuarios explorar y adquirir obras de arte de manera sencilla y eficiente, ofreciendo diferentes filtros de búsqueda para facilitar la navegación y la selección de artículos. Desarrollada con tecnologías modernas, la tienda asegura una experiencia de usuario óptima y personalizada.',
    link: 'https://github.com/GGElorduy/Online-Shop.git'
  }
]
const experience = [
  {
    Name: 'Quality Assurance Analyst',
    Company: 'TikTok · Full-time',
    Time: 'Feb 2022 - Jul 2023 · 1 yr 6 mos',
    Location: 'Dublín, Dublín, Irlanda · Hybrid',
    Paragraph:
      'This role has the following duties and responsibilities. Support the Team Lead in managing the team when needed.',
    List: [
      `Conduct quality assessment work by ensuring and evaluating the quality delivery of the content reviewed in upean markets.
      `,
      `Conduct root cause data analysis and summary.
      `,
      `Provide QA reports to content quality center team members and liaison with them to ensure consistent quality measurement throughout the operation. 
      `,
      `Work closely with Local Operation and Safety teams, and act as escalation point of contact for policy-related questions, issues, and solutions. 
      `,
      `Conduct coaching and calibration sessions to the Content Moderation team across Europe to ensure that operational policies and processes are applied consistently.
      `,
      `Enhance moderation police and community safety continuously. 
      `
    ]
  },
  {
    Name: 'Senior Analyst',
    Company: 'Accenture Portugal · Full-time',
    Time: 'Oct 2020 - Jun 2021 · 9 mos',
    Location: 'Lisbon metropolitan area',
    Paragraph:
      'I was transferred from the Dublin office as a reinforcement. This role has the following duties and responsibilities. ',
    List: [
      'Perform Coaching on Quality Errors ',
      `Root cause analysis of the errors
    `,
      `Generating and implementing ideas for improvement of the markets quality`,
      `Perform quality audits
    `,
      `Supporting Team Lead in managing the performance of the team. 
    `
    ]
  },
  {
    Name: 'Content Moderation Associate',
    Company: 'HEYS · Full-time',
    Time: 'Dec 2019 - Oct 2020 · 11 mos',
    Location: 'Dublín, Dublín, Irlanda',
    Paragraph: 'This role has the following duties and responsibilities. ',
    List: [
      `Investigate and resolve issues regarding content that is reported for account support and/or safety`,
      `Respond to user inquiries with high quality, speed, empathy, and accuracy`,
      `Understand and remain up-to-date with client policies and guidelines; resolve inquires according to defined policies and procedures`,
      `Fulfill base productivity and quality requirements`
    ]
  }
]
export const personalInfo = {
  aboutMe: {
    h1: 'Javier Gil-Guijarro Elorduy',
    img: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1716199193/WhatsApp_Image_2022-09-19_at_20.03.29_r6riow.jpg',
    coverLeter: `
    Front-End Developer with International Experience
    
    Hello, I'm Javier, a Spanish front-end developer with extensive international experience. Having lived and worked in several countries, I've developed a global perspective and valuable intercultural skills. Currently, I'm honing my web development skills through the prestigious "Rock the Code" course at The Power Tech School.
    
    Seeking Opportunities: Summer 2024
    `,
    oportunities:
      'I am actively seeking summer internships and graduate opportunities for 2024. If your company values passion for technology, adaptability, and multicultural experience, I would be delighted to contribute to your team. ',
    location: '11207 Algeciras, Spain'
  },
  contacts: {
    phone: {
      number: '+34631597491',
      icon: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1717409611/Iconos/whatsapp_hzz4dy.png',
      adress: 'https://wa.me/34631597491'
    },
    email: {
      adress: 'gilguijarro.elorduy@gmail.com',
      icon: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1717408911/Iconos/gmail_abyzzs.png'
    },
    linkin: {
      adress: 'https://www.linkedin.com/in/javiergge/',
      icon: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1717409506/Iconos/linkedin_zpruhr.png'
    },
    github: {
      adress: 'https://github.com/GGElorduy',
      icon: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1717414834/Iconos/github_mroekt.png'
    }
  }
}

export const printPersonalInfo = () => {
  const hero = document.querySelector('#hero')
  const img = document.createElement('img')
  const coverLeter = document.createElement('p')
  const oportunities = document.createElement('p')
  const location = document.createElement('p')
  const ulContact = document.createElement('ul')
  ulContact.className = 'contactList'
  hero.className = 'aboutMe'
  img.className = 'avatarIcon'

  img.src = personalInfo.aboutMe.img
  coverLeter.textContent = personalInfo.aboutMe.coverLeter
  location.textContent = personalInfo.aboutMe.location
  oportunities.textContent = personalInfo.aboutMe.oportunities

  hero.innerHTML = '<h2>About me</h2>'
  hero.appendChild(img)
  hero.innerHTML += '<h3>Front-End Developer with International Experience</h3>'
  hero.appendChild(coverLeter)
  hero.innerHTML += '<h3>Seeking Opportunities: Summer 2024</h3>'
  hero.appendChild(oportunities)
}
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
