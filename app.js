let li = document.querySelectorAll(".indicate")

li.forEach((ele)=>{
    ele.addEventListener("click" , function(){

        li.forEach(e=>{
            e.classList.remove("active")
        })
       let id =  ele.parentNode.id
       let box = document.getElementById(id).querySelector(".indicate")
       box.classList.add("active")
    })
    
})