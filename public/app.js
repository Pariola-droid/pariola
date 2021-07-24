document.addEventListener('DOMContentLoaded', function () {
       
   const hamburger = document.querySelector(".hamburger");
            const smallNav = document.querySelector("._smallNav");
            const spanOne = document.querySelector(".span1");
            const spanTwo = document.querySelector(".span2");

            hamburger.addEventListener("click", () => {
              smallNav.classList.toggle("open");

              hamburger.classList.toggle("size");
                
              spanOne.classList.toggle("one");
              spanTwo.classList.toggle("two");
                
            });
    
   })