import React, { Component } from "react";
// import Button from "./Button"

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
     
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //     console.log("you clicked me ");
  //     console.log(this.state.count);

  // }

  // WHEN USING ES6 YOU DONT NEED TO BIND LIKE ES5

  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
    
  // };
 
  render() {
    const {id, img, author, title } = this.props.info;
    const {deleteItem} = this.props
    const {handleClick} = this.props;
    console.log(handleClick);
    

    return (
      <div className="book">
        <img src={img} width="150px" alt="book" />
        <div>
          <h4>Title: {title}</h4>
          <h6>BY: {author}</h6>
          <button onClick={()=>deleteItem(id)}>delete item</button>
          {/* <button onClick={this.addCount}>Add Count!!</button>
          <h1>Count:{this.state.count}</h1> */}
          {/* <Button handleClick={ handleClick}></Button> */}
          {/* <button onClick={handleClick}>I'm from parent container</button> */}
        </div>
      </div>
    );
  }
}
