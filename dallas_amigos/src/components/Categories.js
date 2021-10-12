import React, { Component } from 'react'
// import Category from './Category'
import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";
import Searchbar from './Searchbar';

export class Categories extends Component {

    componentDidMount(){
    this.props.fetchCategory()
    }


   
 
    render() {
        console.log(this.props)
       
       return(
        
           <div className="Categories">
             

               <h1>Lista de Categorias</h1>

               <Searchbar categories={this.props.category}/>
           
           </div>
       )
    }
}

const mapStateToProps = state =>{
  
    return{
      category: state.categoriesReducer.category
    }
  }

  export default connect(mapStateToProps, {fetchCategory} )(Categories)
  
  
  
