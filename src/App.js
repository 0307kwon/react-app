import './App.css';
import { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.content}
      </article>
    );
  }
}

class NavigationLink extends Component {
  render() {
    return (
      <li><a href={this.props.link}>{this.props.text}</a></li>    
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.subTitle}
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="안녕하세요" subTitle="하이"></Subject>
        <nav>
          <ul>
            <NavigationLink link="1.html" text="HTML1"></NavigationLink>
            <NavigationLink link="2.html" text="HTML2"></NavigationLink>
            <NavigationLink link="3.html" text="HTML3"></NavigationLink>
          </ul>
        </nav>
        <Content title="HTML" content="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
