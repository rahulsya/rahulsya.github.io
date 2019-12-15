const app=document.getElementById('root')

const logo=document.createElement('img')
logo.src='image/logo.png'

const container=document.createElement('div')
container.setAttribute('class','container')

app.appendChild(logo)
app.appendChild(container)

//create a request var
var request = new XMLHttpRequest()

//get url
request.open('GET','https://ghibliapi.herokuapp.com/films',true)

request.onload=function(){
    var data=JSON.parse(this.response)

    if (request.status >=200 && request.status <=300) {   
        data.forEach(movie => {
            //console.log(movie.title);
            //console.log(movie.description);

            //create div with class card
            const card=document.createElement('div')
            card.setAttribute('class','card')

            const h1=document.createElement('h1')
            h1.textContent=movie.title

            const p = document.createElement('p')
            movie.description=movie.description.substring(0,300)//limit to 300 char
            p.textContent=`${movie.description}...` //end with elips

            //append card to container elemet
            container.appendChild(card)

            //append content to card element
            card.appendChild(h1)
            card.appendChild(p)
            
        }); 
    }
    else{
        const errorMessage=document.createElement('h1')
        errorMessage.textContent='404 not work'
        app.appendChild(errorMessage)
        console.log('error')
    }
}
//send Request
request.send()