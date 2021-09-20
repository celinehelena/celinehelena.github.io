class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',

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

		if(!this.state.username || !this.state.password){
			alert("Preencha os todos campos vazios");
			
		}else{
			this.avaliar();
			
		}	
	}

	avaliar(){
		//Fazendo a requisição do login
		fetch('http://colabeduc.org/api/login', {
			method:'POST',
			headers: {'Content-Type': 'application/json'},
			body:JSON.stringify(this.state)
		}).then(r => r.json())
		.then(json => {
			console.log(json);
			
			
			window.location.href= "page1.html";	
			localStorage.setItem("token", json.access_token);
			localStorage.setItem("user", json.username);
		}).catch(ex => console.error('Problemas ao logar', ex));
    	
	}

	render() {
		return(

			React.createElement("div", {className: "container"},	
				
				React.createElement("form", {method: "POST", onSubmit: this.handleLogin},
					
					React.createElement("h2", null, "Login"),

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
			)
		);
	}
}


ReactDOM.render(
  React.createElement(Login, null),
  document.getElementById('root')
);
