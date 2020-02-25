import React, { Component } from 'react';
import Tweet from './Tweet';
import NewTweet from './NewTweet';
import { connect } from 'react-redux';

class TweetPage extends Component {
  render() {
    const { id,replies } = this.props;

    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id}/>
        <div>
          <h3 className='center'>Replies</h3>
        </div>
        <ul>
          {replies &&
            replies.map((id) => (
              <li key={id}>
                <Tweet id={id} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets, authedUser, users }, props) {
  const { id } = props.match.params;

  return {
    id,
    replies: tweets[id].replies.sort((a,b,)=> tweets[b].timestamp - tweets[a].timestamp),
    authedUser
  };
}

export default connect(mapStateToProps)(TweetPage);
