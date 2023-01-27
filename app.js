const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden , .hidden2')
console.log(hiddenElements);

hiddenElements.forEach((element)=>observer.observe(element))