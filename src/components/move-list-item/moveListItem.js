import {Component} from 'react';
import './moveListItem.css';


class MoveListItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      best: false,
      like: false,
    }

  }

  // onLike = () =>{
  //   this.setState(prevLike => ({
  //     like: !prevLike.like
  //   }))
  // }

  // onLike = () => {
  //   this.setState(({like}) => ({
  //     like: !like
  //   }))
  // }

  // onBest = () => {
  //   this.setState(prevBest => ({
  //     best: !prevBest.best
  //   }))
  // }

  // onBest = () => {
  //   this.setState(({best}) => ({
  //     best: !best
  //   }))
  // }


  render(){
    const {name, views, onDelete, onToggle, like, best} = this.props;
   
    return (
      <li className={`list-group-item d-flex justifiy-content-center ${like && 'like'} ${best && 'best'} `} >
  
      <span className="list-group-item-label" onClick={onToggle} data-toggle='like'>{name}</span>
  
      <input type="number" className="list-group-item-input" value={views} />
  
      <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm" onClick={onToggle} data-toggle='best'>
              <i className="fas fa-cookie"></i>
          </button>
  
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
              <i className="fas fa-trash"></i>
          </button>
  
          <i className="fas fa-star"></i>
      </div>
     </li>
    );
  }
}


// function MoveListItem(props) {
//   return (
//     <li className={`list-group-item d-flex justifiy-content-center ${props.like && 'like'} ${props.best && 'best'}`} >

//     <span className="list-group-item-label">{props.name}</span>

//     <input type="number" className="list-group-item-input" value={props.views} />

//     <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm">
//             <i className="fas fa-cookie"></i>
//         </button>

//         <button type="button" className="btn-trash btn-sm">
//             <i className="fas fa-trash"></i>
//         </button>

//         <i className="fas fa-star"></i>
//     </div>
//    </li>
//   );
// }

export default MoveListItem;
