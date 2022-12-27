const getRandomPositiveNumber = ( min, max ) => {
  if ( min < 0 || max < 0 ) {
    return NaN;
  }
  const lower = Math.ceil( Math.min( min, max ) );
  const upper = Math.floor( Math.max( min, max ) );

  return Math.floor( Math.random() * ( upper - lower + 1 ) + lower );
};
const createCountGenerator = ( startValue = 0 ) => () => ++startValue;
const getRandomArrayElement = ( elements ) => elements[ getRandomPositiveNumber( 0, elements.length - 1 ) ];
const isEscKey = ( evt ) => evt.key === 'Escape';
const isElementOnFocus = ( element ) => document.activeElement === element;
const capitalizeString = ( str ) => str[ 0 ].toUpperCase() + str.slice( 1 );
const declineWord = ( amount, wordsArr ) => {
  const CASES = [ 2, 0, 1, 1, 1, 2 ];
  const wordIndex = ( amount % 100 > 4 && amount % 100 < 20 ) ? 2 : CASES[ ( amount % 10 < 5 ) ? amount % 10 : 5 ];
  return wordsArr[ wordIndex ];
};
const isValidType = ( file ) => {
  const FILE_TYPES = [ 'jpg', 'jpeg', 'png' ];
  return FILE_TYPES.some( ( item ) => file.name.toLowerCase().endsWith( item ) );
};
const loadPreviewImage = ( evt, targetImgNode ) => {
  if ( evt.target.files[ 0 ] && isValidType( evt.target.files[ 0 ] ) ) {
    targetImgNode.src = URL.createObjectURL( evt.target.files[ 0 ] );
  }
};
const resetStyleElement = ( element ) => {
  element.removeAttribute( 'style' );
  element.removeAttribute( 'class' );
};

export {
  getRandomPositiveNumber,
  createCountGenerator,
  getRandomArrayElement,
  isEscKey,
  isElementOnFocus,
  declineWord,
  loadPreviewImage,
  capitalizeString,
  resetStyleElement,
};
