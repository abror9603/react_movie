import { Component } from 'react';
import './searchPanel.css';

class SearchPanel extends Component {

    constructor(props){
      super(props)
      this.state ={
        term : ''
      }
    }

    onEvent = (e) => {
      const term = e.target.value.toLowerCase();
      this.setState({term})
      this.props.onEvents(term)
    }

  render(){
    return (
      <input type='text' className="form-control searchInput" onChange={this.onEvent} value={this.state.term}/>
    );
  }
}

export default SearchPanel;
