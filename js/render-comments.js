import {
  declineWord,
} from './utils.js';

import {
  commentsContainerNode,
} from './modal-post.js';

const commentFragment = document.createDocumentFragment();
const commentCountNode = document.querySelector( '.social__comment-count' );
const commentLoaderNode = document.querySelector( '.social__comments-loader' );
const START_COMMENT_VALUE = 5;
const STEP_COMMENT_VALUE = 5;
let dynamicCounterValue = START_COMMENT_VALUE;

const declineCommentWord = ( comments ) => declineWord( comments.length, [ 'комментарий', 'комментария', 'комментариев' ] );

const countComments = ( counterNode, diffCounter, totalCounterNode ) => {
  counterNode.innerHTML = `${diffCounter} из <span class="comments-count">${totalCounterNode.length}</span> ${declineCommentWord(totalCounterNode)}`;
};

const createTemplateComment = () => {
  const li = document.createElement( 'li' );
  li.classList.add( 'social__comment' );
  li.innerHTML = `
    <img
      class="social__picture"
      src=""
      alt=""
      width="35" height="35">
    <p class="social__text"></p>`;
  return li;
};

const setupComment = ( {
  avatar,
  name,
  message
}, i ) => {
  const commentElement = createTemplateComment();
  commentElement.querySelector( '.social__picture' ).src = avatar;
  commentElement.querySelector( '.social__picture' ).alt = name;
  commentElement.querySelector( '.social__text' ).textContent = message;
  commentFragment.appendChild( commentElement );
  if ( i >= START_COMMENT_VALUE ) {
    commentElement.classList.add( 'hidden' );
  }
};

const renderComments = ( comments ) => {
  commentCountNode.classList.add( 'hidden' );
  commentLoaderNode.classList.add( 'hidden' );

  commentsContainerNode.innerHTML = '';
  if ( comments.length < 1 ) {
    commentCountNode.classList.add( 'hidden' );
    commentLoaderNode.classList.add( 'hidden' );
    commentsContainerNode.innerHTML = '<li class="social__comment">К этой фотографии комментариев никто не оставил</li>';
    return;
  }
  if ( comments.length <= START_COMMENT_VALUE ) {
    commentCountNode.classList.remove( 'hidden' );
    commentCountNode.innerHTML = `${comments.length} ${declineCommentWord(comments)}`;
  }
  if ( comments.length > START_COMMENT_VALUE ) {
    commentCountNode.classList.remove( 'hidden' );
    commentLoaderNode.classList.remove( 'hidden' );
    countComments( commentCountNode, START_COMMENT_VALUE, comments );
  }
  comments.forEach( setupComment );
  dynamicCounterValue = START_COMMENT_VALUE;
  commentsContainerNode.appendChild( commentFragment );
};

commentLoaderNode.addEventListener( 'click', ( evt ) => {
  evt.preventDefault();
  dynamicCounterValue += STEP_COMMENT_VALUE;
  const visibleItems = Array.from( commentsContainerNode.children ).slice( 0, dynamicCounterValue );
  visibleItems.forEach( ( item ) => item.classList.remove( 'hidden' ) );
  countComments( commentCountNode, visibleItems.length, commentsContainerNode.children );
  if ( visibleItems.length === commentsContainerNode.children.length ) {
    commentLoaderNode.classList.add( 'hidden' );
  }
} );

export {
  renderComments,
};
