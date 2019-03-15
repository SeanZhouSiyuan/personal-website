let ScrollToggler = function(overlay) {
    this.bodyScrollY = 0;
    this.overlayScrollY = 0;
    this.scrollable = true;
    this.background = (function() {
        let el = document.getElementById('background');
        if (el) {
            return el;
        } else {
            throw new Error('Couldn\'t find background element.');
        }
    })();
    this.overlay = (function() {
        if (overlay) {
            return overlay;
        } else {
            throw new Error('Invalid overlay element.');
        }
    })();
}

ScrollToggler.prototype.disableScroll = function() {
    if (this.scrollable === false) {
        return;
    }
    // reset overlay position
    this.overlay.style.top = null;

    // save current scroll position
    this.bodyScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // set body styles
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'scroll';
    
    // set background styles
    this.background.style.position = 'fixed';
    this.background.style.width = '100%';
    this.background.style.top = `-${this.bodyScrollY}px`;

    // scroll to top of the overlay
    window.scrollTo(0, 0);

    this.scrollable = false;
}
ScrollToggler.prototype.enableScroll = function() {
    if (this.scrollable === true) {
        return;
    }
    // save overlay scroll position
    this.overlayScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // reset box styles
    this.background.style.position = null;
    this.background.style.width = null;
    this.background.style.top = null;

    // restore scroll position
    window.scrollTo(0, this.bodyScrollY);
    this.overlay.style.top = `${this.bodyScrollY - this.overlayScrollY}px`;

    // reset body styles
    document.body.style.overflowX = null;
    document.body.style.overflowY = null;
    
    this.scrollable = true;
}

export default ScrollToggler;