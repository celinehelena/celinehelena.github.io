class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			token: '',
      erro: false
		};
		//redefinindo um clique para quando o botao Login seja acionado
		this.avaliar = this.avaliar.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	updateState = (event) => {
		//atualiza estado 
		let nam = event.target.name;
		let val = event.target.value;

		this.setState({
			[nam]: val
		});
	}

	handleLogin(event) {
		event.preventDefault();

		if(this.state.username || this.state.password){
			this.avaliar();
		}else{
      this.setState({erro: true});
			alert("Preencha os todos campos vazios");
		}	
	}

	avaliar(){
		//console.log(this.state);
		fetch('http://colabeduc.org/api/login', {
			method:'POST',
			headers: {'Content-Type': 'application/json'},
			body:JSON.stringify(this.state)
		}).then(r => r.json())
			.then(json => {
			  console.log(json);
				this.setState({token: json.access_token});
				alert("Login realizado com sucesso!");
		}).catch(ex => console.error('Problemas ao logar', ex));
    	
	}

	render() {
		return(
			React.createElement("form", {method: "POST", onSubmit: this.handleLogin},           
				React.createElement("h2", null, "Login"),
                          
         this.state.erro == true ?  React.createElement(SenhaErro, null) : null,    
                          
				React.createElement("div", { className: "input-container",placeholder: "senha" },  
					React.createElement("label", null, "Login:  "),
					React.createElement("input", {  className:"input",name: "username", type: "text", onChange: this.updateState}),
					
				),

				React.createElement("div",{ className: "input-container"},
					React.createElement("label", null, "Senha:"),
					React.createElement("input", { className:"input",name: "password", type: "password", onChange: this.updateState}),
					
				),

				React.createElement("div",{ className: "form-login" },
      				React.createElement("input", { type: "submit", className: "btn", value: "Entrar"}), "   ",
     				React.createElement("p",null, "Não tem conta? ", React.createElement("a", {href: "cadastro.html"}, " Cadastre-se"))
     			)


			)

		);
	}
}

class SenhaErro extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      React.createElement("div", {className: "senha"},
        React.createElement("span", null, "Usuário e senha inválidos")
      )
    );
  }
}

ReactDOM.render(
  React.createElement(Login, null),
  document.getElementById('root')
);
