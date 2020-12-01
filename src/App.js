import './App.css';
import { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">HTML</a></li>
            <li><a href="3.html">HTML</a></li>
        </ul>
      </nav>    
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web~!
      </header>
    );

  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Navigation></Navigation>
        <Article></Article>
      </div>
    );
  }
}

export default App;
