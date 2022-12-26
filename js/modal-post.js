import {
  isEscKey,
} from './utils.js';

import {
  renderComments,
} from './render-comments.js';

const postModalNode = document.querySelector( '.big-picture' );
const closePostModalNode = postModalNode.querySelector( '.big-picture__cancel' );
const commentsContainerNode = postModalNode.querySelector( '.social__comments' );

const setupPostModal = ( {
  url,
  likes,
  description,
  comments,
} ) => {
  postModalNode.querySelector( '.big-picture__img img' ).src = url;
  postModalNode.querySelector( '.social__caption' ).textContent = description;
  postModalNode.querySelector( '.likes-count' ).textContent = likes;
  renderComments( comments );
};

const onCloseBtnClick = () => {
  postModalNode.classList.add( 'hidden' );
  document.body.classList.remove( 'modal-open' );
  closePostModalNode.removeEventListener( 'click', onCloseBtnClick );
  document.removeEventListener( 'keydown', onEscKeydown );
};

const showModalPost = ( post ) => {
  postModalNode.classList.remove( 'hidden' );
  document.body.classList.add( 'modal-open' );
  setupPostModal( post );
  closePostModalNode.addEventListener( 'click', onCloseBtnClick );
  document.addEventListener( 'keydown', onEscKeydown );
};

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) ) {
    onCloseBtnClick();
  }
}

export {
  showModalPost,
  commentsContainerNode,
};
