import React from 'react'
import PropTypes from 'prop-types'
import './Login.css'
class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginFailed: false,
      fields: {
        username: '',
        password: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onInputChange (event) {
    const fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({ fields })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.login(this.state.fields.username, this.state.fields.password)
        .catch(err => {
          console.log(err)
          this.loginFailed()
        })
  }

  loginFailed () {
    this.setState({
      loginFailed: true,
      fields: {
        username: '',
        password: ''
      }
    })
  }

  render () {
    return (
      
      <div className="containerPrincipal">
      <div className="containerSecundario">
      <div className="form-group">
         <form onSubmit={this.handleSubmit}>
         <label >Usuário</label>
         <input onChange={this.onInputChange} placeholder='Enter username' name='username' value={this.state.fields.username} type='text' />
         <label>Senha</label>
         <input onChange={this.onInputChange} placeholder='Enter password' name='password' value={this.state.fields.password} type='password' />
         <input type='submit' value='Login' />
         {this.state.loginFailed && <h3>Senha ou Usúario Incorreto.</h3> }
         </form>
       </div>
      </div>
      <h4>Usuários de Testes</h4>
      <ul>
         <li>User:  fakeuser/fakepassword</li>
         <li>Admin: admin/password</li>
      </ul>
    </div>
    )
  };
}
LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginForm
