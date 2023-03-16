
import  './moveList.css';
import MoveListItem from './../move-list-item/moveListItem';

const MoveList = ({kino, onDelete, onToggle}) => {
  return (
    <ul className="movie-list list-group">

      {kino.map(item => (
          <MoveListItem 
          key={item.id} 
          name={item.name} 
          views={item.views} 
          like={item.like} 
          best={item.best} 
          onDelete={() => onDelete(item.id)} 
          onToggle={(event) => onToggle(item.id, event.currentTarget.getAttribute('data-toggle'))}
          />
        ))}
        
    </ul>
  );
}

export default  MoveList;