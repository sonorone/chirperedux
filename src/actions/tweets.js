import { saveLikeToggle, saveTweet } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVED_TWEETS = 'RECEIVED_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'SAVE_TWEET';

export function receiveTweets(tweets) {
  return {
    type: RECEIVED_TWEETS,
    tweets
  };
}

export function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  };
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info).catch((e) => {
      console.warn('Error in handleToggleTweet: ', e);

      dispatch(toggleTweet(info));

      alert('There was an error liking the tweet. Try again.');
    });
  };
}

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .catch((e) => {
        console.warn('Error in handleAddTweet: ', e);

        alert('There was an error adding the tweet. Try again.');
      });
  };
}
