import React from 'react';

class Async extends React.Component {
  componentWillMount = () => {
    this.cancelUpdate = false;
    this.props.load.then(c => {
      this.C = c;
      if (!this.cancelUpdate) {
        this.forceUpdate();
      }
    });
  };

  componentWillUnmount = () => {
    this.cancelUpdate = true;
  };

  render = () => {
    const { componentProps } = this.props;
    return this.C ? (
      this.C.default ? (
        <this.C.default {...componentProps} />
      ) : (
        <this.C {...componentProps} />
      )
    ) : null;
  };
}

export { Async };
