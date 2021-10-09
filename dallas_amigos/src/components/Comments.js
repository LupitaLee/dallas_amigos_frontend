import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchCategory } from "../actions/category";

export class Comments extends Component {
    render() {
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
