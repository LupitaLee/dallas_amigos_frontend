import React, { Component } from 'react'
import Moment from 'moment'


export class Comment extends Component {
    render() {
        console.log("commets",this.props)
        const { comment ,created_at }= this.props.co

        const date = Moment(created_at).format('MM-DD-YYYY')

        if (comment.comments){
            return null
          }
        
 
          
  
       return(
           <div className="Comment">
           
             <h6>{comment} - <strong>Posted on</strong> <span>{date}</span></h6> 
  

           </div>
        )
    }
}

export default Comment
