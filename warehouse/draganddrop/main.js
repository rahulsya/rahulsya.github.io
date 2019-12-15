const list_item=document.querySelectorAll('.list-item')
const lists=document.querySelectorAll('.list')


let draggedItem=null

for (let i = 0; i < list_item.length; i++) {
    const item=list_item[i]
    // console.log(item)
    item.addEventListener('dragstart',function(){
        console.log('dragStart')
        //get selected items and set with timeout
        draggedItem=item
        setTimeout(function(){
            item.style.display='none'
        },0)
    })

    item.addEventListener('dragend',function(){
        console.log('dragend');
        setTimeout(function(){
            draggedItem.style.display='block'
            draggedItem=null
        },0)
    })
    
    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragenter',function(e){
            console.log('you enter this');
            e.preventDefault()
            this.style.backgroundColor='rgba(0,0,0,0.2)'
        })
        list.addEventListener('dragover',function(e){
            console.log('you being dragged')
            e.preventDefault()
        })
        list.addEventListener('dragleave',function(){

            // setTimeout(function(){
                 list.style.backgroundColor='rgba(0,0,0,0.1)'
            // },1000)
            
        })
        list.addEventListener('drop',function(){
            this.append(draggedItem)
            this.style.backgroundColor='rgba(0,0,0,0.1)'
        })
        
    }
}