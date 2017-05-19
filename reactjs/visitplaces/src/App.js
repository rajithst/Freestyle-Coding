import React, { Component } from 'react';
import  ResultList from './components/ResultList';
import  SidetList from './components/SideList';
import  Search from './components/Search';
import './App.css';

class App extends Component {

    constructor(props){
      super(props)
      this.state = {
          searchRes:{},
          saved:[]
      }

    }

     updateResult(newPlaces){

       this.setState({
        searchRes:newPlaces
       })

     }

     savePlace(name){
         const places = this.state.saved.concat([name])
         this.setState({
           saved:places
         })
     }


  render() {

    return (

      <div className="container">

        <div className="row">
          <div className="col-md-8">
            <Search  
            searchText={this.state.searchRes}
            updateResult={this.updateResult.bind(this)}
            
            />
            
            <ResultList 
            resultList={this.state.searchRes}
            savePlace={this.savePlace.bind(this)}
            />
          </div>
            <div className="col-md-4">
              <SidetList saveList={this.state.saved}/>
            </div>
      
          </div>
          
        </div>
      
    );
  }
}

export default App;
