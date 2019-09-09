import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './AskFormComponent.css';

export default class AskForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                name: '',
                surname: '',
                email: '',
                question: ''
            }
        }
    }

    handleNameChange = (ev)=> {
        let nameInfo = {...this.state.form};
        nameInfo.name = ev.target.value;
        this.setState({form: nameInfo});
    }

    handleSurnameChange = (ev)=> {
        let surnameInfo = {...this.state.form};
        surnameInfo.surname = ev.target.value;
        this.setState({form: surnameInfo});
    }

    handleEmailChange = (ev)=> {
        let emailInfo = {...this.state.form};
        emailInfo.email = ev.target.value;
        this.setState({form: emailInfo});
    }

    handleQuestionChange = (ev)=> {
        let questionInfo = {...this.state.form};
        questionInfo.question = ev.target.value;
        this.setState({form: questionInfo});
    }    

    handleSubmit = () => {
        this.props.formsData(this.state.form)
        this.props.onShowForm(false);
    }


    render() {
        return (
            <div className="ask-form" style={{marginTop: '1rem'}}>
                <Grid item xs={5}>
                <form style={{padding: '1rem'}}>
                    <TextField
                        id="name"
                        label="Name"
                        className={'ask-form_name'}
                        placeholder="Name"
                        onChange={this.handleNameChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        id="surname"
                        label="Surname"
                        className={'ask-form_surname'}
                        placeholder="Surname"
                        onChange={this.handleSurnameChange}
                        margin="normal"
                        required
                    /> 
                    <TextField
                        id="email"
                        label="Email"
                        className={'ask-form_name'}
                        placeholder="Email"
                        onChange={this.handleEmailChange}
                        margin="normal"
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
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>                                                                       
                </form>
                </Grid>
            </div>
        )
    }
}
