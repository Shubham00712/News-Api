import React from "react"
import { handleClick, searchNews } from "./action"

class Navbar extends React.Component {
    renderNews = (e) => {
        this.props.dispatch(handleClick(false))
        if (e === 'home')
            this.props.dispatch(searchNews('*'))
        else
            this.props.dispatch(searchNews(e))
    }
    render() {
        return (
            <div>
                <div className='main-header' style={{ fontSize: '4vw' }}>NEWS</div>
                <div className='btn-row'>
                    <button onClick={() => this.renderNews('home')} className='category-btn'>HOME</button>
                    <button onClick={() => this.renderNews('business')} className='category-btn' name='business'>BUSINESS RELATED</button>
                    <button onClick={() => this.renderNews('entertainment')} className='category-btn' name='entertainment'>ENTERTAINMENT RELATED</button>
                    <button onClick={() => this.renderNews('general')} className='category-btn' name='general'>GENERAL RELATED</button>
                    <button onClick={() => this.renderNews('health')} className='category-btn' name='health'>HEALTH RELATED</button>
                    <button onClick={() => this.renderNews('science')} className='category-btn' name='science'>SCIENCE RELATED</button>
                    <button onClick={() => this.renderNews('sports')} className='category-btn' name='sports'>SPORTS RELATED</button>
                    <button onClick={() => this.renderNews('technology')} className='category-btn' name='technology'>TECHNOLOGY RELATED</button>
                </div>
            </div>
        )
    }
}
export default Navbar;