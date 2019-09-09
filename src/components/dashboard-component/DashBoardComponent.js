import React from 'react';
import Summary from '../summary-component/SummaryComponent';
import Grid from '@material-ui/core/Grid';
import './DashBoardComponent.css';
import Ask from '../AskComponent/AskComponent';
import AskForm from '../AskFormComponent/ASkFormComponent';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            displayForm: false,
            forms: []
        }
    }

    showForm = (val) => {
        this.setState({displayForm: val});
    }

    formsData = (val) => {
        this.setState({forms: this.state.forms.concat(val)});
    }

    render() {

        console.log('top level state is: ', this.state);

        let askForm;

        if (this.state.displayForm) {
            askForm = <AskForm onShowForm={this.showForm} formsData={this.formsData}></AskForm>;
        }

        return (
            <div className="dashboard">
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Summary data={this.state.forms}></Summary>
                        <Ask onShowForm={this.showForm}></Ask>
                        {askForm}
                    </Grid>
                </Grid>
            </div>
        )
    }

}