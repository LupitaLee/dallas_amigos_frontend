import React, { Component } from 'react'

export class CommentForm extends Component {
    state ={
        comment:''
    }
    render() {
        return (
            <div>
                <form >
            
                <label>Leave a comment </label> <br></br>
                <textarea
                id="comment"
                
                name="comment"
                type="text"
                
              
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
