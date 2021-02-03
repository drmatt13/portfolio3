// replace `${i}` --> \`   \$   {i}   \`

const data = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// functional component
import React from 'react';
import PropTypes from 'prop-types';

function FunctionalComponent(props) {
  return (
    <div className="class">
      <div>This is a functional component</div>
      <div>prop: {props.prop}</div>
    </div>
  );
}

FunctionalComponent.defaultProps = {
  prop.prop1: 'Github Finder',
  prop.prop2: 'fab fa-github'
}

FunctionalComponent.propTypes = {
  prop.prop1: PropTypes.string.isRequired,
  prop.prop2: PropTypes.string.isRequired
}

export default FunctionalComponent;`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
      //html
      [],
      //css
      [],
      //js
      [
{'js': `// useState hook
import React, { useState } from 'react';

function FunctionalComponent(props) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default FunctionalComponent;`},
      ],
      // output
      [],
      //render
      {'render': false}
  ],

];

module.exports = data;