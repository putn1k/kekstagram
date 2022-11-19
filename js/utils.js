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

export {
  getRandomPositiveNumber,
  createCountGenerator,
  getRandomArrayElement,
  isEscKey,
};
