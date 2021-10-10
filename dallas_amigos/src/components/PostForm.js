import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/category'

export class PostForm extends Component {
    state = {
           
        category_id: `${this.props.catObj.id}`, //comes from the posts Component
        title: "",
        content: ""
        
    
     
        
    }

 
 handleChange =(e)=>{
     this.setState({
         [e.target.name]: e.target.value
       })
       
       console.log(e.target.value)
 }


   


handleSubmit =(e)=>{
   e.preventDefault()
   this.props.createPost(this.state)
   this.setState({
    category_id: `${this.props.catObj.id}`, //comes from the posts Component
    title: "",
    content: ""
   
    
   })
}




render() {
 
    //   console.log("Post form",this.props)
    return (
     

        <div>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label> 
            <input 

            className="PostForm-input"
            id="title"
           
            name="title"
            type="text"

            value={this.state.name}
            onChange={this.handleChange}
            required
            />
           <br></br>

            <label> Image</label>
            <input
            id="image"
            type="file"
            onChange={this.hanndleFileChange}
            
            />
           




            <label>Content</label>
            <textarea
            id="content"
            
            name="content"
            type="text"
           
            value={this.state.name}
            onChange={this.handleChange}
            required
            >
            </textarea>

                <input type="submit" value="Add Post" />
            

            </form>
        </div>
    )
}
}

export default connect (null,{createPost})(PostForm)