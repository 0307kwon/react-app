import './App.css';
import { Component } from 'react';
import Content from "./component/content.js";
import NavigationLink from "./component/navigation-link.js";
import Subject from "./component/subject.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      subject: {
        title: "안녕하세요",
        sub: "하이",
      },
      navigations: [
        {id: 0, title: "HTML1", docs:"html1 입니다"},
        {id: 1, title: "HTML2", docs:"html2 입니다"},
        {id: 2, title: "HTML3", docs:"html3 입니다"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        subTitle={this.state.subject.sub}
        ></Subject>
        <NavigationLink list={this.state.navigations}></NavigationLink>
        
        <Content title="HTML" content="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
