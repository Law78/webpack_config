import React from 'react';
import ReactDOM from 'react-dom';

// App css
import style from 'applicationStyles'

const HelloWorld = () => {
  return(
    <div>Hello World</div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
