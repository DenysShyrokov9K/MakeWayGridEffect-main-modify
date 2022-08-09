import { preloadImages } from './utils';
import { SpreadGrid } from './spreadGrid';
import { Panel } from './panel';
import Cursor from './cursor';

const panels = [...document.querySelectorAll('.panel')];

// Preload images
preloadImages('.grid__item-img').then( ()=> {
    // remove loader (loading class) 
    document.body.classList.remove('loading');
    panels.forEach(panel => new Panel(panel));
    [...document.querySelectorAll('.grid')].forEach(grid => new SpreadGrid(grid));
     // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));
    console.log(cursor);
     // mouse effects on all links and others
    [...document.querySelectorAll('a, .panel__item-imgwrap, button')].forEach(link => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });
});

