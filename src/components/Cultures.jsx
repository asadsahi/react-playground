import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cultures extends Component {
  render() {
    const { cultures } = this.props;
    console.log(cultures);
    return cultures.map(c => {
      return (
        <li className="nav-item" key={c.value}>
          <form action="/api/setlanguage" method="post" className="nav-link">
            <input id={c.value} name="culture" value={c.value} type="submit" />
          </form>
        </li>
      );
    });
  }
}

function mapStateToProps(state) {
  const { cultures } = state.appData;
  return {
    cultures: cultures
  };
}

Cultures = connect(mapStateToProps)(Cultures);

export { Cultures };
