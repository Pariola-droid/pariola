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
                        <li><a href="https://ipariola.hashnode.dev/" target="_blanket" rel="noopener">blog.pariola.dev</a></li>
                      </ul>
                  </div>
  
                  <div className="ulBox">
                    <h3>
                        
                    </h3>

                        <ul>
                            <li><a href="#projects">My Works</a></li>
                            <li><a href="https://github.com/pariola-droid" target="_blanket" rel="noopener">My Shelf</a></li>
                            <li><a href="https://drive.google.com/file/d/17A4LDyeQa83eOyRYEhNquWY7q_3TCMJn/view?usp=sharing" target="_blanket" rel="noopener">My Résumé</a></li>
                        </ul>
                  </div>
              </div>

              <div className="_footBase">
                  <span>
                      &copy; Omopariola Philip 2022
                  </span>

                  <ul>
                      <li><a href="https://twitter.com/ipariola" target="_blanket" rel="noopener">tw</a></li>
                      <li><a href="https://github.com/pariola-droid" target="_blanket" rel="noopener">gh</a></li>
                      <li><a href="https://www.linkedin.com/in/omopariola-philip-6aa038178/" target="_blanket" rel="noopener">ln</a></li>
                      <li><a href="https://instagram.com/ipariola" target="_blanket" rel="noopener">ig</a></li>
                  </ul>
              </div>
        </footer>
           
       </>
    )
}