let animator = {
    /**
     * 
     * @param {String} className
     */
    setupSelf(className) {
        let animatableItems = Array.from(document.getElementsByClassName(className));
        animatableItems.forEach(item => {
            window.addEventListener('load', () => {
                if (isElementInViewport(item) === true) {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 300);
                }
            });
            window.addEventListener('scroll', () => {
                if (isElementInViewport(item) === true) {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 300);
                }
            });
        });
    },
    /**
     * 
     * @param {String} className 
     */
    setupChildren(className) {
        let animatableContainers = Array.from(document.getElementsByClassName(className));
        animatableContainers.forEach(container => {
            let children = Array.from(container.children);
            window.addEventListener('load', () => {
                if (isElementInViewport(container) === true) {
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, (index + 1) * 300);
                    });
                }
            });
            window.addEventListener('scroll', () => {
                if (isElementInViewport(container) === true) {
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, (index + 1) * 300);
                    });
                }
            });
        })
    }
}

function isElementInViewport(el) {
    // reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const rect = el.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // const verInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    // const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    const verInView = (rect.top + 64) <= windowHeight;
    const horInView = rect.left <= windowWidth;

    return (verInView && horInView);
}

export default animator;