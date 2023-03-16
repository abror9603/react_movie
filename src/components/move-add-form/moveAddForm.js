
import { Component } from "react";
import "./moveAddForm.css";

class  MoveAddForm extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            views:'',
        }
    }

    onchange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addForms = (e) => {
        
        e.preventDefault()

     this.props.addForm({name: this.state.name, views: this.state.views})
        this.setState(
            {
                name: '',
                views: '',
            }
        )
    }

    render(){
        return(
            <div className="movie-add-form">
            <h3>Yangi kino qo'shish!</h3>
                <form class="add-form d-flex" onSubmit={this.addForms}>
                    <input type="text" className="form-control new-movie-label" placeholder="Qanday kino?" 
                    name="name" onChange={this.onchange}/>
                    <input type="number" className="form-control new-movie-label" placeholder="Nechi marotaba ko'rilgan?"
                    name="views" onChange={this.onchange}/>
                    <button className="btn btn-outline-dark" type="submit" >Qo'shish</button>
                </form>
            </div>
        )
    }
    
}

export default MoveAddForm;