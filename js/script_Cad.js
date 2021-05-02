class Forms extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      check_user: false,
      check_email: false,
      check_pass: false,
      erro_user: "",
      erro_pass: "",
      erro: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState = (event) => {
    //atualiza o estado dos inputs
    let nam = event.target.name;
    let val = event.target.value;
    
    this.setState({
      [nam]: val
    });
  }
  
  validaUser = () =>{
    let user = this.state.username;
    if(user==""){
      this.setState({
        check_user: true,
        erro_user: "Campo em Branco!"
      });
    }else if(user.indexOf(" ")>=0){
      this.setState({
        check_user: true,
        erro_user: "Usuário não pode ter espaços em branco!"
      });
    }else{
      this.setState({check_user: false});
    } 
  }
  
  validaEmail = () => {
    //validação do email
    let email = this.state.email;
    let re = /\S+@\S+\.\S+/;
    
    if(!re.test(email)){
      this.setState({
        check_email: true,
        erro: "Email inválido!"
      });
    }else if(email ==""){
      this.setState({
        check_email: true,
        erro: "Campo em branco"
      });
    }else{
      this.setState({check_email: false});
    }
    
  }
  validaPass = () =>{
    let senha = this.state.password;

    if(senha==""){
      this.setState({
        check_pass: true,
        erro_pass: "Campo em branco"
      });
    }else{
      this.setState({check_pass: false});
    }
  }
  
  handleSubmit(event) {
    
    if(this.state.check_user == true || this.state.check_email== true || this.state.check_pass == true){
      event.preventDefault();
    }
    
  }

  render() {
    return (

      React.createElement("form", {method: "POST", action: "http://colabeduc.org/usuario/save", onSubmit: this.handleSubmit}, 
        React.createElement("h2", null, "Cadastro"),
        
        React.createElement("div",{className: "form-div"},
          React.createElement("label", null, "Usuário: "),
          React.createElement("input", {className:"input", name: "username", type: "text", onBlur: this.validaUser, onChange: this.updateState})
        ),  
        this.state.check_user == true ? React.createElement(Erro, {message: this.state.erro_user}) : null,                 
        
        React.createElement("div", {className: "senha", id: "user"}, null),
                          
        React.createElement("div",{className: "form-div", id: "email"},
          React.createElement("label", null, "Email: "),
          React.createElement("input", {className:"input",name: "email", onBlur: this.validaEmail, type: "text", onChange: this.updateState})
        ),
                          
        this.state.check_email == true ? React.createElement(Erro, {message: this.state.erro}) : null, 
        
                          
        React.createElement("div",{className: "form-div"},
          React.createElement("label", null, "Senha: "),
          React.createElement("input", {className:"input",name: "password", type: "password",onBlur: this.validaPass, onChange: this.updateState})
        ),
        this.state.check_pass == true ? React.createElement(Erro, {message: this.state.erro_pass}) : null, 
        console.log(this.state.check_pass),
       React.createElement("div",{className: "form-btn"},
        React.createElement("input", { type: "submit",className:"btn", value: "Cadastrar"}),
        React.createElement("p",null, "Já tem conta? ",
          React.createElement("a", {className:"link",href: "index.html", }, "Login")
        )
      )
    )
    );
  }

}

function validaSenha(senha, nvSenha){
  console.log(senha);
  if(senha== "" || senha!=nvSenha){
    return true;
  }else{
    return false;
  }
}

class Erro extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      React.createElement("div", {className: "senha"},
        React.createElement("span", null, this.props.message)
      )
    );
  }
}


ReactDOM.render(
  React.createElement(Forms, null),
  document.getElementById('root')
);