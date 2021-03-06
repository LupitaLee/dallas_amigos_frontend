import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/category'

export class PostForm extends Component {
    state = {
           
        category_id: `${this.props.catObj.id}`, //comes from the posts Component
        title: "",
        content: "",
        image: ""
        
    }


    handleChange =(e)=>{
        this.setState({
        
            title: e.target.value
       
          })
    
    }
    handleChange1 =(e)=>{
        this.setState({
        
            image: e.target.value
           

          })
      
        
    }

    handleChange2 =(e)=>{
        this.setState({
        
            content: e.target.value
           

          })
      
        
    }



    handleSubmit =(e)=>{
    e.preventDefault()
    this.props.createPost(this.state)
    this.setState({
        
        title: "",
        content: "",
        image: ""
    
        
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

            value={this.state.title}
            onChange={this.handleChange}
            required
            />
           <br></br>

           
             <br></br>

            <label> image URL</label>
            <input
            id="image"
           
            name="image"
            type="text"

            value={this.state.image}
            onChange={this.handleChange1}
            required
            />
            
            <br></br>
           

            <label>Content</label>
            <textarea
            id="content"
            
            name="content"
            type="text"
           
            value={this.state.content}
            onChange={this.handleChange2}
            required
            >
            </textarea>
            <br></br>

                <input type="submit" value="Post an Ad" />
            

            </form>



        </div>
    )
}
}

export default connect (null,{createPost})(PostForm)