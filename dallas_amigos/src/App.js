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

import Footer from './components/Footer';


import Posts from './components/Posts';
import Comments from './components/Comments';


import './App.css';

class App extends Component {




  render(){

    return (
     <Router>
       
       <div className="App">
      
      
      

       <Navigation/>
         <Switch>
         <Route exact path="/" component={Home}/>
        
         <Route  path="/about" component={About}/>
         <Route exact path="/categories" component={Categories}/>
         

          <Route exact path="/categories/:id/posts" component={Posts}/>  

       

          <Route exact path="/categories/:category_id/posts/:post_id/comments" component={Comments}/>   


         </Switch>
         <Footer />
       </div>


     </Router>
    );
  }
  
}

export default App

