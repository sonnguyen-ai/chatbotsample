
import { LitElement, css, html } from 'lit'
import { getShadowRoot } from '../shared/ulti'
import { pubSub } from '../shared/state-management';
import messageData from '../shared/sample-data.js'
import { createRef, ref } from 'lit/directives/ref.js';
import './panel/panel.js';
import './panel/panel-item.js';
import './chat-intro.js'


export class chatPopup extends LitElement {
    inputRef;

    constructor() {
        super()
        this.messages = [...messageData];
        this.inputRef = createRef();
    }

    static properties = {
        messages: { type: Array },
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

        this.messages = [...this.messages, { text: this.inputRef.value.value, role: 'user' }];
        this.inputRef.value.value=''
        await new Promise(resolve => setTimeout(resolve, 500)).then(() => {
        })
        this._scrollToBottom();
        this.messages = [...this.messages, { text: "<i>typing...</i>", role: 'system' }];
    
        //add delay 1s
        await new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            
        })

        this.messages = [...this.messages, { text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor", role: 'system' }].filter(message => !message.text.includes('typing...'));
        this._scrollToBottom();
    }

    render() {
        return html`
            <div class="chat-popup">
                <chat-header></chat-header>
                <chat-panel>
                    <chat-panel-item name="chatbody">
                        <div class="chat-body" slot="content">
                            ${this.messages.map((message, i) => html`<chat-message key=${i} text=${message.text} isBot= ${message.role === 'system'}></chat-message>`)}
                        </div>
                    </chat-panel-item>
                    <chat-panel-item name="intropage" active=true>
                        <chat-intro slot="content" ></chat-intro>
                    </chat-panel-item>
                </chat-panel>
               
                <div class="chat-footer">
                    <form action="#" class="chat-form" novalidate @submit=${this._onClickSubmit}>
                        <input ${ref(this.inputRef)} type="text" placeholder="Message..." class="chat-input" required>
                        <button class="material-symbols-rounded">
                            arrow_upward
                        </button>
                    </form>
                </div>
            </div>      
        `
    }
}

customElements.define('chat-popup', chatPopup)