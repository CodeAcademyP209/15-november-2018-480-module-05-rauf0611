var allHeaders = document.querySelectorAll('.header');

for(var i = 0; i < allHeaders.length; i++){
    allHeaders[i].addEventListener("click", function (e) {  

        var activeHeader = document.querySelector('.header.active');

        if(activeHeader){
           activeHeader.classList.remove("active"); 
           activeHeader.querySelector("i").className = "fas fa-plus";
        }else{
            this.classList.add("active");
            this.querySelector("i").className = "fas fa-minus";
        }
    })
}


