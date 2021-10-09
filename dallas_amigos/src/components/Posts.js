import { post } from 'jquery';
import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";
import Post from './Post';
import PostForm from './PostForm';




export class Posts extends Component {
    componentDidMount(){

        this.props.fetchCategory(this.props.match.params.id)
    }



    render() {

        // console.log("posts",this.props)
        // console.log("this.props.category",this.props.category)
        // console.log("this.props.category.posts",this.props.category.posts)
       
        // const posts = this.props.category.posts.map((p)=> <Post key={p.id} p={p}/>)
        const {name ,posts} = this.props.category
       const posts1 = posts.map((p)=> <Post key={p.id} p={p}/>)

        // if (!this.props.categoy){
        //     return <div>Loading...</div>
        // }
      
        return (
              <div className="Posts">
                 
           
                <h1>{name}</h1>

                <PostForm></PostForm>

                {posts1}


            </div>
        )
    }
}

// export default Posts


const mapStateToProps = (state, ownProps)=> {

    return {category: state.categoriesReducer.category[ownProps.match.params.id]}
}


// export default Posts
export default connect (mapStateToProps, {fetchCategory})(Posts)
