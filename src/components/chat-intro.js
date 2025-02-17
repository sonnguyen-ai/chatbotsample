import { LitElement, css, html } from 'lit'
import { pubSub } from '../shared/state-management'

export class chatIntro extends LitElement {

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        return html`
            <div class="intro-page">
                <h2>Hãy cùng chat với trợ lý AI</h2>
                <p>Vui lòng hãy nhấn tiếp tục để gặp chúng tôi.</p>
                <button class="start-chat" @click=${this._onClickStartChat}>
                    Tiếp tục
                </button>
            </div>
        `
    }

    _onClickStartChat() {
        pubSub.publish('close-intro-show-bodychat')
    }

    createRenderRoot() {
        return this
    }


}

window.customElements.define('chat-intro', chatIntro)