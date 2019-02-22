import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem';
import NewItem from './NewItem/NewItem';

class App extends Component {
  state = {
    items: [
      "Todo 1",
      "Todo 2",
      "Todo 3"
    ],
    newItem: "",
    doneItem: ""
  }

  changeNewItem = event => this.setState({
    newItem: event.target.value
  });

  addNewItem = () => {
    const newItems = [...this.state.items];
    newItems.push(this.state.newItem);

    this.setState({
      items: newItems,
      newItem: ""
    });
  }

  deleteListItem = (index) => {
    const newItems = [...this.state.items];
    
    const doneItem = [...this.state.doneItem];

    doneItem.push(<li>{newItems.splice(index, 1)}</li>);

    this.setState({
      items: newItems,
      newItem: "",
      doneItem: doneItem
    });
  }

  render() {
    const listItems = this.state.items.map(
      (item, index) => <ListItem
        item={item}
        deleteHandler={() => this.deleteListItem(index)} />
    );

    const doneItem = this.state.doneItem;

    return (
      <div className="App">
        <ul>
          <li>
            <h1>
              To do
            </h1>
          </li>
          {listItems}
          <NewItem
            changeNewItem={this.changeNewItem}
            addNewItem={this.addNewItem}
            value={this.state.newItem} />
            <li>
              <h1>done</h1>
              {doneItem}
            </li>
        </ul>
      </div>
    );
  }
}

export default App;