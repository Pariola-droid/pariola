import React from 'react'

import {Footer,Mobile,Mail,Caption,Experience,About,Landing,Navbar} from '../components'

export const Pariola = () => {
    return (
        <div className="data-scroll-container">
        
        <Navbar />
            
            <main>
                <Landing />  
                <About />  
                <Experience />  
                <Caption />  
                <Mail />  
                <Mobile />  
            </main>
            
        <Footer />  
        
        </div>
    )
}
         
            

