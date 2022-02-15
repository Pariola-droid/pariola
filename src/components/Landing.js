import React from 'react'
// import video from '../media/gradient.mp4'

export const Landing = () => {
 
    return(
       <>

            <section className="landing">

                <div className="_rolledT">
                    <h2 className="_rollT">
                        <span className="_roll">P</span>
                        <span className="_roll">a</span>
                        <span className="_roll">r</span>
                        <span className="_roll">i</span>
                        <span className="_roll">o</span>
                        <span className="_roll">l</span>
                        <span className="_roll">a</span>
                        <span className="_roll">-</span>
                        <span className="_roll">P</span>
                        <span className="_roll">a</span>
                        <span className="_roll">r</span>
                        <span className="_roll">i</span>
                        <span className="_roll">o</span>
                        <span className="_roll">l</span>
                        <span className="_roll">a</span>
                        <span className="_roll">-</span>
                        <span className="_roll">P</span>
                        <span className="_roll">a</span>
                        <span className="_roll">r</span>
                        <span className="_roll">i</span>
                        <span className="_roll">o</span>
                        <span className="_roll">l</span>
                        <span className="_roll">a</span>
                        <span className="_roll">-</span>
                    </h2>
                </div>

                <div className="_wrapperLanding">
                      <div className="_text">
                        <div className="_textI">
                        <div className="vidHouse">
                            <h1>
                                Frontend                                
                            </h1> 
                            
                            <h1>
                              Developer<span>.</span>
                            </h1>

                            {/*<video autoplay playsinline muted loop preload>
                                <source src={video} type="video/mp4" />
                            </video>*/}
                        </div>                          
                                
                            <p>                            
                                  I like to craft solid and scalable frontend products with great user experiences.
                            </p>                           
                        </div>
                         
                        <div className="_paraG">
                          <p className="h1BG">
                            Highly skilled at progressive enhancement, design systems &amp; UI Engineering.
                          </p>

                          <p className="h1BG">
                            Over a two years of experience building products for clients across africa.
                          </p>
                        </div>
                     </div>
                     <div className="_imageH">
                          <img src="https://raw.githubusercontent.com/whizkydee/olaolu.dev/12fddfb9fb9e422928120d77b3b94f26f67374f0/landing/src/assets/avatar-shapes.svg" alt=""/>
                          <div>
                              <span className="fineBoy">
                                  
                              </span>
                          </div>
                          <span></span>
                     </div>
               </div>
          </section>
           
       </>
    )
}
