import { Component } from "react";
import AppFilter from "../appfilter/appfilter";
import AppInfo from "../appinfo/appInfo";
import MoveAddForm from "../move-add-form/moveAddForm";
import MoveList from "../move-list/moveList";
import { v4 as uuidv4} from 'uuid';
import SearchPanel from "../searchpanel/searchPanel";
import "./app.css"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name:'Avatar', views:2000, like:false, best:false,id:1},
                {name:'Titanik', views:3000, like:false, best:false, id:2},
                {name:'Umar ibn Xattob', views:5000, like:false, best:false, id:3},
                
            ],

           term: 'k',
        }
    }
    
    onDelete = (id) =>{
        this.setState(({data}) => ({
            data: data.filter(items => items.id !== id)
        }))
    }

    addForm = (item) => {
        const newitem = {name: item.name, views: item.views, id: uuidv4(), like: false, best: false}
        this.setState(({data}) => ({
            data: [...data, newitem]
        }))
    }

    onToggle = (id, prop) =>{
        console.log(prop)
        this.setState(({data}) => ({
            data:data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onEvents = (arr, term) => {
        if(term.length === 0){
            return arr;
        }
            return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
        
    }

    render(){

        const {data, term} = this.state;
        const son = data.length;
        const like = data.filter(i => i.best).length;
        const visebleData = this.onEvents(data, term);

        return(
            <div className='app font-monospace'>
                <div className="contents">
                    <AppInfo data={son} like={like}/>
                    <div className="searchPanel">
                        <SearchPanel onEvents={this.onEvents}/>
                        <AppFilter />
                    </div>
                        <MoveList kino={data}  onDelete={this.onDelete} data={visebleData} onToggle={this.onToggle}/>
                        
                        <MoveAddForm addForm={this.addForm}/>
                </div>
            </div>
        )
    }
}

export default App;