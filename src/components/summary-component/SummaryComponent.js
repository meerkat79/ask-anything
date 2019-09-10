import React from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

import './SummaryComponent.css';

class Summary extends React.Component {

  render() {
    let nodata = '';
    let listData = this.props.data.map((item, i)=>{
      return <li key={i}>
        <p>Name: {item.name}</p>
        <p>Surname: {item.surname}</p>
        <p>Email: {item.email}</p>
        <p>Question: {item.question}</p>
      </li>
    });

    if(this.props.data.length < 1) {
      return nodata = <h3>There is currently no form data captured yet. No questions have been submitted.</h3>;
    }

    return (
      <div className="summary">
        <h2>Summary of submitted forms</h2>
        <Paper>
          {nodata}
          <ul>{listData}</ul>
        </Paper>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {data: state.forms};
}

export default connect(mapStateToProps)(Summary);
