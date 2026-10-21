import {NgModule, ModuleWithProviders} from '@angular/core';
import {CardDraw} from './card.component';

@NgModule({
  imports: [CardDraw],
  exports: [CardDraw]
})
export class CardModule {
  static forRoot(): ModuleWithProviders<CardModule> {
    return {
      ngModule: CardModule
    };
  }
}
