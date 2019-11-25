import React from 'react';
//  2. z podanego htmla wytworzyć aktywnie działające komponenty funkcyjne

const HtmlButton = ({label,onButtonClick}) => {
       
           
            return (
            
            <div>
            <button onClick = {()=>(console.log('kliknięto przycisk'))}>Wciśnij mnie</button>
            </div>)
           
       
}

// ten komponent ma otrzymywać propsy "label" i "onButtonClick"
// "label" ma być wyrenderowany jako label przycisku
// "onButtonClick" ma być przyczepiony do eventu onclick tego buttona oraz ma logować do konsoli string "kliknięto przycisk"
// const Button = ()=>{}
const Button = ()=>{}

export default HtmlButton

