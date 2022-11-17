const getRandomPositiveNumber = ( min, max ) => {
  if ( min < 0 || max < 0 ) {
    return NaN;
  }
  const lower = Math.ceil( Math.min( min, max ) );
  const upper = Math.floor( Math.max( min, max ) );

  return Math.floor( Math.random() * ( upper - lower + 1 ) + lower );
};

getRandomPositiveNumber( 0, 5 );

const POST_COUNT = 25;

const PHOTO_DESCRIOPTIONS = [
  'Пляж',
  'Указатель',
  'Девушка',
  'Автомобиль',
  'Блюдо',
  'Кот',
  'Пейзаж'
];

const POST_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAMES = [
  'Артём',
  'Игорь',
  'Сергей',
  'Алексей',
  'Вера',
  'Надежда',
  'Любовь',
  'Мария'
];

const createCountGenerator = ( startValue = 0 ) => () => ++startValue;
const getRandomArrayElement = ( elements ) => elements[ getRandomPositiveNumber( 0, elements.length - 1 ) ];

const postID = createCountGenerator();
const postUrl = createCountGenerator();
const commentID = createCountGenerator();

const createComment = () => ( {
  id: commentID(),
  avatar: `img/avatar-${getRandomPositiveNumber(1,6)}.svg`,
  message: getRandomArrayElement( POST_MESSAGES ),
  name: getRandomArrayElement( AUTHOR_NAMES ),
} );

const createPost = () => ( {
  id: postID(),
  url: `photos/${postUrl()}.jpg`,
  description: getRandomArrayElement( PHOTO_DESCRIOPTIONS ),
  likes: getRandomPositiveNumber( 15, 200 ),
  comments: Array.from( {
    length: getRandomPositiveNumber( 1, 5 )
  }, createComment ),
} );

const generatePosts = () => ( Array.from( {
  length: POST_COUNT
}, createPost ) );

generatePosts();
