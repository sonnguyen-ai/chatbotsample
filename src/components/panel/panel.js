
import { LitElement, css, html } from 'lit'
import { getShadowRoot } from '../../shared/ulti';
import { pubSub } from '../../shared/state-management';

export class Panel extends LitElement {

    _updateStateItemsHandler(name, active) {
        const root = getShadowRoot();
        const panel = root.querySelector('.panel');
        const items = panel.querySelector('slot')?.assignedElements();
        items.find(item => item.name === name).active = active;
    }

    createRenderRoot() {
        return this
    }

    constructor() {
        super();
        pubSub.subscribe('close-intro-show-bodychat', this._onFlowOpenChatBody, this)
    }

    render() {
        return html`
            <div class="panel">
            </div>
        `
    }

    _onFlowOpenChatBody() {
        const [bodyPanel, bodyIntro] = [this.querySelector('chat-panel-item[name="chatbody"]'), this.querySelector('chat-panel-item[name="intropage"')];
        bodyPanel.active = true;
        bodyIntro.active = false;

        pubSub.publish('show-footer', true)
    }

    updated() {
        const root = getShadowRoot();
        const panel = root.querySelector('.panel');
        const slotItems = root.querySelectorAll('chat-panel-item');
        slotItems.forEach((item, i) => {
            item.setAttribute('key', i)
            panel.appendChild(item);
        })
    }
}

window.customElements.define('chat-panel', Panel)