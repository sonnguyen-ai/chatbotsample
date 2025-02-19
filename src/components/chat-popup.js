
import { LitElement, css, html } from 'lit'
import { getShadowRoot } from '../shared/ulti'
import { pubSub } from '../shared/state-management';
import { messageData, introduction } from '../shared/sample-data.js'
import { createRef, ref } from 'lit/directives/ref.js';
import './panel/panel.js';
import './panel/panel-item.js';
import './chat-intro.js'
import './chat-body.js'


export class chatPopup extends LitElement {
    inputRef;

    constructor() {
        super()
        this.messages = [...messageData];
        this.inputRef = createRef();
        this.activeSend = true;
    }

    static properties = {
        messages: { type: Array },
        activeSend: { state: true }
    }

    connectedCallback() {
        super.connectedCallback();
        pubSub.subscribe('showPopup', this._scrollToBottom, this)
    }

    //disable shadow dom
    createRenderRoot() {
        return this
    }

    async _scrollToBottom() {
        await this.updateComplete;
        const root = getShadowRoot();
        root.querySelector('.chat-body').scrollTop = root.querySelector('.chat-body').scrollHeight
    }

    async _onClickSubmit(e) {
        e.preventDefault();
        this.activeSend = false;

        pubSub.publish('addMessage', { text: this.inputRef.value.value, role: 'user' });
        this.inputRef.value.value = ''
        // const history = this.messages.filter(message => message.text !== "<i>typing...</i>");
        // const aiResponse = await this._postAI(history);
        // const contentBody = aiResponse.candidates[0].content.parts[0].text
        // pubSub.publish('addMessage', { text: this.inputRef.value.value, role: 'user' });
        // // this.messages = [...this.messages, { text: this.inputRef.value.value, role: 'user' }];
        // // 
        // // this.messages = [...this.messages, { text: "<i>typing...</i>", role: 'model' }];
        // // this._scrollToBottom();

        // // const history = this.messages.filter(message => message.text !== "<i>typing...</i>");
        // // const aiResponse = await this._postAI(history);
        // // const contentBody = aiResponse.candidates[0].content.parts[0].text

        // // this.messages = [...history, { text: contentBody, role: 'model' }];
        // // this._scrollToBottom();

        this.activeSend = true;
    }

    render() {
        return html`
            <div class="chat-popup">
                <chat-header></chat-header>
                <chat-panel>
                    <chat-panel-item name="chatbody">
                        <chat-body slot="content"></chat-body>
                    </chat-panel-item>
                    <chat-panel-item name="intropage" active>
                        <chat-intro slot="content" ></chat-intro>
                    </chat-panel-item>
                </chat-panel>
               
                <div class="chat-footer">
                    <form action="#" class="chat-form" novalidate @submit=${this._onClickSubmit}>
                        <input ${ref(this.inputRef)} type="text" placeholder="Message..." class="chat-input" required>
                        <button class="material-symbols-rounded" type="submit" ?disabled=${!this.activeSend}>
                            arrow_upward
                        </button>
                    </form>
                </div>
            </div>      
        `
    }
}

customElements.define('chat-popup', chatPopup)