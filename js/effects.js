import {
  previewImageNode,
} from './scale.js';
import {
  capitalizeString,
} from './utils.js';

const SLIDER_DEFAULT_OPTIONS = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to( value ) {
      if ( Number.isInteger( value ) ) {
        return value.toFixed( 0 );
      }
      return value.toFixed( 1 );
    },
    from( value ) {
      return parseFloat( value );
    },
  },
};
const Effects = {
  Chrome: {
    Filter: 'grayscale',
    Units: '',
    SliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  Sepia: {
    Filter: 'sepia',
    Units: '',
    SliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  Marvin: {
    Filter: 'invert',
    Units: '%',
    SliderSettings: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  Phobos: {
    Filter: 'blur',
    Units: 'px',
    SliderSettings: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
  Heat: {
    Filter: 'brightness',
    Units: '',
    SliderSettings: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
};
const sliderContainerNode = document.querySelector( '.effect-level' );
const sliderNode = sliderContainerNode.querySelector( '.effect-level__slider' );
const effectValueNode = sliderContainerNode.querySelector( '.effect-level__value' );
let currentEffect;
noUiSlider.create( sliderNode, SLIDER_DEFAULT_OPTIONS );

const hideUiSlider = () => {
  sliderContainerNode.classList.add( 'hidden' );
  sliderNode.setAttribute( 'disabled', true );
  effectValueNode.value = '';
};

const showUiSlider = () => {
  sliderNode.noUiSlider.updateOptions( currentEffect.SliderSettings );
  sliderContainerNode.classList.remove( 'hidden' );
  sliderNode.removeAttribute( 'disabled' );
  sliderNode.noUiSlider.on( 'update', () => {
    previewImageNode.classList.add();
    previewImageNode.style.filter = `${currentEffect.Filter}(${sliderNode.noUiSlider.get()}${currentEffect.Units})`;
    effectValueNode.value = sliderNode.noUiSlider.get();
  } );
};

const setUiSliderSettings = ( evt ) => {
  if ( evt.target.value === 'none' ) {
    hideUiSlider();
    previewImageNode.style.filter = 'none';
  } else {
    showUiSlider();
  }
};

const addEffect = ( evt ) => {
  currentEffect = Effects[ capitalizeString( evt.target.value ) ];
  setUiSliderSettings( evt );
};

const onEffectClick = ( evt ) => {
  if ( evt.target.classList.contains( 'effects__radio' ) ) {
    addEffect( evt );
  }
};

export {
  onEffectClick,
  hideUiSlider,
};
