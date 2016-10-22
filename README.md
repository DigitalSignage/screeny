# Groceries [![Build Status](https://travis-ci.org/NativeScript/sample-Groceries.svg?branch=master)](https://travis-ci.org/NativeScript/sample-Groceries) [![dependency status](https://david-dm.org/nativescript/sample-Groceries.svg)](https://david-dm.org/nativescript/sample-Groceries) [![devDependency Status](https://david-dm.org/nativescript/sample-Groceries/dev-status.svg)](https://david-dm.org/nativescript/sample-Groceries#info=devDependencies)

Groceries is a NativeScript-built iOS and Android app for managing grocery lists. You can learn how to build a version of this app from scratch using either our [JavaScript getting started guide](http://docs.nativescript.org/tutorial/chapter-0), or our [TypeScript and Angular 2 getting started guide](http://docs.nativescript.org/angular/tutorial/ng-chapter-0).

<!-- * [Download](#download) -->

* [Branches](#branches)
* [Screenshots](#screenshots)
* [Development](#development)
    * [Linting](#linting)
    * [Unit testing](#unit-testing)
    * [Travis CI](#travis)
    * [Telerik Platform](#telerik-platform)
* [Contributors](#contributors)

<!--
Commenting this out for now because until Groceries 3.0 drops (see https://github.com/NativeScript/sample-Groceries/issues/78), the version of the app in the stores and this repo don’t match up. Commenting this out == confusion-- (hopefully).

<h2 id="download">Download</h2>

The latest version of Groceries is available on the iOS App Store as well as Google Play:

<a href="https://itunes.apple.com/us/app/groceries-simple-grocery-lists/id1041129105?mt=8">
  <img src="assets/app-store-icons/ios-app-store.png">
</a>
<a href="https://play.google.com/store/apps/details?id=org.nativescript.groceries&hl=en">
  <img src="assets/app-store-icons/google-play.png">
</a>
-->

<h2 id="branches">Branches</h2>

This repository contains a number of branches:

* The [**master** branch](https://github.com/NativeScript/sample-Groceries/) shows how to build a robust, real-world app using NativeScript. The branch is built with TypeScript and Angular 2.

---

* The [**angular-start** branch](https://github.com/NativeScript/sample-Groceries/tree/angular-start) contains the starting point for the [NativeScript “TypeScript and Angular” getting started guide](http://docs.nativescript.org/angular/tutorial/ng-chapter-0).
* The [**angular-end** branch](https://github.com/NativeScript/sample-Groceries/tree/angular-end) contains the finished code for the TypeScript and Angular getting started guide.

---

* The [**start** branch](https://github.com/NativeScript/sample-Groceries/tree/start) contains the starting point for the [NativeScript “JavaScript” getting started guide](http://docs.nativescript.org/tutorial/chapter-0).
* The [**end** branch](https://github.com/NativeScript/sample-Groceries/tree/end) contains the finished code for the JavaScript getting started guide. Refer to it at any point while you’re completing the guide.

---

* The [**web** branch](https://github.com/NativeScript/sample-Groceries/tree/web) contains a web version of Groceries that shares code with the NativeScript-built native app. The app is built with the Angular 2 CLI.
* The [**gh-pages** branch](https://github.com/NativeScript/sample-Groceries/tree/gh-pages) contains the GitHub Pages hosted version of the web branch. You can view the web app live at <https://nativescript.github.io/sample-Groceries>.

<h2 id="screenshots">Screenshots</h2>

![](assets/screenshots/ios-1.png)
![](assets/screenshots/ios-2.png)
![](assets/screenshots/ios-3.png)

![](assets/screenshots/android-1.png)
![](assets/screenshots/android-2.png)
![](assets/screenshots/android-3.png)

<h2 id="development">Development</h2>

This app is built with the NativeScript CLI. Once you have the [CLI installed](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment), start by cloning the repo:

```
$ git clone https://github.com/NativeScript/sample-Groceries.git
$ cd sample-Groceries
```

Next, install the app's iOS and Android runtimes, as well as the app's npm dependencies:

```
$ tns install
```

From there you can use the `run` command to run Groceries on iOS:

```
$ tns run ios --emulator
```

And the same command to run Groceries on Android:

```
$ tns run android --emulator
```

Finally, use the `livesync` command to push out changes to your app without having to go through the full build cycle:

```
$ tns livesync ios --emulator --watch
```
```
$ tns livesync android --emulator --watch
```

<h3 id="linting">Linting</h3>

Groceries uses [tslint](https://www.npmjs.com/package/tslint) + [codelyzer](https://github.com/mgechev/codelyzer) rules to ensure the code follows the [angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

You can run the linter with the `tslint` npm script:
```
$ npm run tslint
```

<h3 id="unit-testing">Unit Testing</h3>

Groceries uses NativeScript’s [integrated unit test runner](http://docs.nativescript.org/core-concepts/testing) with [Jasmine](http://jasmine.github.io/). To run the tests for yourself use the `tns test` command:

```
$ tns test ios --emulator
```

```
$ tns test android --emulator
```

For more information on unit testing NativeScript apps, refer to the [NativeScript docs on the topic](http://docs.nativescript.org/core-concepts/testing).

<h3 id="travis">Travis CI</h3>

Groceries uses [Travis CI](https://travis-ci.org/) to verify all tests pass on each commit. Refer to the [`.travis.yml` configuration file](https://github.com/NativeScript/sample-Groceries/blob/master/.travis.yml) for details.

<h3 id="telerik-platform">Telerik Platform</h3>

If you’d like to try developing Groceries without going through the full setup, you may be interested in loading the app in the [Telerik Platform](http://www.telerik.com/platform):

* [Run Groceries in the Telerik Platform](https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FIcenium%2Fnativescript-sample-groceries)


updated: born2net