import { Component } from "react";
import PropTypes from "prop-types";
import "./products/Class.css";

export default class Class extends Component {
  static propTypes = {
    prop: PropTypes,
  };
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeColorStyle: false,
  };
  constructor(props) {
    super(props);
    //this.state = { showText: false };
  }

  handleClick = () => {
    //not to-do this
    //this.state.showText = true;

    //this.setState({ showText: !this.state.showText });
    const { showText, changeColor } = this.state;
    this.setState({ showText: !showText, changeColor: !changeColor });
  };

  handleCount = () => {
    this.setState({...this.state, count: this.state.count+1});
  };

  componentDidMount(){
    console.log("Component Mounted");
    this.setState({ showText: !this.state.showText, changeColor: !this.state.changeColor });
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component Updated");
    console.log("prevState: ", prevState);
    console.log("showText: ", this.state.showText);
    console.log("changeColor: ", this.state.changeColor);

    if(prevState && prevState.count !== this.state.count && this.state.count === 10){
        alert("Count reached 10");
        this.setState({ ...this.state, changeColorStyle: true});
  
    }
    // this.setState({ showText: !this.state.showText, changeColor: !this.state.changeColor });
  }

  componentWillUnmount(){
    console.log("Component Unmounted");
  }
  render() {
    console.log("color style",this.state.changeColorStyle);
    const { showText, changeColor, count, changeColorStyle } = this.state;

    return (

      <div className="container">
        <div className="text-wrapper">
          {showText ? <h4 style={{color: changeColor ? "red" : "black" }}>Class Component</h4> : null}
        </div>

        <button onClick={this.handleClick} className="item">toggle text</button>
        <button onClick={this.handleCount} className="item">increment</button>

        <h3 className="text-wrapper" style={{color: changeColorStyle? "blue": "green", fontSize: changeColorStyle? "10px":"20px"}}>count :{count}</h3>
      </div>
    );
  }
}
