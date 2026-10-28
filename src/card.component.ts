import {Component, Input} from '@angular/core';

@Component({
	selector: 'card-draw',
	templateUrl: './card.html',
	standalone: true
})
export class CardDraw {
	@Input() number = '';
	@Input() name = '';
	@Input() expiration = '';
	@Input() ccv = '';
	@Input() background = '';
	@Input() height = '';
	@Input() width = '';
	@Input() toggle = false;
	@Input() hideBrandLogo = false;
}