import React, { Component } from 'react';
import  Search from './components/Search';
import  ResultList from './components/ResultList';
import  SideList from './components/SideList';
import './App.css';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      results:{},
      saved:[]

    }

  }

  updateState(newPlaces){

    this.setState({
      results:newPlaces
    })

  }

  saveList(name){
    
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
    
          <Search callUpdate={this.updateState.bind(this)}
                  
           />
          <ResultList resultPlaces={this.state.results}
                    saveList={this.saveList.bind(this)}
          />

        </div>

        <div className="col-md-4">
          <SideList savedPlaces={this.state.saved}/>

          </div>

        </div>
        </div>
      
    );
  }
}

export default App;
