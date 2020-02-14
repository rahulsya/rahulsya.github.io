import './topAnime.js'
const display=document.getElementById('display')

const request=new XMLHttpRequest()

request.open('get','https://api.jikan.moe/v3/top/anime',true)

console.log('mulai');

request.onload= function(){
    var data=JSON.parse(this.response)
    console.log(data);

    if (request.status>=200 && request.status <=300) {
        data.top.forEach(results => {
          
            const el=document.createElement('top-anime')
            el.classList.add('col-12','col-md-3','col-sm-6','mt-5','text-center')
            el.results=results
            display.appendChild(el)

        })
    }else{
        console.log('request error');
        
    }
    
    
}

request.send()
console.log('selesai');
