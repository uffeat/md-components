import { settings } from '../settings.js';
import { Component } from '../base/component.js';

const name = 'button'

/* Component for button with ripple effect */
class Button extends Component {
  constructor({text}) {
    super();
    this.html = `
    <link rel="stylesheet" href="./assets/components/${name}.css">
    <button></button>
    `;
    // HTML elements:
    this._buttonElement = this._root.querySelector('button');
    // Events:
    this._buttonElement.addEventListener('click', this._createRipple.bind(this));
    // Args:
    this.text = text;
  }

  get text() {
    return this._buttonElement.textContent;
  }

  set text(text) {
    this._buttonElement.textContent = text;
  }

  _createRipple(event) {
    const oldRippleElement = this._root.querySelector('span.ripple');
    if (oldRippleElement) {
      oldRippleElement.remove();
    }
    const rippleElement = document.createElement('span');
    rippleElement.classList.add("ripple")
    // Set rippleElement size (ripple diameter):
    const size = Math.max(this._buttonElement.clientWidth, this._buttonElement.clientHeight);
    rippleElement.style.width = rippleElement.style.height = `${size}px`;
    // Position rippleElement:
    rippleElement.style.left = `${event.clientX - this._buttonElement.offsetLeft - size/2}px`;
    rippleElement.style.top = `${event.clientY - this._buttonElement.offsetTop - size/2}px`;
    this._buttonElement.appendChild(rippleElement)
  }
}

const componentTag = `${settings.prefix}-${name}`;
customElements.get(componentTag) || customElements.define(componentTag, Button);

export { Button };






