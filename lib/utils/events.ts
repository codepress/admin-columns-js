export const addEventListenerLive = (eventType: string, elementQuerySelector: string, cb: Function, rootElement: HTMLElement | Document = null) => {
    if (rootElement === null) {
        rootElement = document;
    }

    rootElement.addEventListener(eventType, (event: Event) => {
        let qs = document.querySelectorAll(elementQuerySelector);

        if (qs) {
            let target = (<Element>event.target);
            let index = -1;


            while (target && ((index = Array.prototype.indexOf.call(qs, target)) === -1)) {
                target = target.parentElement;
            }

            if (index > -1) {
                cb.call(target, event);
            }
        }
    });
}

export const onHover = (el: HTMLElement, cbOver: EventListener, cbLeave: EventListener) => {
    el.addEventListener('mouseenter', cbOver);
    el.addEventListener('mouseleave', cbLeave);
}

export const addEventListeners = (el: HTMLElement, events: Array<string>, callback: EventListener) => {
    events.forEach(event => el.addEventListener(event, callback));
}