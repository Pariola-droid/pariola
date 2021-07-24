import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {

    return(
       <>
    
           <nav>
            <h3>
                <Link to="/">pariola</Link>
            </h3>

          <div className="menuWrap">
            <div className="hamburger">
                <span className="span1"></span>
                <span className="span2"></span>
            </div>

            <div className="_smallNav">
                <ul className="List1">
                  <li><Link to="/works">my works</Link></li>
                  <li><a href="#0">my shelf</a></li>
                  <li><a href="#0">my résumé</a></li>
                </ul>

                <ul className="List2">
                  <li><h3>say hello</h3></li>
                  <li><a href="#0">hi@pariola.tech</a></li>
                  <li><a href="https://blog.pariola.tech">blog.pariola.tech</a></li>
                </ul>

                <ul className="_socials">
                    <li><a href="https://twitter.com/ipariola">tw</a></li>
                    <li><a href="https://github.com/pariola-droid">gh</a></li>
                    <li><a href="https://www.linkedin.com/in/omopariola-philip-6aa038178/">ln</a></li>
                    <li><a href="https://instagram.com/ipariola">ig</a></li>
                </ul>
            </div>
      </div>
      
    </nav>

       </>
    )
}



