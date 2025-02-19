import { LitElement, css, html } from 'lit'
import { sharedStyles } from './shared/shared-styles.js'
import "./components/chat-header.js";
import "./components/chat-message.js";
import "./components/chat-connect.js";
import "./components/chat-popup.js";
import { pubSub } from "./shared/state-management.js"
import { appendFontLinks, getShadowRoot } from "./shared/ulti.js"
import { introduction } from "./shared/sample-data.js"
import { formatAIExplanation } from "./shared/ulti.js"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class chatApp extends LitElement {

    static get properties() {
        return {
            _active: { state: true }
        }
    }

    constructor() {
        super()
        //get the current url, check query param for popup true or not, if true open the loading popup false cancel load MFE

        //get current url



        appendFontLinks();
        pubSub.subscribe('showPopup', this._showPopup, this)
        pubSub.subscribe('closePopup', this._closePopup, this)
        pubSub.subscribe('show-footer', this._showFooter, this)
        pubSub.subscribe('askLLM', this._askLLM, this)
    }

    async _askLLM(history) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_API_GEMINI_KEY}`;

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
                        { text: introduction }
                }, contents: payload
            })
        }

        var response = await fetch(url, httpRequest);

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return;
        }

        const contentBody = (await response.json()).candidates[0].content.parts[0].text;

        pubSub.publish('addMessage', { text: formatAIExplanation(contentBody), role: 'model' });
    }

    _showFooter(data) {
        const footer = getShadowRoot().querySelector('.chat-footer');
        footer.classList.add('active')
    }

    _showPopup() {
        this._active = true
    }

    _closePopup() {
        this._active = false
    }

    render() {
        return html`
       <div class="container ${this._active ? 'show' : ''}">
            <chat-popup></chat-popup>
            <chat-connect></chat-connect>
        </div>
        `
    }

    static get styles() {
        return [sharedStyles, css`
        * {
            margin:0;
            padding: 0;
            box-sizing: border-box;
            font-family: "inter", sans-serif;
        }
        .container {
    position: fixed;
    bottom: 50px;
    right:10px;
}

.chat-popup{
    transform: scale(0.2);
    transform-origin: bottom right;
    
    display: flex;
    opacity: 0;
    pointer-events: none;
    flex-direction: column;
    justify-content: space-between;
   position: relative;
    width: 25rem;
    max-width: 90vw;
    overflow: hidden;
    background: #fff;
    border-radius: 15px;
    transition: all 0.1s ease;
    box-shadow: 0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5);
}

.container.show .chat-popup{
    opacity: 1;
    pointer-events: auto;
    transform:scale(1);
    transition: all 0.1s ease;
} 

.chat-popup .chat-header {
    display: flex;
    padding: 15px 22px;
    align-items: center;
    justify-content: space-between;
    background: var(--headercolor);
}

.chat-header .header-info{
    display: flex;
    gap: 10px;
    align-items: center;
}

.header-info svg{
    height: 35px;
    width: 35px;
    flex-shrink: 0;
    fill: #fff;
    background-color: var(--maincolor); 
    border-radius: 50%;
    padding: 6px;
}

.header-info .logo-text{
    color: var(--messenger-sender);
    font-size: 1.3rem;
    font-weight: 600;
}

.chat-header button {
    height: 40px;
    width: 40px;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 50%;
    background: var(--maincolor);
    transition: 0.3s;
    cursor: pointer;
}

.chat-header button:hover {
    background-color: var(--messenger-sender);
}



.chat-body {
    padding: 15px 11px;
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    overflow-y: auto;
    height: 385px;
}

.chat-body .bot-message svg{
    height: 30px;
    width: 30px;
    flex-shrink: 0;
    fill: #fff; 
    background-color: var(--maincolor);
    border-radius: 50%;
    padding: 6px;
    align-self: flex-end;
}

.chat-body .message .messate-text{
    padding: 12px 16px;
    word-wrap: break-word;
    white-space: pre-line;
    line-height: 1.5rem;
}

.chat-body .bot-message .messate-text {
    background: var(--lightgray);
    border-radius: 13px 13px 13px 0px;
}

.chat-body .bot-message {
    display: flex;
    align-items: center;
    gap: 11px
}

.chat-body .user-message .messate-text {
    background: var(--messenger-sender);
    border-radius: 13px 13px 0px 13px;
    color: #fff;
}

.chat-body .user-message {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.chat-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 15px 22px 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0.5s;
   /* Include padding and border in width */
}

.chat-footer.active{
    opacity: 1;
    visibility: visible;
}

.chat-footer .chat-form {
    display: flex;
    align-items: center;
    background-color: #fff;
    outline: 1px solid #cccce5;
    border-radius: 32px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.06)
}

.chat-form .chat-input {
    border:none;
    outline: none;
    height: 2.5rem;
    padding: 0 1rem;
    width: 100%;
    font-size:1rem;
}

.chat-form button {
    cursor: pointer;
    color:#fff;
    display: none;
    height: 2.5rem;
    width: 2.5rem;
    border: none;
    outline: none;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--maincolor);
}

.chat-form button:hover {
    background: var(--messenger-sender);
}

.chat-form:focus-within {
   outline: 1px solid var(--maincolor);
}

.chat-form .chat-input:valid~button{
    display: block;
}

.floating-icon-container{
    opacity: 0;
    visibility: hidden;
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    border-radius: 50%;
    background: var(--messenger-sender);
    padding: 10px;
}

.floating-icon-container span {
    
    border-radius: 5px;
    color: #fff;
    margin:10px;
}

.floating-icon-container.show {
    opacity:1;
    visibility: visible;
}

.panel{
    display: flex;
    flex-direction: column;
    height: 460px;
    position: relative;
}

.panel .panel-item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0.5s;
}

.panel-item.active{
    display:block;
    opacity: 1;
    visibility: visible;
}

.intro-page {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap:10px;
    height: 100%;
    justify-content: center;
    justify-self: center;
    margin-bottom: 80px;
}

.intro-page .start-chat {
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 15px 35px;
    margin-top: 20px;
    border: none;
    outline: none;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--maincolor);
}

.start-chat:hover {
    background: var(--messenger-sender);
}

.intro-page h2{
    font-weight: 600;
}

.intro-page p {
    font-size: 1rem;
    font-weight: 300;
}
        `]
    }

}

window.customElements.define('chat-app', chatApp)
