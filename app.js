const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})


const skills = [
    {
        name:'C++',
        category:'Programming',
        proficiency:'90%'
    },
    {
        name:'JavaScript',
        category:'Programming',
        proficiency:'80%'
    },
    {
        name:'Java',
        category:'Programming',
        proficiency:'60%'
    },
    {
        name:'Python',
        category:'Programming',
        proficiency:'70%'
    },
    {
        name:'Solidity',
        category:'Programming',
        proficiency:'50%'
    },
    {
        name:'Bash',
        category:'Programming',
        proficiency:'60%'
    },
    {
        name:'Node.js',
        category:'Development',
        proficiency:'80%'
    },
    {
        name:'Express.js',
        category:'Development',
        proficiency:'85%'
    },
    {
        name:'React.js',
        category:'Development',
        proficiency:'75%'
    },
    {
        name:'REST API',
        category:'Development',
        proficiency:'90%'
    },
    {
        name:'Github',
        category:'Version Control',
        proficiency:'80%'
    },
    {
        name:'Systems Deisgn',
        category:'System Design',
        proficiency:'80%'
    },
    {
        name:'Computer Networks',
        category:'Protocols',
        proficiency:'80%'
    },
    {
        name:'Operating System',
        category:'Concepts',
        proficiency:'70%'
    },
    {
        name:'SQL',
        category:'Database',
        proficiency:'80%'
    },
    {
        name:'NoSQL Key-Value',
        category:'Database',
        proficiency:'80%'
    },
    {
        name:'GraphQL',
        category:'Database',
        proficiency:'50%'
    },
    {
        name:'CI/CD',
        category:'Devops',
        proficiency:'80%'
    },
    {
        name:'AWS,GCP',
        category:'Cloud',
        proficiency:'80%'
    },
    {
        name:'Collaborative',
        category:'Communication',
        proficiency:'100%'
    },
]

const container = document.querySelector('.skills-container')

skills.forEach((skill)=>container.appendChild(render(skill)))

function render(skill){
    const div = document.createElement('div')
    div.setAttribute('class','skill hidden')
    const c1 = div1(skill)
    const c2 = div2(skill)
    div.appendChild(c1)
    div.appendChild(c2)
    console.log(div)
    return div
}

function div1(skill){
    const div = document.createElement('div')
    div.setAttribute('class','skill-preview')
    div.setAttribute('style',`width:${skill.proficiency};`)
    const h2 = H2(skill.name)
    const h6 = H6(skill.category)
    console.log(h2,h6)
    div.appendChild(h6)
    div.appendChild(h2)
    return div
}

function div2(skill){
    const div = document.createElement('div')
    div.setAttribute('class','skill-info')

    const progressContainer = document.createElement('div')
    progressContainer.setAttribute('class','progress-container')

    const progress = document.createElement('div')
    progress.setAttribute('class','progress')
    const skillDiv = document.createElement('div')
    skillDiv.setAttribute('style',`width:${skill.proficiency};`)
    progress.appendChild(skillDiv)
    progressContainer.appendChild(progress)
    div.appendChild(progressContainer)
    return div
}

function H6(body){
    var h6 = document.createElement('h6')
    h6.textContent = body
    return h6
}

function H2(body){
    var h2 = document.createElement('h2')
    h2.textContent = body
    return h2
}

const hiddenElements = document.querySelectorAll('.hidden , .hidden2')

hiddenElements.forEach((element)=>observer.observe(element))