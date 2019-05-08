import * as React from 'react';

export class ExampleComponent extends React.Component {
  render() {
    return (
      <div className="exampleComponent">
        <img src="/images/react.png" alt="React Logo" className="logo" />
        <p>Hello <strong>Chris</strong> from your friendly React component.</p>
      </div>
    )
  }
}