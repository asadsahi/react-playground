import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cultures extends Component {
  render() {
    const { cultures } = this.props;
    return cultures.map(c => {
      return (
        <li className="nav-item" key={c.value}>
          <form action="setlanguage" method="post" className="nav-link">
            <input
              id={c.value}
              name="culture"
              value={c.value}
              type="image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAgFAAEACAgAOw=="
              className={
                'flag flag-' +
                c.value.split('-')[1].toLowerCase() +
                ' rounded-circle'
              }
              alt={c.value}
            />
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
