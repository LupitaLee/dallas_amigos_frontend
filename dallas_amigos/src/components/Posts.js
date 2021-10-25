
import { Component} from "react";
import Post from "./Post"
import "./Posts.css"
import PostForm from "./PostForm"
import { Table } from "react-bootstrap";


import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";



class Posts extends Component{

    componentDidMount(){

        this.props.fetchCategory()
    }

    
    render(){
       
        // console.log("posts ",this.props)
       
  
        let category = this.props.category.find(c => c.id === parseInt(this.props.match.params.id))
  
        // const posts = category.posts.map((p) => <Post key={p.id} p={p} category_id={category.id} />)
        
        const sortedPosts = category.posts.sort((a,b)=>{
            if (a.created_at < b.created_at) return 1
            return -1
        }).map((p) => <Post key={p.id} p={p} category_id={category.id} />)
     
 

        
        return(
            <div className="Posts">
               
           
            
               <h1 className="Posts-category"> {category.name}</h1>

               <div className="Post-Form">
               <PostForm catObj={category}/>
             
               </div>
             

            <div className="Posts-items">
            <Table striped bordered hover >
                <thead >
                    <tr>
                    <th>Title</th>
                    <th>posted date</th>
                    
                    </tr>
                   
                </thead>
                
                </Table>
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
