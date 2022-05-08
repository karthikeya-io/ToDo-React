import React from "react";
import logo from "./logo.svg";
import "./App.css";

//function based component

// function App() {
//   return(
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} alt="react-logo" className='App-logo'/>
//       </header>
//     </div>
//   )
// }

//class based component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedlist,
    });
  }

  updateInput(input) {
    this.setState({newItem:input})
  }

  markAsDone(id) {
    const list = [...this.state.list];
    const updatedlist = list.map((item)=> {if(item.id ===id) {item.isDone = !item.isDone}return item});
    this.setState({
      list: updatedlist,
    });
  }

  render() {
    return (
      <div id="body">
        <img src={logo} alt="" width="100" height="100" className="logo" />
        <h1 className="app-title">Karthikeya ToDo App </h1>
        <div className="page">
        <div className="addtododiv">
        <div className="container card rounded-pill " id="card">
        <div className="card-content">
        <h3 className="" >Add an Item.....</h3>
          <br />
          <div className="card-body">
          <input
            type="text"
            className="input-text rounded-pill"
            placeholder="Write a Todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            type="button"
            class="rounded-pill btn btn-outline-dark" id="btn-addtodo"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          </div>
        </div>
        </div>
        </div>
        

        <div className="profile-right">
          <div className="list rounded-pill">
          <ul>
          {this.state.list.map((item) => {
            return (
              <div className={`rounded-pill ${item.isDone ? "list-item-done" : "list-item"}`}>
              <li key={item.id}>
              <input
                type="checkbox"
                name="idDone"
                className="input-check"
                checked={item.isDone}
                onChange={()=>this.markAsDone(item.id)}
              />
              <div className= "list-content"><p className="list-contentp">{item.value}</p></div>
              <button
                type="button"
                className="rounded-pill btn btn-outline-danger btn-delete"
                onClick={()=> this.deleteItem(item.id)}
              >
                Delete
              </button>
            </li>
              </div>
              
            );
          })}

        </ul>
          </div>

          </div>

        </div>

        
      </div>
    );
  }
}

export default App;
