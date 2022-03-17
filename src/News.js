import React from 'react'

class News extends React.Component {
    render() {
        const { news,newsLoaded,headlinesLoaded,headlines }=this.props
        return (
            <div className='news-content'>
                <div id='news' className='news'>
                    {!newsLoaded ? <div>LOADING...</div>:
                        news.map((item,index)=>{
                            return <div className="news-card" key={index}>
                                <div className="header">
                                    <div><b>Author:</b> {item.author}</div>
                                    <div> {item.publishedAt} </div>
                                </div>
                                <div className="title">
                                    <div><b>Source:</b> {item.source.name} </div>
                                    <div><b>Title:</b> {item.title} </div>
                                </div>
                                <div className="content">
                                    <div> {item.content} </div>
                                </div>
                                <div className="footer">
                                    <div><b>Web Link:</b><a href={item.url} target={'_blank'} rel={'noreferrer'}> {item.url} </a></div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='headline-container'>
                    <h3 style={{ color: 'red', background: 'lightgrey', textAlign: 'center', margin: '0',fontSize:'1.5vw' }}>HEADLINES</h3>
                    <div className='headlines'>
                        {!headlinesLoaded ? <div>LOADING...</div>:
                            headlines.map((item,index)=>{
                                return( 
                                <div className="headline-card" key={index}>
                                    <div><a href={item.url} target={'_blank'} rel={'noreferrer'}> {item.title} </a></div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            )
    }
}
export default News;