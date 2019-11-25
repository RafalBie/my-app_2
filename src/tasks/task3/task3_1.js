import React from "react";

// "stwórz formularz do podawania płci i wieku"

// Część 1
// input na wiek ma być typu range od 16 do 65 lat
// input na płeć ma być typu select i zawierać M lub K

// Część 2
// komponent Form ma zawierać 1 metodę do zmiany stanu w do obu komponentów
// komponent Form ma zawierać metodę onSubmit która loguje w konsoli wartość stanu na wysyłce formularza

class Form extends React.Component {
  state = {
      'age':'',
      'sex':'',
  }
    changeStateOfInput = (event)=>{
      const {value,name,type} = event.target
      this.setState({
        [name]:value
      })
    }
  render() {
      const {age,sex} = this.state
    return (
      <div className="container">
        <form
          onSubmit={(event) => {
            console.log('test')
          }}
        >
          <div>
          <label>podaj płeć</label>
          <select
            onChange={(event) => {
              const { value } = event.target;
              // console.log('test')
            }}
          >
            <option 
            name='sex'
            value={sex}
            onChange={this.changeStateOfInput}
            >
              kobieta </option>
            <option 
            name='sex'
            value={sex}
            onChange={this.changeStateOfInput}
            >męzczyzna</option>
            
            
          </select>
          </div>
          <div> 
            <input 
            type=''placeholder="podaj wiek" 
            name='age'
            value={age}
            onChange={this.changeStateOfInput}
            // console.log(event.target.value)
            />

          </div>
           
            {/* <input 
            type="checkbox" 
            name='sex'
            value={sex}
            onChange={this.changeStateOfInput}
            />
            <label>podaj płeć</label> */}
        </form>
      </div>
    );
  }
}




export default Form;
