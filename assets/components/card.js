import { Component } from './component.js';
class Card extends Component {
  constructor() {
    super()
    this.html = `
    <link rel="stylesheet" href="./assets/components/card.css">
    <h1>Card</h1>
    `
  }
}

const componentTag = 'u-card'
customElements.get(componentTag) || customElements.define(componentTag, Card)

export { Card };


