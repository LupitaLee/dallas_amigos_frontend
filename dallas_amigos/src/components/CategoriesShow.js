import React, { Component } from 'react'
import PostForm from './PostForm'
import Posts from './Posts'

export class CategoriesShow extends Component {
    render() {
        console.log(this.props)
       
  
        let category = this.props.categories.find(c => c.id === parseInt(this.props.match.params.id))
        console.log(category)

        const posts = category.posts.map((p) => <Post key={p.id} p={p} category_id={category.id} />)
        return (
            <div>
               <h1> {category.name}</h1>
               <PostForm></PostForm>
               <Posts posts={posts}></Posts>
            </div>
        )
    }
}

export default CategoriesShow
{/* <Link className="Category-link" to={`/categories/${id}`}> 
<h2> {name}</h2> 
  </Link> */}