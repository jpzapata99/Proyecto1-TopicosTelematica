import React, {Component} from 'react'

class App extends Component{

    constructor(){
        super();
        this.state = {
            nombre: '',
            registros:[]
        }
        this.verDatos = this.verDatos.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    verDatos(e){
        let nombreAux = this.state.nombre
        if(this.state.nombre==""){
            nombreAux="vacio"
        }
        console.log(nombreAux)
        fetch('/api/registro/'+nombreAux)
            .then(res => res.json())
            .then(data=> {
                this.setState({registros:data})
                console.log(this.state.registros)
            })
        console.log(this.state)
        e.preventDefault()
    }
    handleChange(e){
        console.log(e.target)
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            <div>
            <nav className="red darken-4">
                <div className="container">
                    <a className="brand-logo" href="/">Sistema de almacenamiento de datos sensores </a>
                </div>
            </nav>
            <div className="container">
                    <div className="row">
                        <div className="col s8">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.verDatos}>
                                        <h5>Busqueda de datos</h5>
                                        <h6>Ingrese el nombre del sensor, si no lo tiene solo de click en buscar para ver todos los datos</h6>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="nombre" onChange={this.handleChange} type="text"  placeholder="Ingrese nombre"></input>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn red darken-4">
                                            Buscar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Temperatura</th>
                                        <th>Humedad</th>
                                        <th>Longitud</th>
                                        <th>Latitud</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.registros.map(registro =>{
                                            return(
                                                <tr>
                                                    <td>{registro.nombre}</td>
                                                    <td>{registro.temperatura}</td>
                                                    <td>{registro.humedad}</td>
                                                    <td>{registro.longitud}</td>
                                                    <td>{registro.latitud}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App