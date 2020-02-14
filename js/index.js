
const file="../data/project.json"
const domProject=document.querySelector(".project")
class Project{
    async getProject(){
        const data=await fetch(file)
        const result=await data.json()
        
        return result.project
    }

    displayProject(projects){
        let element='';
        projects.forEach(project => {
            element+=`
            <div class="col-12 col-md-4 mb-5">
          <div class="card shadow">
            <div class="img-size">
              <img src="${project.image}" class="card-img-top p-1" width="400px" height="300px" alt="this image">
            </div>
            <div class="card-body">
              <h5 class="card-title" style="font-size: larger;margin-top: -15px;"><b><a href="${project.link}" class="text-dark" target="_blank">${project.name}</a></b></h5>
              <p class="card-text text-sm-left" style="font-size:small;">${project.tags } </p>
            </div>
          </div>
        </div>
            `
        });
        domProject.innerHTML=element
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    const project= new Project()

    project.getProject().then(projects=>{
        project.displayProject(projects)
    })
})