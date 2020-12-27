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
        title: "WEB",
        sub: "World Wide Web!",
      },
      welcome: {
        title: "welcome",
        sub: "hi",
      },
      navigations: [
        {id: 0, title: "HTML1", docs:"html1 입니다"},
        {id: 1, title: "HTML2", docs:"html2 입니다"},
        {id: 2, title: "HTML3", docs:"html3 입니다"}
      ]
    }
  }
  render() {
    let _title;
    let _sub;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _sub = this.state.welcome.sub;
    }
    if(this.state.mode === "read") {
      _title = this.state.navigations[0].title;
      _sub = this.state.navigations[0].docs;
    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        subTitle={this.state.subject.sub}
        onClick={(event) => {
          event.preventDefault();
          this.setState({
            mode: "read",
          })
        }}
        ></Subject>
        <NavigationLink list={this.state.navigations}></NavigationLink>
        
        <Content title={_title} content={_sub}></Content>
      </div>
    );
  }
}

export default App;
