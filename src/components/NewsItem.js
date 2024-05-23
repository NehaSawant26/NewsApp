import React from 'react'

const NewsItem =(props)=>  {

    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
      <div className="my-4 mx-3">
        <div className="card"  >
          
          <img src={!imageurl ? "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: '' , zIndex: '1'}}>{source}</span>
            </h5>
            <p className="card-text">{description} </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknow": author} on {new Date(date).toGMTString()}</small></p>
            <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn btn-dark">Read more</a>
            
          </div>
        </div>
      </div>
    )
  }

export default NewsItem
