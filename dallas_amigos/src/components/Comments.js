import React, { Component } from 'react'
import { Comment } from './Comment';
import CommentForm from './CommentForm';


import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";



export class Comments extends Component {



    render() {

        console.log("Comments",this.props)
    //  

    const category1 = this.props.category.find(c => c.id === parseInt(this.props.match.params.category_id))
    console.log(category1)
    const post = category1.posts.find(c => c.id === parseInt(this.props.match.params.post_id))
    console.log(post)

// //

//    const comments = post.comments.map((co) => <Comment key={co.id} co={co} />)
//    console.log(post.comments)

   let comments = []
    if (post.comments){
        comments = post.comments.map((co) => <Comment key={co.id} co={co} />)
    }
       
    
    return(
        <div className="Comments">
          
        <h1> {post.title}</h1>
            <p>{post.content} </p> 


          <CommentForm></CommentForm>
          <h3>comments: </h3> 
         {comments}
          
       
        </div>
    )
    }
}


// export default Comments
const mapStateToProps = (state)=> {

    return {category: state.categoriesReducer.category}
}



export default connect (mapStateToProps, {fetchCategory})(Comments)




