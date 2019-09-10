import React from 'react';
import Button from '@material-ui/core/Button';

export default class Ask extends React.Component {
    handleAsk = () => {
        this.props.onShowForm(true);
    }

    render() {
        return (
            <div className="ask">
                <Button variant="contained" color="primary" onClick={this.handleAsk}>
                    Have a question?
                </Button>
            </div>
        )
    }
}
