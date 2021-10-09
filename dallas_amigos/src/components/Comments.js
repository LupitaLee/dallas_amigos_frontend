import React, { Component } from 'react'
import { connect } from "react-redux";


export class Comments extends Component {



    render() {

        console.log("Comments",this.props)
    //     console.log("this.props.category",this.props.category)
       
    //    const category2 = this.props.category.find(c => c.id ===  parseInt(this.props.match.params.category_id))
    //    console.log("category2",category2)
    //    const post2 = category2.posts.find(c => c.id === parseInt(this.props.match.params.post_id))
    //    console.log("post2",post2)

    //    const comments = post2.comments.map((co) => <Comment key={co.id} co={co} />)
    //   console.log("comments", comments)
        // console.log("this.props.category.posts",this.props.category.posts)

        // const {name ,posts} = this.props.category

    //     const category1 = this.props.category.find(c => c.id === parseInt(this.props.match.params.category_id))
    // console.log(category1)
        // const {name ,posts} = this.props.category
        // const posts1 = comments.map((p)=> <Comment key={c.id} co={co}/>)
        //  const post2 = posts.map(p => p.title)

        return (
            <div>
                Comments
                {/* {comments} */}
            </div>
        )
    }
}





export default Comments

