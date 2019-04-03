let ScrollToggler = function() {
    this.bodyScrollY = 0;
    this.overlayScrollY = 0;
    this.scrollable = true;
    this.background = (function() {
        let background = document.getElementById('background');
        if (!background) {
            throw new Error('Couldn\'t find background element.');
        }
        return background;
    })();
}

ScrollToggler.prototype.disableScroll = function() {
    if (this.scrollable === false) {
        return;
    }

    // get window scroll position
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

    // reset background styles
    this.background.style.position = 'static';
    this.background.style.width = '100%';
    this.background.style.top = null;

    // restore scroll position
    window.scrollTo(0, this.bodyScrollY);

    // reset body styles
    document.body.style.overflowX = 'visible';
    document.body.style.overflowY = 'visible';
    
    this.scrollable = true;
}

export default ScrollToggler;