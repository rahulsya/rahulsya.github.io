const url="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rahulsya"
const blog=document.querySelector(".blogs")

class Blog{
    async getData(){
        const data=await fetch(url)
        const result=await data.json();
        return result.items
    }
    
    displayBlog(blogs){
        let result=""
        blogs.forEach(blog => {
            result+=`
            <div class="col-12 col-md-4 mb-5 ">
            <div class="card shadow">
                    <div class="img-size">
                      <img src="${blog.thumbnail}" class="card-img-top p-1" width="400px" height="300px" alt="this image">
                    </div>
                    <div class="card-body ">
                      <h5 class="card-title" style="font-size: larger;margin-top: -15px;"><b><a href="${blog.link}" class="text-dark" target="_blank">${blog.title}</a></b></h5>
                      <p class="card-text text-sm-left" style="font-size:small;">${blog.categories}</p>
                    </div>
                  </div>
                  </div>
            `
        });
    
        blog.innerHTML=result
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const myBlog=new Blog()

    myBlog.getData().then(blogs=>{
        myBlog.displayBlog(blogs)
    })
})