import * as React from 'react';
import PropTypes from 'prop-types';

export class ExampleComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: "CHrissy",
  }

  render() {
    const { name } = this.props;
    return (
      <div className="exampleComponent">
        <img src="/images/react.png" alt="React Logo" className="logo" />
        <p>Hello <strong>{name}</strong> from your friendly React component.</p>
      </div>
    )
  }
}