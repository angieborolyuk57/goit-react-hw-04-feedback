import React, {Component} from 'react'

class Form extends Component {
    state={
        email: ' ',
        password: ' ',

        }
    handleChange = ({ target: {value, name} }) => {
        console.log('value: >>', value)
        if(value === 'a') return
        this.setState({
            [name]:value,
        })
        /* 
        else if([name]==='password')
         this.setState({
            password:value,
        })  */
       
    }
    render(){
        console.log('this.state: >>', this.state);

    return (

              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input 
                    name='email'
                    type="email" 
                    className="form-control" 
                    id="inputEmail4" 
                    placeholder="Email" 
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input 
                    name='password'
                    type="password"
                     className="form-control"
                      id="inputPassword4"
                      value={this.state.value1}
                      onChange={this.handleChange}
                       placeholder="Password"
                        />
                  </div>
                </div>
                  </form>
        
    )
    }
  }

export default Form;
