import { HEADLINES, SHOWNEWS,BUTTONCLICK } from "../action"
const intial_state={
    news: [],
    headlines: [],
    newsLoaded:false,
    headlinesLoaded:false
}

export default function news(state=intial_state,action){
    //console.log(action.news)
    switch(action.type){
        case SHOWNEWS:
            return{
                ...state,
                news:action.news,
                newsLoaded:true
            }
        case HEADLINES:
            return {
                ...state,
                headlinesLoaded:true,
                headlines:action.news,
            }
        case BUTTONCLICK:
            return{
                ...state,
                newsLoaded:false
            }
        default:
            return state
    }
}