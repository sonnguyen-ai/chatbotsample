
import { LitElement, css, html } from 'lit'
import { getShadowRoot } from '../shared/ulti'
import { pubSub } from '../shared/state-management';
import { messageData, introduction } from '../shared/sample-data.js'
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

        this.messages = [...this.messages, { text: this.inputRef.value.value, role: 'user' }];
        this.inputRef.value.value = ''
        this.messages = [...this.messages, { text: "<i>typing...</i>", role: 'model' }];
        this._scrollToBottom();

        const history = this.messages.filter(message => message.text !== "<i>typing...</i>");
        const aiResponse = await this._postAI(history);
        const contentBody = aiResponse.candidates[0].content.parts[0].text
        console.log(`airesponse: ${contentBody}`);

        this.messages = [...history, { text: contentBody, role: 'model' }];
        this._scrollToBottom();

        // //add delay 1s
        // await new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
        //     this.messages = [...this.messages, { text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor", role: 'system' }].filter(message => !message.text.includes('typing...'));
        //     this._scrollToBottom();
        // })

        this.activeSend = true;
    }

    async _postAI(history) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_API_GEMINI_KEY}`;
        console.log(url);

        //build data post to server
        console.log(history);


        const payload = history.map(message => {
            return {
                role: message.role,
                parts: [
                    {
                        text: message.text
                    }
                ]
            }
        })

        const httpRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                system_instruction: {
                    parts:
                        { text: introduction}
                }, contents: payload
            })
        }

        var response = await fetch(url, httpRequest);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    render() {
        return html`
            <div class="chat-popup">
                <chat-header></chat-header>
                <chat-panel>
                    <chat-panel-item name="chatbody">
                        <div class="chat-body" slot="content">
                            ${this.messages.map((message, i) => {
            if (message.hideInChat === true) return;
            return html`<chat-message key=${i} text=${message.text} isBot= ${message.role === 'model'}></chat-message>`
        })}
                        </div>
                    </chat-panel-item>
                    <chat-panel-item name="intropage" active=true>
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