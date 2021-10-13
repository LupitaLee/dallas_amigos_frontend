import React, { Component } from 'react'
import Category from './Category'
import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";
import {FormControl,Form} from "react-bootstrap";

export class Categories extends Component {

    componentDidMount(){
    this.props.fetchCategory()
    }



    state ={
        searchterm: ""
      }
    
        handleChange =(e)=>{
            this.setState({
            
              searchterm: e.target.value
           
              })
        console.log(e.target.value)
        }

   
 
    render() {
        console.log(this.props)


        const filteredCategories = this.props.category.filter((ca)=>{
            if (this.state.searchterm === ""){
              return ca 
            } else if (ca.name.toLowerCase().includes(this.state.searchterm.toLowerCase())){
              return ca
            }
          }).map((c) => <Category key={c.id} category={c}/> )
       
       return(
        
           <div className="Categories">
             

               <h1>Lista de Categorias</h1>

               <Form line>
                    <FormControl type="text" placeholder="Search" onChange={this.handleChange}  className="-sm ml-3 w-50" />
        

                    {filteredCategories}
       
                </Form>
           
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
  
  
  
