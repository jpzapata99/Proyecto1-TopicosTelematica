import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Proyecto 1 - Tópicos especiales en Telematica</h1>
            <h5 className="text-center">Descripción: Lo que se realizó en este proyecto fue basicamente una aplicación web bajo un stack MERN. El fin principal de está aplicación es poder registrar datos en la BD correspondientes a datos de sensores como: humedad, temperatura, localización. Además, tambien se pueden visualizar los datos recolectados en la base de datos. </h5>
          </div>
        </div>
      </div>
    )
  }
}
export default Landing