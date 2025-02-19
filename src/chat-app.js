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
import cssString from './chat-app.css?raw'
import { unsafeCSS } from 'lit';

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

        console.log(cssString);
        

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
            ${unsafeCSS(cssString)}
        `]
    }
}

window.customElements.define('chat-app', chatApp)
