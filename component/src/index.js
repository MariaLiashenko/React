import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; 
import CommentDetail from './CommentDetail'; 

const App = () =>{
    return (
        
        <div className = "ui container comments">
            
            <CommentDetail 
                author ="Sam"
                timeAgo = "Today 5 pm" 
                text = "beautifull"
                avatar = {faker.image.avatar()}
            />
            <CommentDetail 
                author ="Dup" 
                timeAgo = "Today 7 pm" 
                text = "nice"
                avatar = {faker.image.avatar()}
            />
            <CommentDetail 
                author ="Swag" 
                timeAgo = "Today 1 am" 
                text = "cool"
                avatar = {faker.image.avatar()}
            />
            <CommentDetail 
                author ="Same" 
                timeAgo = "Today 10 am" 
                text = "beautifull))))"
                avatar = {faker.image.avatar()}
            />
            <CommentDetail 
                author ="Samuel" 
                timeAgo = "Today 9 pm" 
                text = "1000/10"
                avatar = {faker.image.avatar()}
            />

        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'))
