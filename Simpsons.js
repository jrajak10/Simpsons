import React from 'react';
import ReactDOM from 'react-dom';

const white = "#FFF";
const black = "#000";
const pic1 = "https://oi345.photobucket.com/albums/p398/rajakarunanayakejohann/Fight%20Light.png?t=1559507730";

const pic2 = "https://oi345.photobucket.com/albums/p398/rajakarunanayakejohann/Fight%20Dark.png?t=1559507731";



class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: white, 
                 image: pic1
                 };
    this.switch = this.switch.bind(this);
    
  }
  
  switch(){
    const newColor = this.state.color == white ? black : white;
    const newLetter = this.state.letter == black ? white : black;
    const newMessage = this.state.message == "ON" ? "OFF" : "ON";
    const newImage = this.state.image == pic1 ? pic2 : pic1;
    
    this.setState({
      color: newColor,
      letter: newLetter,
      message: newMessage,
      image: newImage
    });
    
  }




render(){
  return (
  <div className = "main">
      <div>
        <h1>FIGHT! FIGHT! FIGHT! FIGHT! FIGHT! FIGHT!</h1>
      <img src = {this.state.image} />
      </div>
      
      
      <button onClick = {this.switch}>Click here!!!</button>
    
    </div>
  
  );
}
}



ReactDOM.render(<Toggle />, document.getElementById('app'));