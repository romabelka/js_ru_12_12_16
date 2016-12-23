import React, {Component} from 'react'
import CommentList from'./CommentList'

export default class Article extends Component {

    render() {
        const {article, onClick} = this.props;
        return (
            <div>
                <h2 onClick={onClick}>{article.title}</h2>
                {this.getBody()}
            </div>
        )
    }


    // toggleOpen = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // };

    getBody() {
        if (!this.props.isOpen) return null;
        // console.log(this.props);
        return (
            <section>
                {this.props.article.text}
                <CommentList comments={this.props.article.comments}/>
            </section>
        )
    }

}
