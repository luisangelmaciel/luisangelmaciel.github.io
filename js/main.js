window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('https://www.luisangelmaciel.one/sw.js');
    }
}