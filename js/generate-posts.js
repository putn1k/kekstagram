import {
  getRandomPositiveNumber,
  createCountGenerator,
  getRandomArrayElement,
} from './utils.js';

import {
  POST_COUNT,
  POST_DESCRIPTIONS,
  POST_MESSAGES,
  AUTHOR_NAMES,
} from './data.js';

const postID = createCountGenerator();
const postUrl = createCountGenerator();
const commentID = createCountGenerator();

const createComment = () => ( {
  id: commentID(),
  avatar: `img/avatar-${getRandomPositiveNumber( 1, 6 )}.svg`,
  message: getRandomArrayElement( POST_MESSAGES ),
  name: getRandomArrayElement( AUTHOR_NAMES ),
} );

const createPost = () => ( {
  id: postID(),
  url: `photos/${postUrl()}.jpg`,
  description: getRandomArrayElement( POST_DESCRIPTIONS ),
  likes: getRandomPositiveNumber( 15, 200 ),
  comments: Array.from( {
    length: getRandomPositiveNumber( 0, 12 )
  }, createComment ),
} );

const generatePosts = () => ( Array.from( {
  length: POST_COUNT
}, createPost ) );

const POSTS = generatePosts();

export {
  POSTS,
};
