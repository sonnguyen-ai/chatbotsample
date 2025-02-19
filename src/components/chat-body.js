import { LitElement, css, html } from 'lit'
import { pubSub } from '../shared/state-management';
import { ref, createRef } from 'lit/directives/ref.js';
import { messageData } from '../shared/sample-data.js';

export class chatBody extends LitElement {
    static properties = {
        messages: { type: Array, state: false },
    }

    elBodyRef = createRef();

    //disable shadow dom
    createRenderRoot() {
        return this
    }
    /**
     *
     */
    constructor() {
        super();
        this.messages = [...messageData];
        pubSub.subscribe('addMessage', this._addMessage, this)
    }

    _addMessage(newMessage) {
        if (newMessage.role === 'model') {
            this.messages = [...this._getHistory(), newMessage];
        }
        else if (newMessage.role === 'user') {
            this.messages = [...this.messages, newMessage, { text: "<i>typing...</i>", role: 'model' }];
            pubSub.publish('askLLM', this._getHistory())
        }
        this._scrollToBottom();
    }

    _getHistory() {
        return this.messages.filter(message => message.text !== "<i>typing...</i>");
    }

    async _scrollToBottom() {
        await this.updateComplete;
        this.elBodyRef.value.scrollTop = this.elBodyRef.value.scrollHeight
    }

    render() {
        return html`
        <div class="chat-body"  ${ref(this.elBodyRef)}>
            ${this.messages.map((message, i) => {
            if (message.hideInChat === true) return;
            return html`<chat-message key=${i} text=${message.text} isBot=${message.role === 'model'}></chat-message>`
        })}
        </div>
        `
    }

}

window.customElements.define('chat-body', chatBody)