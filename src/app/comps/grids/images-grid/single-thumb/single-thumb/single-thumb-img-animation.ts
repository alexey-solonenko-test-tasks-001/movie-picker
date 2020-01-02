import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state
  } from '@angular/animations';
  
  export const zoomInAnimation = animation([
    state('hidden',style({
        width: '20px',
        height: '10px',
        marginLeft: 'auto',
        marginRight:'auto',
    })),
    state('shown',style({
        width: '100%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight:'auto',
    })),
    transition('hidden <=> shown',[
        animate('2.75s'),
    ])
  ]);