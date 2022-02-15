import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

export const Footer = () => {
 
    return(
       <>

           <footer>
            <div className="_footWrapper">
                <div className="ulBox">
                    <h3>
                      say hello
                    </h3>

                    <ul>
                        <li><a href="mailto:ipariola@yahoo.com">hi@pariola.dev</a></li>
                        <li><a href="https://blog.pariola.tech">blog.pariola.dev</a></li>
                      </ul>
                  </div>
  
                  <div className="ulBox">
                    <h3>
                        
                    </h3>

                        <ul>
                            <li><Link to="/works">My Works</Link></li>
                            <li><a href="">My Shelf</a></li>
                            <li><a href="">My Résumé</a></li>
                        </ul>
                  </div>
              </div>

              <div className="_footBase">
                  <span>
                      &copy; Omopariola Philip 2022
                  </span>

                  <ul>
                      <li><a href="https://twitter.com/ipariola">tw</a></li>
                      <li><a href="https://github.com/pariola-droid">gh</a></li>
                      <li><a href="https://www.linkedin.com/in/omopariola-philip-6aa038178/">ln</a></li>
                      <li><a href="https://instagram.com/ipariola">ig</a></li>
                  </ul>
              </div>
        </footer>
           
       </>
    )
}