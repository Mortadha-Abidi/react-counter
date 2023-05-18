


class Counter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
     count:0,
     taps:0,
     tog:true
    };
    this.Incriment = this.Incriment.bind(this);
    this.Decrement = this.Decrement.bind(this);
    this.ResetAll = this.ResetAll.bind(this);
    this.ReseT = this.ReseT.bind(this);
  }
  Incriment(){
    this.setState({count:this.state.count+1,taps:this.state.taps+1})
  }
  Decrement (){
    this.setState({count:this.state.count-1,taps:this.state.taps+1})
  }
  ReseT(){
    this.setState({count:this.state.count=0,taps:this.state.taps+1})
  }
  ResetAll(){
this.setState({count:this.state.count=0,taps:this.state.taps=0,tog:!this.state.tog})
setTimeout(() => {
    this.setState({tog:this.state.tog=true})
  }, 5000);
  }
 

  render() {
    return (
        <div className="app">
        <div className={this.state.tog?"counter":"toggle"}>
            <h1>Counter</h1>
            <h2 className="count">{this.state.count}</h2>
            <h4 className="taps">Total taps:{this.state.taps}</h4>
            <div>
              <button onClick={this.Decrement} >Decrement -</button>
              <button onClick={this.Incriment}>Increment +</button>
            </div>
            <div>
              <button className="reset-count" onClick={this.ReseT}>Reset Count</button>
              <button className="reset-all"  onClick={this.ResetAll}  >Reset All</button>
            </div>
        </div>
    </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));