import React,{Component} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Categories from './components/Categories';
import { connect } from "react-redux";
import {fetchCategory} from "./actions/category"
import CategoriesShow from './components/CategoriesShow';

import Posts from './components/Posts';

import './App.css';

class App extends Component {

componentDidMount(){
    this.props.fetchCategory()
 }

  render(){

    return (
     <Router>
       
       <div className="App">
       <Navigation/>
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/categories">
            <Categories categories={this.props.category}/>
          </Route>

          <Route exact path="/categories/:id" 
           render = {(props)=> <CategoriesShow {...props} categories={this.props.category}/>  }
          />  

          <Route path="/categories/:id/posts" 
           render = {(props)=> <Posts {...props} categories={this.props.category}/>  }
          />  


         </Switch>

       </div>


     </Router>
    );
  }
  
}

const mapStateToProps = state =>{
  
  return{
    category: state.categoriesReducer.category
  }
}

export default connect(mapStateToProps, {fetchCategory} )(App)
