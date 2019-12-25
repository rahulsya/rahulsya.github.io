class topAnimeElements extends HTMLElement{

    set results(result){
        this.innerHTML=`
            <div class="card rounded-0 border-0 text-white bg-dark text-center">
                <img src="${result.image_url}" alt="" class="card-img-top img-size rounded-0">
                <div class="card-body">
                    <p class="score-text">${result.score}</p>
                    <p class="title-text">${result.title}</p>
                    <p class="episode-text">Episodes : ${result.episodes}</p>
                </div>
            </div>
        `
    }
}
customElements.define('top-anime',topAnimeElements)
