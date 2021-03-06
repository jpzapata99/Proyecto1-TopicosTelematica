import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      user: this.state.user,
      password: this.state.password
    }
    login(user).then(res => {
      if (!res.error) {
        this.props.history.push(`/visualizacion`)
      }else{
        alert(res.error)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
              <div className="form-group">
                <label htmlFor="user">Usuario</label>
                <input
                  type="email"
                  className="form-control"
                  name="user"
                  placeholder="Ingrese su usuario"
                  value={this.state.user}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                 Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login