// "stwórz formularz do rejestracji usera"

// Część 1
// formularz ma posiadać 4 inputy o nazwach odpowiednio:
// - email, password, confirm-password oraz agreement
// o typach odpowiednio:
// - email, password, password, checkbox
// komponent RegisterForm ma zawierać 1 metodę do zmiany stanu w do obu komponentów

// Część 2
// komponent RegisterForm ma zawierać metodę onSubmit, która dokonuje walidacji:
// - email - email
// - password/confirm-password - jest dłuższe niż 8 znaków
// - inputy na hasła mają taką samą wartość
// - agreement musi mieć wartość true

// Część 3
// jeśli walidacja nie przejdzie, trzeba wyświetlić komunikat błędu "ValidationError"
// jeśli walidacja się powiedzie, trzeba wyświeltić komunikat "User created"

// class RegisterForm extends React.Component {
//   state = {
//     email: "",
//     password: "",
//     confirm_password: "",
//     agreement: true,
//     ValidationError: false
//   };
//   ChangeStateOfInput = event => {
//     const { value, name, type, checked } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//   isFormValid = () => {
//     console.log("validate", this.state);
//     const { email, password, confirm_password, agreement } = this.state;

//     const isEmailValid = email === email;
//     const isPasswordValid = true;
//     const isAgreementValid = agreement === true;

//     const conditions = [isEmailValid, isPasswordValid, isAgreementValid];
//     const isConditionsValid = !conditions.includes(false);

//     return isConditionsValid;
//   };

//   onFormSubmit = event => {
//     event.preventDefault();

//     if (this.isFormValid()) {
//       this.setState({
//         ValidationError: true
//       });

//       console.log("text", this.state);
//       this.setState({
//         email: "",
//         password: "",
//         confirm_password: "",
//         agreement: true,
//         ValidationError: false
//       });
//     } else {
//       this.setState({
//         ValidationError: true
//       });
//     }
//   };

//   render() {
//     const { email, password, confirm_password, agreement } = this.state;
//     return (
//       // <section className='contact' id='contact'><section/>

//       <div className="container">
//         <h1>Skontaktuj sie z nami</h1>

//         <form onSubmit={this.onFormSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.ChangeStateOfInput}
//           ></input>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.ChangeStateOfInput}
//           ></input>
//           <input
//             type="password"
//             name="comfirm-password"
//             value={comfirm_password}
//             onChange={this.ChangeStateOfInput}
//           ></input>
//           <input
//             type="checkbox"
//             name="agrement"
//             value={agrement}
//             onChange={this.ChangeStateOfInput}
//           ></input>
//         </form>
//       </div>
//     );
//   }
// }