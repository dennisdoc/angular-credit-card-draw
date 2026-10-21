# angular-credit-card-draw

A customizable, animated credit card preview component for Angular.

## Angular version and upgrade notes

This release uses Angular 21 and is distributed as a compiled Angular library.
It requires Angular `^21.0.0` (`@angular/core` and `@angular/common`) and RxJS
`^7.4.0`. Use a Node.js version supported by Angular 21 when developing or
building the library.

The Angular 2-era Gulp, Typings, and TSLint build has been replaced with
`ng-packagr` and the Angular Package Format. The `CardDraw` selector and its
existing input names are retained. `CardDraw` is now standalone and can be
imported directly; `CardModule` is still exported for applications that use
NgModules.

Install the package in an Angular 21 application:

```bash
npm install angular2-credit-card-draw
```

## Features

- Renders the front and back of a credit card, including cardholder name,
  number, expiry date, and security code.
- Flips between sides on hover or when controlled with the `toggle` input.
- Accepts card face dimensions and a custom CSS background.
- Provides a standalone component and an NgModule-compatible wrapper.
- Includes Storybook stories with interactive controls for local development.

This component only displays the values supplied to it; it does not validate,
store, or process payment details.

## Component inputs

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `''` | Cardholder name shown on the front. |
| `number` | `string` | `''` | Card number shown on the front. |
| `expiration` | `string` | `''` | Expiration text shown on the front, for example `12/29`. |
| `ccv` | `string` | `''` | Security code shown on the back. |
| `background` | `string` | `''` | CSS background value for both card faces. When empty, the built-in gradient is used. |
| `width` | `string` | `''` | CSS width for the card faces, for example `400px`. |
| `height` | `string` | `''` | CSS height for the card faces, for example `250px`. |
| `toggle` | `boolean` | `false` | Set to `true` to show the back; the card also flips when hovered. |

## Standalone component usage

Import `CardDraw` into a standalone component's `imports`:

```typescript
import {Component} from '@angular/core';
import {CardDraw} from 'angular2-credit-card-draw';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardDraw],
  template: `
    <card-draw
      [width]="'400px'"
      [height]="'250px'"
      [background]="'#1a1f71'"
      [name]="cardholder"
      [number]="cardNumber"
      [expiration]="expiration"
      [ccv]="securityCode"
      [toggle]="showBack">
    </card-draw>
  `
})
export class AppComponent {
  cardholder = 'Emma Watson';
  cardNumber = '1234 1234 1234 1234';
  expiration = '12/29';
  securityCode = '999';
  showBack = false;
}
```

Set `showBack` to `true` to display the back of the card. Hovering the card
also flips it.

## NgModule usage

For an NgModule-based application, import `CardModule` in the module that uses
the `<card-draw>` element:

```typescript
import {NgModule} from '@angular/core';
import {CardModule} from 'angular2-credit-card-draw';

@NgModule({
  imports: [CardModule]
})
export class AppModule {}
```

## Development and Storybook

Install the development dependencies and start Storybook:

```bash
npm install
npm run storybook
```

Open `http://localhost:6006` to preview the **Front** and **Back** stories.
Use the Controls panel to edit the component inputs. Build a static Storybook
site with:

```bash
npm run build-storybook
```

Build the distributable Angular package with:

```bash
npm run build
```

The package output is written to `dist/angular2-credit-card-draw`.

## Live demo

https://plnkr.co/edit/8kiEx9ZXOZsDJB2CAtcp?p=preview

## License

MIT © [Dennis Oliveira Cremasco](dennisdoc@hotmail.com)
