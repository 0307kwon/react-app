import { Component } from 'react';

export default class NavigationLink extends Component {
  render() {
    return (
      <li><a href={this.props.link}>{this.props.text}</a></li>    
    );
  }
}