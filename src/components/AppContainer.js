import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'

function AppContainer(props) {
    return (
        <div>
            <UserForm />
            <ArticleList articles={props.articles}/>
        </div>
    )
}

AppContainer.propTypes = {
}

export default AppContainer