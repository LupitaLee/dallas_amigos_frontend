import React, { Component } from 'react'

export class CommentForm extends Component {
    state ={
        comment:''
    }

    handleSubmit = (e)=>{
        e.preventDefault()
      
        
        this.setState({
        
         comment: ''
         
        })
    }
    
    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    //    console.log(e.target.value)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
            
                <label>Leave a comment </label> <br></br>
                <textarea
                id="comment"
                
                name="comment"
                type="text"
                
                value={this.state.name}
                onChange={this.handleChange}
                required
                >
                </textarea>
            <input type="submit" value="Add a Comment" />
        </form>
                
            </div>
        )
    }
}

export default CommentForm
