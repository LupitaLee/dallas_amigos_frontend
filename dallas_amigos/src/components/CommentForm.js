import React, { Component } from 'react'

export class CommentForm extends Component {
    state ={
        comment:'',
        category_id:  `${this.props.postObj.category_id}`,
        post_id: `${this.props.postObj.id}`
    }

    handleSubmit = (e)=>{
        e.preventDefault()
      
        
        this.setState({
        
         comment: '',
         category_id:  `${this.props.postObj.category_id}`,
         post_id: `${this.props.postObj.id}`
         
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
