import stacked from "../img/revolve-pariola-2.svg"

export const Experience = () => {
 
    return(
       <>

            <section className="experience">
                <div className="_expWrapper">
                      <article className="_expText">
                          <h1 className="h1BG">
                            Over the
                            <br/>
                            past 02 years,
                        </h1>
                        
                        <p>
                          I've built products for companies and individuals around africa ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.
                        </p>

                        <p>
                          Currently, I work at Klas as the Lead frontend engineer crafting thoughtful and inclusive experiences that adhere to web standards.
                        </p>

                        <p>
                          Before now, I worked as a Frontend Engineering Intern at Regnify, where I worked on coverting Figma UI to interactives codes for orgs and individuals.
                        </p>

                        <p>
                          Prior to Regnify, I was a front engineer contractor with TheHouseInterior, building cool UIs that users love, overall the improving the whole product experience.
                        </p>

                        <p>
                          I once also led the engineering team at a crypto startup, Badger Inu through building multiple React applications.
                        </p>
                    </article>

                  <figure>
                        <img src={stacked} alt=""/>
                  </figure>  
              </div>
          </section>
           
       </>
    )
}