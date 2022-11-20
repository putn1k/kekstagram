import {
  commentsContainerNode,
} from './modal-post.js';


const commentFragment = document.createDocumentFragment();

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
} ) => {
  const commentElement = createTemplateComment();
  commentElement.querySelector( '.social__picture' ).src = avatar;
  commentElement.querySelector( '.social__picture' ).alt = name;
  commentElement.querySelector( '.social__text' ).textContent = message;
  commentFragment.appendChild( commentElement );
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
  commentsContainerNode.appendChild( commentFragment );
};

export {
  renderComments,
};
