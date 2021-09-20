class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      descricoes: [],
      user: ''
    };
    this.loadDesc= this.loadDesc.bind(this);
    
  }

  componentDidMount(){
    this.setState({
      user: localStorage.getItem("user"),
    });
    this.loadDesc();
    console.log("token: "+localStorage.getItem("token"));
    console.log("user: "+localStorage.getItem("user"));
  }
  

  loadDesc(){
    //console.log(this.state.token);
    fetch('http://colabeduc.org/api/descricao',{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem("token"),
      }
    }).then(r => r.json())
      .then(json =>{
        //console.log(json);
        this.setState({descricoes: json});
      }
      ).catch(erro => console.error("Problemas na recuperação das descrições",erro));
    
  }

  render() {
    return(
      React.createElement("div", {className: "container"}, 
        
        React.createElement("div", {className: "header"},
          React.createElement("h1", null, "Bem-vindo, ", this.state.user, "!"
          )
        ),

        React.createElement("div",{className:"row"},
          React.createElement("h2", null, "Descrições dos Jogos"),
            this.state.descricoes.map((descricao) =>{
              return(
                React.createElement("div",{className:"column"},
                  React.createElement("div",{className: "card"}, 
                    React.createElement("h5", null, React.createElement("b",null,descricao.titulo)),
                    React.createElement("p", null, descricao.resumo)
                  )
                )
              )
            })  
          
        )
      
      )
    );

  }
}



ReactDOM.render( 
  React.createElement(Page, null),
  document.getElementById('root')
);
