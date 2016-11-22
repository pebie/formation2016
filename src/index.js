import ReactDOM from 'react-dom';
import React    from 'react';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root'),
  );
}

setInterval(tick, 1000);

function Welcome(props) {
  return <div>Hello {props.name}</div>;
}
Welcome.propTypes = {
  name: React.PropTypes.string,
};

const element = <Welcome name="Mikaël" />;

ReactDOM.render(
  element,
  document.getElementById('welcome'),
);
