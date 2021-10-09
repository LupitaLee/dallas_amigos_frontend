import React, { Component } from 'react'
import Category from './Category'

import { connect } from "react-redux";
import {fetchCategory} from "../actions/category"

export class Categories extends Component {


    componentDidMount(){

        this.props.fetchCategory()
    }

    
    render() {
        console.log(this.props)
        const categories = this.props.category.map((c, i) => <Category key={i} category={c}/> )
 
       return(
           <div className="Categories">
               <h1>Categories List</h1>

               {categories}
           
           </div>
       )
    }
}

// export default Categories

const mapStateToProps = (state)=> {

    return {category: state.categoriesReducer.category}
}


// export default Posts
export default connect (mapStateToProps, {fetchCategory})(Categories)
