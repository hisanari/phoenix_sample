import css from '../css/app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "init user";
  }
  render() {
    return (
      <div>
        <h1>Hello! {this.name}</h1>
        <h2>World! {this.get_sum(1, 1)}</h2>
      </div>
    )
  }
  get_sum(num_1, num_2) {
    return num_1 + num_2;
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);