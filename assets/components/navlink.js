import { Component } from './component.js';

class Navlink extends Component {
  constructor({ text = '' }) {
    super()
    this.html = `
    <link rel="stylesheet" href="./assets/components/navlink.css">
    <a>
      <span class="text">Text</span>
      <span class="line"></span>
    </a>
    `
    this._eLink = this._root.querySelector('a')
    this._eText = this._root.querySelector('.text')
    this.text = text;
  }

  get text() {
    return this._eText.textContent
  }

  set text(text) {
    this._eText.textContent = text
  }

  select() {
    this._eLink.classList.add('selected')
  }

  deselect() {
    this._eLink.classList.remove('selected')
  }
}

const componentTag = 'u-navlink'
customElements.get(componentTag) || customElements.define(componentTag, Navlink)

export { Navlink };


