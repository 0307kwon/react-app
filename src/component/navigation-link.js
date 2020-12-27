import { Component } from 'react';

export default class NavigationLink extends Component {
  render() {
    const navigations = this.props.list;
    const list = [];
    navigations.forEach((navigation) => {
      list.push(
        <li 
        key={navigation.id} 
        >
          <a 
          href={`/contents/${navigation.title}`}
          data-id={navigation.id}
          onClick={(event) => {
            event.preventDefault();
            this.props.onClick(event.target.dataset.id);
          }}
          >
            {navigation.title}
          </a>
        </li>
      );
    });
    return (
      <nav>
        <ul>
          {list}
        </ul>  
      </nav>
    );
  }
}