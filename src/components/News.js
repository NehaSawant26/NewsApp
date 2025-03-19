import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState()
    const [totalResults, setTotalResults] = useState(0)

    const UpdateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1f63bdc5fc064174bc9d6cc0af24c5b8&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        UpdateNews()

    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1f63bdc5fc064174bc9d6cc0af24c5b8&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(false);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px', marginTop: '90px' }}>NewsApp - {props.category} Top Headlines </h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles?.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles ? articles.map((element, url) => {
                            return <div className="col-md-4" key={url} >
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>

                        }) : null}

                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}


News.defaultProps = {
    country: 'in',
    category: 'General'
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}


export default News
