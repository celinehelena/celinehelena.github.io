class Forms extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      eMail: '',
      senha: '',
      nvSenha: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  myChangeHandler = (event) => {
    //atualiza o estado dos inputs
    let nam = event.target.name;
    let val = event.target.value;
    
    this.setState({
      [nam]: val
    });
  }
  handleSubmit(event) {
    let nome = this.state.username;
    let email = this.state.eMail;
    let senha = this.state.senha;
    let nova = this.state.nvSenha;


    // verificar se a senha nos dois campos sao iguais
    // verificar se o campo nome nao e nulo 
    //verificar se o email e valido
    //alert('Valores enviados: ' + nome +','+ email);
    if( nova== senha && senha.length >= 6){
      alert('Cadastro Realizado com Sucesso!');
    }
      event.preventDefault();
  }

  render() {
    return (
      React.createElement("form", {onSubmit: this.handleSubmit}, 
        React.createElement("span", null, "Cadastro"),
        React.createElement("br",null,null),
      React.createElement("label", null, "Nome: ",
        React.createElement("input", { name: "username", type: "text", onChange: this.myChangeHandler})),  

       React.createElement("br",null,null),

      React.createElement("label", null, "Email: ",
        React.createElement("input", {name: "eMail", type: "email", onChange: this.myChangeHandler})),
      
      React.createElement("br",null,null),

      React.createElement("label", null, "Senha: ",
        React.createElement("input", {name: "senha", type: "password", onChange: this.myChangeHandler})),

      React.createElement("br",null,null),

      React.createElement("label", null, "Confirme a senha: ",
        React.createElement("input", {name: "nvSenha", type: "password", onChange: this.myChangeHandler})),

      React.createElement("br",null,null),

      React.createElement("input", { type: "submit", value: "Submit"}), "   ",
      React.createElement("a", {href: "index.html", className: "btn btn-info", role: "button"}, "Login")
      )
    );
  }

}


ReactDOM.render(
  React.createElement(Forms, null),
  document.getElementById('root')
);