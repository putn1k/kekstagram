import {
  isEscKey,
  isElementOnFocus,
  loadPreviewImage,
  resetStyleElement,
} from './utils.js';

import {
  scaleImage,
  previewImageNode,
} from './scale.js';

import {
  onEffectClick,
  hideUiSlider,
} from './effects.js';

import {
  imageEditFormNode,
  imageEditBlockNode,
  validationRules,
  hashtagInputNode,
  commentInputNode,
} from './validation.js';

const uploadInputNode = imageEditFormNode.querySelector( '#upload-file' );
const closeBtnNode = imageEditFormNode.querySelector( '.img-upload__cancel' );

const onCloseBtnClick = () => {
  imageEditFormNode.reset();
  resetStyleElement( previewImageNode );
  imageEditBlockNode.classList.add( 'hidden' );
  document.body.classList.remove( 'modal-open' );
  validationRules.reset();
  closeBtnNode.removeEventListener( 'click', onCloseBtnClick );
  imageEditFormNode.removeEventListener( 'click', onEffectClick );
  document.removeEventListener( 'keydown', onEscKeydown );
};

const onImageChange = ( evt ) => {
  imageEditBlockNode.classList.remove( 'hidden' );
  document.body.classList.add( 'modal-open' );
  loadPreviewImage( evt, previewImageNode );
  scaleImage();
  hideUiSlider();
  closeBtnNode.addEventListener( 'click', onCloseBtnClick );
  imageEditFormNode.addEventListener( 'click', onEffectClick );
  document.addEventListener( 'keydown', onEscKeydown );
};

function onEscKeydown( evt ) {
  if ( isEscKey( evt ) && !isElementOnFocus( hashtagInputNode ) && !isElementOnFocus( commentInputNode ) ) {
    onCloseBtnClick();
  }
}

const onFormSubmit = ( evt ) => {
  if ( !validationRules.validate() ) {
    evt.preventDefault();
  }
};

uploadInputNode.addEventListener( 'change', onImageChange );
imageEditFormNode.addEventListener( 'submit', onFormSubmit );
