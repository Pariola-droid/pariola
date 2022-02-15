import React from 'react'
// import video from '../media/gradient.mp4'

export const Landing = () => {
 
    return(
       <>

            <section className="landing">

                <div className="_rolledT">
                    <img src="https://ik.imagekit.io/9ghb9cknpe/rolledP_tkoMVLkJZgB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644894508084" />
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
