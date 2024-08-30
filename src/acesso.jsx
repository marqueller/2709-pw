import React from 'react';  
import Header  from './components/Header';    
import Footer  from './components/Footer';

function acesso() {
    return(
        <div>
            <Header/>
            <h1>login</h1>
            <p>aqui voce faz o loin na sua conta.</p>
            <Footer/>
        </div>
    );
}

export default acesso;