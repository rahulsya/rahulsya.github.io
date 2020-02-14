
const container=document.querySelector(".container")

async function getApi(){
    try {
        let response=await fetch('https://ghibliapi.herokuapp.com/films')
        let result=await response.json()
        //console.log(result);
        return result
    } catch (error) {
        console.log('error');
    }
}

function display(movies){
    let result=""
    movies.forEach(movie => {
        result+=`
        <div class="card">
            <h1>${movie.title}</h1>
            <p>${movie.description.substring(0,300)}...</p>
        </div>
        `
    });
    container.innerHTML=result
}

document.addEventListener('DOMContentLoaded',()=>{
    getApi().then(data=>{
        display(data)
    })
})

