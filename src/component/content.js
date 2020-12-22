import { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.content}
      </article>
    );
  }
}
