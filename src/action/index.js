export const SHOWNEWS = 'SHOW_NEWS';
export const HEADLINES = 'HEADLINES';
export const BUTTONCLICK='BUTTONCLICK';

export function showNews(news) {
    // console.log(news)
    return {
        type: SHOWNEWS,
        news
    }
}

export function headlines(news) {
    // console.log(news)
    return {
        type: HEADLINES,
        news
    }
}

export function handleClick(val){
    return{
        type:BUTTONCLICK,
        val
    }
}

export function searchNews(q) {
    const apiurl = 'https://newsapi.org/v2/everything?q=' + q + '&apiKey=5557193d99364a7a8c41ba7ce264b804'
    return function(dispatch){
        fetch(apiurl).then(res => res.json()).then(
        data => {
            var arr = data.articles
            dispatch(showNews(arr))
        }).catch(error => console.log(error))
    }
}

export function showHeadlines(){
    const headlineurl = 'https://newsapi.org/v2/top-headlines?q=latest&apiKey=5557193d99364a7a8c41ba7ce264b804'
    return function(dispatch){
        fetch(headlineurl).then(res => res.json()).then(
        data => {
            var arr = data.articles
            dispatch(headlines(arr))
        }).catch(error => console.log(error))
    }
}