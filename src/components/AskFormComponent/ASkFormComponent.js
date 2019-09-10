import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { submitForm } from '../../actions';

import './AskFormComponent.css';

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

class AskForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                name: '',
                surname: '',
                email: '',
                question: ''
            },
            errors: {
                name: '',
                surname: '',
                email: ''
              }
        }
    }    

    // ToDO: revisit these handler and see if I can reduce this to a single handler function and keep my code more DRY

    handleNameChange = (ev)=> {
        ev.preventDefault();
        let nameInfo = {...this.state.form};
        nameInfo.name = ev.target.value;
        this.setState({form: nameInfo});
        let errorInfo = {...this.state.errors};

        if(nameInfo.name.length < 2) {
            errorInfo.name = 'Please enter a name with at least 2 characters';
            this.setState({errors: errorInfo});
        }
        else {
            errorInfo.name = '';
            this.setState({errors: errorInfo});
        }
    }

    handleSurnameChange = (ev)=> {
        ev.preventDefault();
        let surnameInfo = {...this.state.form};
        surnameInfo.surname = ev.target.value;
        this.setState({form: surnameInfo});
        let errorInfo = {...this.state.errors};

        if(surnameInfo.surname.length < 3) {
            errorInfo.surname = 'Please enter a name with at least 2 characters';
            this.setState({errors: errorInfo});
        }
        else {
            errorInfo.surname = '';
            this.setState({errors: errorInfo});
        }        
    }

    handleEmailChange = (ev)=> {
        ev.preventDefault();
        let emailInfo = {...this.state.form};
        emailInfo.email = ev.target.value;
        this.setState({form: emailInfo});
        let errorInfo = {...this.state.errors};

        if(!validEmailRegex.test(emailInfo.email)) {
            errorInfo.email = 'Please enter a valid email address';
            this.setState({errors: errorInfo});
        }
        else {
            errorInfo.email = '';
            this.setState({errors: errorInfo});
        } 

    }

    handleQuestionChange = (ev)=> {
        ev.preventDefault();
        let questionInfo = {...this.state.form};
        questionInfo.question = ev.target.value;
        this.setState({form: questionInfo});
    }    

    handleSubmit = (ev) => {
        ev.preventDefault();

        if(validateForm(this.state.errors)) {
            //we can trigger a UI message regarding form here for now in console
            console.info('Valid Form');
            this.props.onShowForm(false);
            this.props.submitForm(this.state.form);
          }else{
            //we can trigger a UI message regarding form here for now in console
            console.error('Invalid Form')
          }
    }

    render() {
        return (
            <div className="ask-form" style={{marginTop: '1rem'}}>
                <Grid item xs={12} md={6} lg={3}>
                <form style={{padding: '1rem'}}>
                    <TextField
                        id="name"
                        label="Name"
                        className={'ask-form_name'}
                        placeholder="Name"
                        onChange={this.handleNameChange}
                        margin="normal"
                        error={this.state.errors.name !== '' ? true: false}
                        required
                    />
                    <TextField
                        id="surname"
                        label="Surname"
                        className={'ask-form_surname'}
                        placeholder="Surname"
                        onChange={this.handleSurnameChange}
                        margin="normal"
                        error={this.state.errors.surname !== '' ? true: false}
                        required
                    /> 
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        className={'ask-form_name'}
                        placeholder="Email"
                        onChange={this.handleEmailChange}
                        margin="normal"
                        error={this.state.errors.email !== '' ? true: false}
                        required
                    />
                    <TextField
                        id="question"
                        label="Question"
                        className={'ask-form_question'}
                        multiline
                        rowsMax="6"
                        onChange={this.handleQuestionChange}
                        margin="normal"
                    />                    
                    <Button variant="contained" color="primary" onClick={this.handleSubmit} disabled={this.state.form.email === ''}>
                        Submit
                    </Button>                                                                       
                </form>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state};
  }

export default connect(mapStateToProps, { submitForm })(AskForm);
