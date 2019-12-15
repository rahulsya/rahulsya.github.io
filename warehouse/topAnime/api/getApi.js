
const display=document.getElementById('display')

const request=new XMLHttpRequest()

request.open('get','https://api.jikan.moe/v3/top/anime',true)

request.onload= function(){
    var data=JSON.parse(this.response)
    //console.log(data);

    if (request.status>=200 && request.status <=300) {
        data.top.forEach(results => {

            const col=document.createElement('div')
            col.classList.add('col-12','col-md-3','col-sm-6','mt-5')

            const card=document.createElement('div')
            card.classList.add('card','rounded-0','border-0','text-white' ,'bg-dark')

            const img=document.createElement('img')
            img.classList.add('card-img-top','img-size','rounded-0')
            img.src=results.image_url

            const cardBody=document.createElement('div')
            cardBody.classList.add('card-body')

            const raiting=document.createElement('p')
            raiting.classList.add('score-text')
            raiting.textContent=results.score

            const title=document.createElement('p')
            title.classList.add('title-text')
            title.textContent=results.title

            const episode=document.createElement('p')
            episode.classList.add('episode-text')
            episode.textContent='Episodes : '+results.episodes


            display.appendChild(col)
            col.appendChild(card)
            card.appendChild(img)
            card.appendChild(cardBody)
            cardBody.appendChild(raiting)
            cardBody.appendChild(title)
            cardBody.appendChild(episode)

            
    
        }); 
    }else{
        console.log('request error');
        
    }
    
    
}

request.send()