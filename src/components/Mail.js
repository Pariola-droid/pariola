export const Mail = () => {
 
    return(
       <>

            <section className="mail">
              <div className="_mailWrapper">
                  <div className="_mailText">
                        <h1>
                            Send me a message!
                        </h1>
                        <p>
                            Got a question or proposal, or just want
                            to say hello? Go ahead.
                        </p>
                  </div>

                  <form className="_mailForm">
                        <div className="_row">
                              <div className="rowI">
                                    <label for="name">
                                        Your Name
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name"/>
                              </div>
                              <div className="rowI">
                                    <label for="email">
                                        Email Address
                                    </label>
                                    <input type="text" name="email" placeholder="Enter your email address"/>
                              </div>
                        </div>

                        <div className="_row">
                            <div className="rowT">
                                    <label for="name">
                                        Your Message
                                    </label>
                                    <textarea type="text" name="message" placeholder="Hi Pariola! nice to meet you, i love what i see you do everyday, you inspire me man. so i've got a job for you"></textarea>
                              </div>
                        </div>

                        <div className="_row">
                           <a href="#0" className="shoot">
                              shoot
                              <span></span>
                           </a>
                        </div>
                  </form>
              </div>
          </section>
           
       </>
    )
}