import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";

export class Comments extends Component {

    componentDidMount(){

        this.props.fetchCategory(this.props.match.params.id)
    }


    render() {

        console.log("Comments",this.props)
        // console.log("this.props.category",this.props.category)
        // console.log("this.props.category.comments",this.props.category.posts)

        return (
            <div>
                Comments
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps)=> {

    return {category: state.categoriesReducer.category[ownProps.match.params.id]}
}


// export default Posts
export default connect (mapStateToProps, {fetchCategory})(Comments)
