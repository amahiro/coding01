class Hamburger {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.hamburger');
        // this.DOM.btn_push_wrapper = document.querySelector('.btn-push-wrapper');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.btn.classList.toggle('hamburger-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }
}
