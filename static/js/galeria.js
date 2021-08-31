document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.Classlist.add("active") ;  
     })
});

document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.Classlist.remove("active");     
    })
})
