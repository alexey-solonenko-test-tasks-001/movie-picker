# MoviePicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

**Table of Contents**

**[App Usage](#app-usage)**

[Deployed App](#deployed-app)

[Local Prod](#local-prod)

[Build & Deploy](#build-&-deploy)

[Development Server](#development-server)

**[Fulfilment report](#fulfilment-report)**

[Starter pack](#starter-pack)

[Mocksk and Asssets](#mocks-and-assets)

[Features](#features)

[Angular Features](#angular-features)


---

## APP USAGE

### Deployed App

Deployed on <a href="https://asolonenko-movie-picker.herokuapp.com/" target="_blank">`heroku`</a>

### Local Prod

[`node serve`](https://www.npmjs.com/package/serve) is already installed as `movie-picker` package dependency 

`cd` to a cloned repo

Run `serve -s dist/movie-picker`. _Node serve_ will launch an app and suggest you a link to open in your browser.
### Build & Deploy
Run `ng build` to build the project. The build artifacts will be stored in the `dist/movie-picker` directory. Use the `--prod` flag for a production build.

Run `git push heroku master` to deploy to `heroku` server.

In case of typescript errors, use:
```typescript
// @ts-ignore: Unreachable code error
```
Before each error-line.

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


---

## FULFILMENT REPORT
[Starter pack](#starter-pack)

[Mocksk and Asssets](#mocks-and-assets)

[Features](#features)

[Angular Features](#angular-features)

---
### Starter pack
- have never built an `Angular` app, only used simple template directive `*ngIf` / `*ngFor` to promote API-to-front-end wiring-up.
- started with `ng new`
- never used TypeScript to build an app (used Java background).
- work is based on https://angular.io/guide and SO.

### Mocks and Assets

- [Angular In-Memory-Web-Api](https://angular.io/guide/http)
- any free images hosting

### Features

- Movies List
   - List movies. **Done**, images lazy load, ordered alphabetically.
   - Search. **Done**. Fancy demo search. If search by genre + search by name are both not empty, then they both apply to the movies list. However, genres filter takes no effect on a dropdown search by name input.
- Movie detail
   - Movie detail page. **Done**.
   - Browser navigation. **Done**.
- Angular router support. **Done**.
- Sass/scss. **Done**. Few example of scss usage: nesting, placeholders, mixins, etc.
- Filter by Genre. **Done**. Multiple genres supported.
- Responsive designe. **Done**. Basic implementation of a bootstrap-like grid. Like `col-sm-12 col-md-6`, etc. Did not use 3d party lib on purpose, to demonstrate `scss`.
- Animations. **Provided**
- **Not implemented**:
   - Unit tests.
   - Redux (however, I used it with react for a universal app).
   - Polished design.

### Angular Features

#### Intent

I tried to fit the app architecture with the real needs of a multi-brand/multi-owner live interactive end-customer facing platform.

#### Reusability

Movies list is being built by a generic images-grid component. Images-grid is fit for reuse with any other list: virtual games list, live games list, music list, etc.

Images-grid and its children interact with higher components via interfaces.

**Example**. Single [image thumb](https://github.com/AlexeySolonenko/movie-picker/blob/e3040176e811b97588162f3a48f1252014cbce07/src/app/comps/grids/images-grid/single-thumb/single-thumb/single-thumb.component.ts#L48) builds a basic thumbnail, and uses [Dynamic Component Loading](https://angular.io/guide/dynamic-component-loader) to accommodate any customized footer (movie footer, game footer) to the thumbnail.

#### Data Flow

Shared data and state is being mostly passed via services, unique IDs and params are component-bound, as suggested [here](https://angular.io/guide/component-interaction). This is potential `todo` for **Redux**.

As singletons, services attempt to be scalable in respect of the components they cater for.

As much as I managed, data and blobs flow is async. Prolonged delays are intentional to demonstrate the asynchronicity.

Routing and navigation paths are supposed to be initialized by SSR, thus they are hard-coded. 

