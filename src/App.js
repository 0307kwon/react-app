import './App.css';
import { Component } from 'react';
import Content from "./component/content.js";
import NavigationLink from "./component/navigation-link.js";
import Subject from "./component/subject.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: "안녕하세요",
        sub: "하이",
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        subTitle={this.state.subject.sub}
        ></Subject>
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
