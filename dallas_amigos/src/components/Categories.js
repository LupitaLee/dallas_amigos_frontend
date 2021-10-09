import React, { Component } from 'react'
import Category from './Category'



export class Categories extends Component {


   
    
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

export default Categories




