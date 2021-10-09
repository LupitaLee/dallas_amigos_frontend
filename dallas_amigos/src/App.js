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
import Footer from './components/Footer';


import Posts from './components/Posts';
import Comments from './components/Comments';

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
         <Route exact path="/categories" component={Categories}>
     
          </Route>

          <Route exact path="/categories/:id/posts" component={Posts}/>  

          <Route exact path="/posts/:post_id/Comments" component={Comments}/>  
          {/* <Route exact path="/categories/:id" 
           render = {(props)=> <CategoriesShow {...props}/>   }
          />   */}

          {/* <Route path="/categories/:id/posts" 
           render = {(props)=> <Posts {...props} />  }
          />   */}


         </Switch>
         <Footer />
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


