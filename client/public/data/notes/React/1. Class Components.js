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
{'js': `// class component
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {

  // ClassComponent.defaultProps = {
  //   props.prop: 'prop'
  // }

  static defaultProps = {
    prop1: 'default',
    prop2: 'default'
  }

  state = {
    state1: 'default'
  }
  
  // array, bool, func, number, object, string, symbol, node, element
  static propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>This is a class component</div>
        <div>prop: {this.props.prop}</div>
      </div>
    );
  }
}

export default ClassComponent;`}
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
{'js': `// Component Lifecycle
import React, { Component } from 'react';

class ClassComponent extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    state1: 'default'
  }

  componentDidMount() {
    this.setState({ state1: 'updated' });
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <div>prop: {this.props.prop}</div>
      </div>
    );
  }
}

export default ClassComponent;`}
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
{'js': `// onClick
import React, { Component } from 'react';

class ClassComponent extends Component {

  state = {
    count: 0
  }

  update1() {
    this.setState({ count: this.state.count+1 });
  }

  update2 = () => {
    this.setState({ count: this.state.count+1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.update1.bind(this)}>update1</button>
        <button onClick={this.update2}>update2</button>
        <Counter count={this.state.count} />
      </div>
    );
  }
}

export default ClassComponent;`}
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
{'js': `// Prop Drilling
import React, { Component } from 'react';
import axios from 'axios';
import Search from './route/Search';

class ClassComponent extends Component {

  state = {
    users: [],
    loading: false
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(\`/route?param=\${text}\`);
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div>
        <Search searchUsers={this.searchUsers} />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default ClassComponent;


// Within Search Component
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {

  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  }

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <input
            type="text" 
            name="text" 
            placeholder="Search Users..." 
            value={this.state.text}
            onChange={this.onChange}
          />
          <input 
            type="submit" 
            value="Search" 
          />
        </form>
      </div>
    );
  }
}`}
      ],
      // output
      [],
      //render
      {'render': false}
  ],

];

module.exports = data;