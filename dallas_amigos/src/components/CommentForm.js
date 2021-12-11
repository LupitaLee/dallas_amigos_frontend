import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/category'

export class CommentForm extends Component {
    state ={
        comment:"",
        category_id:  `${this.props.postObj.category_id}`,
        post_id: `${this.props.postObj.id}`
    }

    handleSubmit = (e)=>{
        e.preventDefault()
      
        this.props.createComment(this.state)
        this.setState({
        
         comment: "",
       
         
        })
    }
    
    
    handleChange = (e)=>{
        this.setState({
            comment: e.target.value
        })
    //    console.log(e.target.value)

    }
    render() {
        console.log("comment form",this.props)
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
            
                <label>Leave a comment </label> <br></br>
                <textarea
                id="comment"
                
                name="comment"
                type="text"
                
                value={this.state.comment}
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

export default connect(null, {createComment})(CommentForm)
