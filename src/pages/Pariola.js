import React from 'react'

import {Footer,Mail,Projects,Caption,Experience,About,Landing,Navbar} from '../components'

export const Pariola = () => {
    return (
        <div className="data-scroll-container">
        
        <Navbar />
            
            <main>
                <Landing />  
                <About />  
                <Caption />  
                <Experience /> 
                <Projects /> 
                <Mail />  
            </main>
            
        <Footer />  
        
        </div>
    )
}
         
            

