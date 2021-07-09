document.addEventListener('DOMContentLoaded', ()=> {
    fetchData();
})

const fetchData = () => {
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => data.forEach(renderData))
}

const renderData = (data) => {
    let dogBar = document.querySelector('#dog-bar')
    let span = document.createElement('span')
    span.textContent = data.name 
    dogBar.append(span)

    span.addEventListener('click', e => {
        let dogInfo = document.querySelector('#dog-info')

        let img = document.createElement('img')
        img.src = data.image

        let name = document.createElement('h2')
        name.textContent = data.name; 

        let isGoodDog = document.createElement('button')
        if (data.isGoodDog == true) {
            isGoodDog.textContent = 'Good Dog'
        } else {
            isGoodDog.textContent = 'Bad Dog'
        }

        isGoodDog.addEventListener('click', (e)=> {
            if (e.target.textContent == 'Good Dog'){
                e.target.textContent = 'Bad Dog'
            } else {
                e.target.textContent = 'Good Dog'
            }
        })

        dogInfo.append(img, name, isGoodDog)

    })
}