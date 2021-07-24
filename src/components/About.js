export const About = () => {
 
    return(
       <>

            <section className="about">
                <img src="https://raw.githubusercontent.com/whizkydee/olaolu.dev/12fddfb9fb9e422928120d77b3b94f26f67374f0/landing/src/assets/avatar-shapes.svg" alt=""/>

                <img src="https://raw.githubusercontent.com/whizkydee/olaolu.dev/12fddfb9fb9e422928120d77b3b94f26f67374f0/landing/src/assets/cornerstone-patterns-left.svg" alt=""/>

                <img src="https://raw.githubusercontent.com/whizkydee/olaolu.dev/12fddfb9fb9e422928120d77b3b94f26f67374f0/landing/src/assets/cornerstone-patterns-left.svg" alt=""/>
                <div className="_aboutWrapper">
                       {/* <img src="https://raw.githubusercontent.com/whizkydee/olaolu.dev/12fddfb9fb9e422928120d77b3b94f26f67374f0/landing/src/assets/avatar-shapes.svg" alt=""/>  */}
                  
                      <article className="_textAbt">
                          <h1 className="h1BG">
                            Design
                          </h1>

                          <p>
                            I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.
                          </p>
                      </article>

                      <article className="_textAbt">
                          <h1 className="h1BG">
                            Engineering
                          </h1>

                          <p>
                            In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.
                          </p>
                        </article>
                </div>
            </section>  
           
       </>
    )
}
