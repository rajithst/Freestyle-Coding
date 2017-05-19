import React,{Component} from 'react'
//import ReactDOM from 'react-dom';
import './ResultList.css';

class ResultList extends Component{




    render(){
        console.log(this.props)
     if(this.props.resultList.results !== undefined){
         var  placeList = this.props.resultList.results.map(name=>{
            return(
                 	<div className="row" key={name.id}>
                    <div className="list-group">
                        <div className="list-group-item clearfix">
                            <div className="profile-teaser-left">
                                <div className="profile-img"><img src={name.icon} alt=""/></div>
                            </div>
                            <div className="profile-teaser-main">
                                <h2 className="profile-name">{name.name}</h2>
                                <div className="profile-info">
                                    <div className="info"><span className="">Address</span> {name.formatted_address}</div>
                                    <div className="info"><button className="btn btn-primary" onClick={()=>this.props.savePlace(name.name)}>Save Place</button></div>
                                </div>
                            </div>
                    </div>       
        </div>
	</div>
             )
    })       
     }
  


         return(
            <ul>
               {placeList}
            </ul>

         )

    }


}

export default ResultList;

