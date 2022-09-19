import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

// [State] -transition- [state]
export const toggleFade = trigger('fade', [
  state('login', style({ opacity : 1, backgroundColor : '#e91e63' })),
  transition('login <=> logout', animate(1000)),
  // transition('login => logout', 'logout => login' , animate(1000)), // or
  state('logout', style({ opacity : 0})),
  // state('*', style({ opacity : 0})),  // default state
  // //
  // // void
  // state('void', style({ opacity : 0 , transform : 'translateX(2rem)'})),
  // // transition('void <=> *', animate('2s 1s')), // timing delay
  // transition(':enter,:leave', animate('500ms')), // or
  // // 
  transition(':enter',[
    style({ opacity : 0, transform : 'translateX(50px)'}),
    animate('500ms', style({ opacity : 1, transform : 'translateX(0)'}))
  ]),
  transition(':leave',[
    style({ opacity : 1}), // not mandatory .. as it is in (1)
    animate('2s', 
    // keyframes([
    //   style({backgroundColor : 'green', offset : 0.5}),
    //   style({backgroundColor : 'yellow', offset : 0.8}),
    //   style({backgroundColor : 'orange', offset : 1}),
    //   style({ opacity : 0, transform : 'translateY(50px)'})
    // ])
    )
  ]),
])