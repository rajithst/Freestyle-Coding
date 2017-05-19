import React,{Component} from 'react';

class SideList extends Component{

    render(){
       
            var SavedList = this.props.savedPlaces.map(name=>{
               
               return(
                  
                  <div className="alert alert-info" key={name}>
                    <a href="#" className="btn btn-xs btn-primary pull-right">Click for More info</a>
                    <strong>{name}</strong> 
                    </div>
                
               )
            })


        return(
           
        <ul>
            <h3>Saved Places</h3>
            {SavedList}
        </ul>
        
        )

    }

    
}

export default SideList;
