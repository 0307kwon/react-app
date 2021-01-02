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
        innerContents: "World Wide Web!",
      },
      welcome: {
        title: "welcome",
        innerContents: "hi",
      },
      navigations: [
        {id: 0, title: "HTML1", innerContents:"html1 입니다"},
        {id: 1, title: "HTML2", innerContents:"html2 입니다"},
        {id: 2, title: "HTML3", innerContents:"html3 입니다"}
      ]
    }
    this.maxContentsID = this.state.navigations.length - 1;
  }
  getReadContent(title, innerContents) {
    return <ReadContent title={title} content={innerContents}></ReadContent>;
  }
  getCreateContent() {
    return <CreateContent onSubmit={(_title, _innerContents) => {
      this.maxContentsID += 1;
      console.log(this.maxContentsID, _title, _innerContents);
      this.state.navigations.push({
        id: this.maxContentsID,
        title: _title,
        innerContents: _innerContents,
      });
      this.setState({
        navigations: this.state.navigations,
      })
    }}></CreateContent>
  }
  render() {
    let _article;
    if(this.state.mode === "welcome") {
      _article = this.getReadContent(
        this.state.welcome.title, 
        this.state.welcome.innerContents
        );
    }
    if(this.state.mode === "read") {
      const content = this.state.navigations.find((navigation) => {
        return navigation.id === this.state.selectedPostID;
      });
      _article =  this.getReadContent(
        content.title, 
        content.innerContents
        );      
    }
    if(this.state.mode === "create") {
      _article = this.getCreateContent();
    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        innerContents={this.state.subject.innerContents}
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
