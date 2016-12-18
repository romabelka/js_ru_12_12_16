import React, {Component} from 'react'
import CommentList from'./CommentList';

export default class Article extends Component {
    state = {
        isOpen: false
    };

    /*
     constructor() {
     super()
     this.state = {
     isOpen: false
     }
     }
     */

    render() {
        const {article} = this.props;
        return (
            <div>
                <h2 onClick={this.toggleOpen}>{article.title}</h2>
                {this.getBody()}
                {/*это стоило внести в getBody*/}
                <CommentList comentsId={article.comments}/>

            </div>
        )
    }


    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
            </section>
        )
    }

}
