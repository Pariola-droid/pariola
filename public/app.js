// import LocomotiveScroll from 'locomotive-scroll';

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

            
            // <script>
            //     (function () {
            //         var scroll = new LocomotiveScroll();
            //     })();
            // </script>
  
            // const scroll = new LocomotiveScroll({
            //     el: document.querySelector('[data-scroll-container]'),
            //     smooth: true
            // });
  
            // const roll = document.querySelector('._rollT');
            // roll.innerHTML = roll.textContent.replace(/\s/g,"<span>$&</span>");

            
            const roll = document.querySelectorAll('._roll');
            for (let i=0; i<roll.length; i++) {
              roll[i].style.transform = "rotate("+i*15+"deg)"
            }
    
   })