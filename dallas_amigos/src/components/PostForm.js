import React, { Component } from 'react'

export class PostForm extends Component {
    state = {
           
        // category_id: `${this.props.catObj.id}`,
        title: "",
        content: ""
        
    
     
        
    }

 
 handleChange =(e)=>{
     this.setState({
         [e.target.name]: e.target.value
       })
     //   console.log(e.target)
     //   console.log(e.target.value)
 }


   


handleSubmit =(e)=>{
   e.preventDefault()
//    this.props.createPost(this.state)
   this.setState({
    // category_id: `${this.props.catObj.id}`,
    title: "",
    content: ""
   
    
   })
}




render() {
 
     //  console.log("Post form",this.props)
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
            />
           <br></br>



            <label>Content</label>
            <textarea
            id="content"
            
            name="content"
            type="text"
           
            value={this.state.name}
            onChange={this.handleChange}
            >
            </textarea>

                <input type="submit" value="Add Post" />
            

            </form>
        </div>
    )
}
}

export default PostForm