export const Caption = () => {
 
    return(
       <>

           <section className="caption">
              <div className="_captionWrapper">
                    <div className="_capture">
                        <article className="_captureText">
                            <h1 className="h1BG">
                                I build &amp; 
                                <br/>
                                design stuff
                            </h1>

                            <p>
                                Open source 
                                <br/>
                                projects, web apps 
                                <br/>
                                and experimentals.
                            </p>
                        </article>

                        <a href="#projects" className="_aCapture">
                            see my work
                            <span></span>
                        </a>
                    </div>
                    <div className="_capture">
                          <article className="_captureText">
                            <h1 className="h1BG">
                                I write, 
                                <br/>
                                sometimes
                            </h1>

                            <p>
                                About design, 
                                <br/>
                                frontend dev, 
                                <br/>
                                learning and life.
                            </p>
                        </article>

                        <a href="https://ipariola.hashnode.dev" target="_blank" rel="noopener" className="_aCapture">
                            read my articles
                            <span></span>
                        </a>
                    </div>
              </div>
          </section>
           
       </>
    )
}