
import { Component} from "react";
import Post from "./Post"
import "./Posts.css"
import PostForm from "./PostForm"


import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";



class Posts extends Component{

    componentDidMount(){

        this.props.fetchCategory()
    }

    
    render(){
       
        // console.log("posts ",this.props)
       
  
        let category = this.props.category.find(c => c.id === parseInt(this.props.match.params.id))
    //  console.log("======", category)
        const posts = category.posts.map((p) => <Post key={p.id} p={p} category_id={category.id} />)
        
       

        
        return(
            <div className="Posts">
               
           
            
               <h1 className="Posts-category"> {category.name}</h1>

               <div className="Post-Form">
               <PostForm catObj={category}/>
             
               </div>
             

            <div className="Posts-items">
            {posts}
             
             </div>
                
               
            </div>
        )
    }
}



// export default Posts

const mapStateToProps = (state)=> {

    return {category: state.categoriesReducer.category}
}


export default connect (mapStateToProps, {fetchCategory})(Posts)
