import {
  isEscKey,
  isElementOnFocus,
} from './utils.js';

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
  imageEditBlockNode.classList.add( 'hidden' );
  document.body.classList.remove( 'modal-open' );
  validationRules.reset();
  closeBtnNode.removeEventListener( 'click', onCloseBtnClick );
  document.removeEventListener( 'keydown', onEscKeydown );
};

const onImageChange = () => {
  imageEditBlockNode.classList.remove( 'hidden' );
  document.body.classList.add( 'modal-open' );
  closeBtnNode.addEventListener( 'click', onCloseBtnClick );
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
