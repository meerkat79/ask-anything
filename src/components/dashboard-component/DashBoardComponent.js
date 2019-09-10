import React from 'react';
import Summary from '../summary-component/SummaryComponent';
import Grid from '@material-ui/core/Grid';
import './DashBoardComponent.css';
import Ask from '../AskComponent/AskComponent';
import AskForm from '../AskFormComponent/AskFormComponent';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayForm: false
        }
    }

    showForm = (val) => {
        this.setState({displayForm: val});
    }

    render() {
        let askForm;

        if (this.state.displayForm) {
            askForm = <AskForm onShowForm={this.showForm}></AskForm>;
        }

        return (
            <div className="dashboard">
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Summary></Summary>
                        <Ask onShowForm={this.showForm}></Ask>
                            {askForm}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
