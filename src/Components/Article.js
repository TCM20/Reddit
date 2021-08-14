
import React from 'react';


function Article(props){
    return(
        <div>
        <a href={"https://reddit.com" + props.article.permalink } target="_blank">

        <h3>{ props.article.title}</h3>

    
            </a>
        </div>
    )
}



export default Article;

