import {Component} from './component.js';

class Mother extends Component {
  constructor() {
    super()
    this.html = `
    <link rel="stylesheet" href="./assets/components/mother.css">
    <header>
      <div class="top">
        <div class="left">left</div>
        <nav class="right">
          <slot name="upperNav"></slot>
        </nav>
      </div>
      <h1>Rufus</h1>
    </header>
    <nav class="lower"></nav>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      Footer
    </footer>
    `
    this._eHeadline = this._root.querySelector('h1')
    /*
    setInterval(() => {
      if (this._eHeadline.classList.contains('hidden')) {
        this._eHeadline.classList.remove('hidden')
      }
      else {
        this._eHeadline.classList.add('hidden')
      }
    }, 2000)
    */
 
  }
}

const componentTag = 'u-mother'
customElements.get(componentTag) || customElements.define(componentTag, Mother)

export { Mother };


