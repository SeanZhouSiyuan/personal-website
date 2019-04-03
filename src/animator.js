/**
 * 
 * @param {Array} animatableItems 
 * @param {Array} animatableContainers 
 */
let Animator = function (animatableItems = [], animatableContainers = []) {
    this.animatableItems = 
        Array.from(animatableItems)
        .map(item => {
            return {
                el: item,
                visible: false
            }
        });
    this.animatableContainers = 
        Array.from(animatableContainers)
        .map(container => {
            return {
                el: container,
                visible: false
            }
        });
}
Animator.prototype.setup = function() {
    setupContainers(this.animatableContainers);
    setupItems(this.animatableItems);
    window.addEventListener('scroll', () => {
        setupContainers(this.animatableContainers);
        setupItems(this.animatableItems);
    });
}
Animator.prototype.remove = function() {
    window.removeEventListener('scroll', () => {
        setupContainers(this.animatableContainers);
        setupItems(this.animatableItems);
    });
}
function setupContainers(animatableContainers) {
    animatableContainers.forEach(container => {
        if (container.visible === false) {
            if (isElementInViewport(container.el, 32) === true) {
                Array.from(container.el.children)
                .forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, (index + 1) * 300);
                });
                container.visible = true;
            }
        }
    });
}
function setupItems(animatableItems) {
    animatableItems.forEach(item => {
        if (item.visible === false) {
            if (isElementInViewport(item.el, 128) === true) {
                setTimeout(() => {
                    item.el.classList.add('visible');
                    item.visible = true;
                }, 300);
            }
        }
    });
}
function isElementInViewport(el, offset = 0) {
    // reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const rect = el.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // const verInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    // const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    const verInView = (rect.top + offset) <= windowHeight;
    const horInView = rect.left <= windowWidth;

    return (verInView && horInView);
}

export default Animator;