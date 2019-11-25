import React from 'react';
// 1. z podanego htmla wytworzyć aktywnie działające komponenty stanowe
// class HtmlInput extends React.Component {
//     render() {
//         return (
//             <div> 
//                 <h1> dla </h1>
//                 <input placeholder='Wpisz tekst'> rafal
//              </input>
//             </div>
            
//          )}
//     }
    


class Input extends React.Component{
    state = {
        inputValue:""
    }
       
    onInputChange (){
        this.setState({})
    }
      
    // w tym komponencie wartosc inputa ma być przechowywana w stanie pod kluczem "inputValue"
    // ten komponent ma mieć metodę onInputChange która loguje zmiany wartości do konsoli
  
    render(){
        const { inputValue } = this.state
        return (
            <div>
                <input 
                type="tekst"
                placeholder='Wpisz tekst'
                name="inputValue"
                value={inputValue}
                onChange={(event)=>{
                    const {value} = event.target
                    console.log(value)
                }}
                
                />
             
            </div>
            )}
}




export default Input