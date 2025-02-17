import { LitElement, css, html } from 'lit'

export class chatBody extends LitElement {

    render() {
        return html`
        <div class="chat-body">
            <slot></slot>
        </div>
        `
    }

}

window.customElements.define('chat-body', chatBody)