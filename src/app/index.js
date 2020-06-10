import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Matt" 
                    timeAgo="Today at 5:42PM" 
                    content="How artistics!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author="Elliot Fu" 
                    timeAgo="Yesterday at 12:30AM"
                    content="This has been very useful for my research. Thanks as well!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()} 
                    author="Joe Henderson" 
                    timeAgo="5 days ago"
                    content="Dude, this is awesome. Thanks so much" 

                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#app'));