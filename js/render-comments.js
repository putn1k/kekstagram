import {
  commentsContainerNode,
} from './modal-post.js';

const commentTemplate = `
  <li class="social__comment">
    <img
    class="social__picture"
    src=""
    alt=""
    width="35" height="35">
    <p class="social__text"></p>
  </li>`;

const setupComment = ( {
  avatar,
  name,
  message
} ) => {
  commentsContainerNode.insertAdjacentHTML( 'afterbegin', commentTemplate );
  commentsContainerNode.querySelector( '.social__picture' ).src = avatar;
  commentsContainerNode.querySelector( '.social__picture' ).alt = name;
  commentsContainerNode.querySelector( '.social__text' ).textContent = message;
};

const renderComments = ( comments, container ) => {
  container.querySelector( '.social__comment-count' ).classList.add( 'hidden' );
  container.querySelector( '.social__comments-loader' ).classList.add( 'hidden' );
  container.querySelector( '.social__comments' ).innerHTML = '';
  if ( comments.length < 1 ) {
    commentsContainerNode.innerHTML = '<li class="social__comment">К этой фотографии комментариев никто не оставил</li>';
    return;
  }
  comments.forEach( setupComment );
};

export {
  renderComments,
};
