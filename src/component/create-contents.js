import { Component } from "react";
import { PLACEHOLDER } from "../common/variable.js"

export default class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post" 
        onSubmit={(event) => {
          event.preventDefault();
          this.props.onSubmit(
            event.target.title.value,
            event.target.innerContents.value,
          );
        }}>
          <p>
            <input type="text" name="title" placeholder={PLACEHOLDER.CREATE_TITLE} />
          </p>
          <p>
            <textarea name="innerContents" placeholder={PLACEHOLDER.CREATE_INNER_CONTENTS} />
          </p>
          <input type="submit"/>
        </form>
        
      </article>
    )
  }
}