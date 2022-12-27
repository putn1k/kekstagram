const previewImageNode = document.querySelector( '.img-upload__preview img' );
const zoomOutBtnNode = document.querySelector( '.scale__control--smaller' );
const zoomInBtnNode = document.querySelector( '.scale__control--bigger' );
const scaleInputNode = document.querySelector( '.scale__control--value' );
const ImageSettings = {
  DefaultSize: 100,
  MinSize: 25,
  MaxSize: 100,
  ScaleStep: 25,
};

const scaleImage = ( value = ImageSettings.DefaultSize ) => {
  const currentValue = parseInt( value, 10 );
  scaleInputNode.value = `${currentValue}%`;
  previewImageNode.style.transform = `scale(${currentValue / 100})`;
};

const onZoomOutClick = () => {
  const currentScaleValue = parseInt( scaleInputNode.value, 10 );
  if ( currentScaleValue > ImageSettings.MinSize ) {
    scaleInputNode.value = `${currentScaleValue - ImageSettings.ScaleStep}%`;
    scaleImage( scaleInputNode.value );
  }
};

const onZoomInClick = () => {
  const currentScaleValue = parseInt( scaleInputNode.value, 10 );
  if ( currentScaleValue < ImageSettings.MaxSize ) {
    scaleInputNode.value = `${currentScaleValue + ImageSettings.ScaleStep}%`;
    scaleImage( scaleInputNode.value );
  }
};

zoomOutBtnNode.addEventListener( 'click', onZoomOutClick );
zoomInBtnNode.addEventListener( 'click', onZoomInClick );

export {
  scaleImage,
  previewImageNode,
};
