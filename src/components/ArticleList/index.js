import React, { Component, PropTypes }  from 'react'
import { connect } from 'react-redux'
import { mapToArray } from '../../helpers'
import { loadAllArticles } from '../../AC'
import DumbArticleList from './Dumb'

export default connect(
    (state) => {
        const articles = mapToArray(state.articles.entities)
        const { filters } = state
        const {selected} = filters
        const { from, to } = filters.dateRange

        const filteredArticles = articles.filter(article => {
            const published = Date.parse(article.date)
            return (!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
        })
        return {
            articles: filteredArticles,
            loading: state.articles.loading
        }
}, { loadAllArticles })(DumbArticleList)