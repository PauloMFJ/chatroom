import {
  animate,
  style,
  transition,
  trigger,
  state
} from "@angular/animations";

export const fadeInOutAnimation = trigger("fadeInOut", [
  state("false", style({ opacity: 0 })),
  state("true", style({ opacity: 1 })),
  transition("false <=> true", animate(400)),

  transition(":enter", [
    style({ opacity: 0 }),
    animate(400, style({ opacity: 1 }))
  ]),

  transition(":leave", [animate(400, style({ opacity: 0 }))])
]);
