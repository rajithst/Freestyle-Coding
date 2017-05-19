import React, { Component } from 'react';
import './SideList.css'
import ReactDOM from 'react-dom';

class SideList extends Component{

    render(){

        var  saveplaces = this.props.saveList.map(name=>{
            console.log(name)
    
         return(
             <div className="alert alert-info" key={name}>
                    <a href="#" className="btn btn-xs btn-primary pull-right">Click for More info</a>
                    <strong>{name}</strong> 
                    </div>
         )

        })
        
        return(
            
            <ul>
                <h2>Saved Placs</h2>
                    {saveplaces}
                </ul>
        )

    }


}

export default SideList