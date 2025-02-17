
import { LitElement, css, html } from 'lit'
import { pubSub } from '../shared/state-management.js'

export class chatConnect extends LitElement {

    static get properties() {
        return {
            active: { state: true },
        }
    }
    constructor() {
        super()
        this.active = true;
        pubSub.subscribe('closePopup', this._openConnect, this)
    }

    //create property isBot, and text that can be received from parent not use typescript

    //disable shadow dom
    createRenderRoot() {
        return this
    }

    _openConnect() {
        this.active = true
        this.removeAttribute('inert')

    }

    render() {
        return html`
            <div class="floating-icon-container ${this.active ? 'show' : ''}" @click=${this._onClick}>
                <span class="material-symbols-rounded">
                    chat
                </span>
            </div>
        `
    }

    _onClick() {
        pubSub.publish('showPopup')
        this.active = false
        this.setAttribute('inert','')
    }
}

customElements.define('chat-connect', chatConnect)