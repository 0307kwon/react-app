import './App.css';
import { Component } from 'react';
import ReadContent from "./component/read-content.js";
import NavigationLink from "./component/navigation-link.js";
import Subject from "./component/subject.js";
import Control from "./component/control.js";
import CreateContent from './component/create-contents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selectedPostID: 0,
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
  getReadContent(title, sub) {
    return <ReadContent title={title} content={sub}></ReadContent>;
  }
  getCreateContent() {
    return <CreateContent></CreateContent>
  }
  render() {
    let _article;
    if(this.state.mode === "welcome") {
      _article = this.getReadContent(
        this.state.welcome.title, 
        this.state.welcome.sub
        );
    }
    if(this.state.mode === "read") {
      const content = this.state.navigations.find((navigation) => {
        return navigation.id === this.state.selectedPostID;
      });
      _article =  this.getReadContent(
        content.title, 
        content.docs
        );      
    }
    if(this.state.mode === "create") {
      _article = this.getCreateContent();
    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        subTitle={this.state.subject.sub}
        onClick={() => {
          this.setState({
            mode: "welcome",
          })
        }}
        ></Subject>
        <NavigationLink 
        list={this.state.navigations} 
        onClick={(id) => {
          this.setState({
            mode: "read",
            selectedPostID: Number(id),
          });
        }}></NavigationLink>
        <Control onClick={(_mode) => {
          this.setState({
            mode: _mode,
          });
        }}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
