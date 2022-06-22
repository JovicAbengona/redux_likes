import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReact } from '../actions';

class ReactBtn extends Component {
    render() {
        return <>
            <button type="button" className="btn btn-outline-success me-2" onClick={() => this.props.selectReact({ type: "LIKE_SELECTED" })}>
                <i className="fa-solid fa-thumbs-up"></i> {this.props.reacts.likes} Likes
            </button>
            <button type="button" className="btn btn-outline-danger" onClick={() => this.props.selectReact({ type: "DISLIKE_SELECTED" })}>
                <i className="fa-solid fa-thumbs-down"></i> {this.props.reacts.dislikes} Dislikes
            </button>
        </>
    };
};

const mapStateToProps = (state) => {
    return { reacts: state.reacts };
};

export default connect(mapStateToProps, { selectReact })(ReactBtn);
