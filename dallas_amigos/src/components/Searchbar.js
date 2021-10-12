
import React, { Component } from 'react'
import {FormControl,Button,Form} from "react-bootstrap";
import Category from './Category';

export class Searchbar extends Component {

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

    const filteredCategories = this.props.categories.filter((ca)=>{
      if (this.state.searchterm == ""){
        return ca 
      } else if (ca.name.toLowerCase().includes(this.state.searchterm.toLowerCase())){
        return ca
      }
    }).map((c) => <Category key={c.id} category={c}/> )

    return (
      <div>
        
      <Form line>
        <FormControl type="text" placeholder="Search" onChange={this.handleChange}  className="-sm ml-3 w-50" />
      
        {/* <Button variant="outline-success">Search</Button> */}

        {filteredCategories}


       
      </Form>
      </div>
    )
  }
}

export default Searchbar

