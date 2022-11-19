import {
  showModalPost,
} from './modal-post.js';

const postsContainerNode = document.querySelector( '.pictures' );
const postTemplate = document.querySelector( '#picture' )
  .content
  .querySelector( '.picture' );
const postsFragment = document.createDocumentFragment();

const setupPost = ( {
  url,
  likes,
  description,
  comments
} ) => {
  const postElement = postTemplate.cloneNode( true );
  const postInfo = {
    url,
    likes,
    description,
    comments
  };
  postElement.href = url;
  postElement.querySelector( '.picture__img' ).src = url;
  postElement.querySelector( '.picture__likes' ).textContent = likes;
  postElement.querySelector( '.picture__comments' ).textContent = comments.length;
  postElement.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    showModalPost( postInfo );
  } );
  postsFragment.appendChild( postElement );
};

const renderPosts = ( posts ) => {
  posts.forEach( setupPost );
  postsContainerNode.appendChild( postsFragment );
};

export {
  renderPosts,
};
