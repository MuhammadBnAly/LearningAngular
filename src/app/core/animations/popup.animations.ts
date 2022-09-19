import { transition, trigger, style, animate, query, animateChild } from '@angular/animations';

export const popup=[
  // popup parent
  trigger('popupParent', [
    transition(':enter',[
      style({ opacity : 0}),
      animate('500ms', style({ opacity : 1})),
      query('@popupChild', [animateChild()])
    ]),
    transition(':leave',[
      animate('500ms', style({ opacity : 0})),
      query('@popupChild', [animateChild()])
    ])
  ]),
  // popup child
  trigger('popupChild', [
    transition(':enter',[
      style({ opacity : 0, transform : 'translateX(50px)' }),
      animate('500ms', style({ opacity : 1 , transform : 'translateX(0px)' }))
    ]),
    transition(':leave',[
      animate('1000ms', style({ opacity : 0, transform : 'translateY(50px)' }))
    ])
  ])
]