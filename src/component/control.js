import { Component } from 'react';
import { MODE } from "../common/variable.js";

export default class Control extends Component {
  render() {
    return <ul>
      <li>
        <a href="/create" onClick={(event) => {
            event.preventDefault();
            this.props.onClick(MODE.CREATE)
        }}>create</a>
      </li>
      <li>
        <a href="/update" onClick={(event) => {
          event.preventDefault();
          this.props.onClick(MODE.UPDATE)
        }}>update</a>
      </li>
      <li>
        <input type="button" value="delete" onClick={(event) => {
          event.preventDefault();
          this.props.onClick(MODE.DELETE)
        }}/>
      </li>
    </ul>
  }
}