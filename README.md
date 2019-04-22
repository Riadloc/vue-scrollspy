## Description

A vue component for detecting enter/exit of elements in the viewport when the user scrolls.

Vue组件，用于当用户滚动内容时，检测节点进出视窗的情况，实现导航和节点内容的双向绑定

## Installation
```console
npm install vue-use-scrollspy --save
```
## Usage
```javascript
import Scrollspy from 'vue-use-scrollspy'
```

## Props

| prop      | description   | type  | default |required|
| ------------- |:-------------:|:-----:|:-------:|:-------:|
|items|id list of target elements|Array|[]|true|
|el|selector of elements container|String|window|false|
|current|current actived id, can use `.sync` modifier to two-way data bindings|String|--|false|
|activeClass|class name that apply to the element in viewport|String|--|false|
|offset|offset value that ajust to determine the elements are in the viewport|Number|--|false|
|tag|to specify which tag to render to|String|div|false|

## Events
| name      | description |params|
| -------|:--------:|:-------:|
| on-update |Emit when current is changed|current actived id|


## Example
```html
<div>
  <nav>
    <scroll-spy
      :items="['#selection-1', '#selection-2', '#selection-3']"
      class="scroll-spy"
      tag="ul"
      current-class="active-class">
      <li><a href="#selection-1">One</a></li>
      <li><a href="#selection-2">Two</a></li>
      <li><a href="#selection-3">Three</a></li>
    </scroll-spy>
  </nav>
  <article>
    <section id="selection-1">...</section>
    <section id="selection-2">...</section>
    <section id="selection-3">...</section>
  </article>
</div>
```

## License

[MIT](https://opensource.org/licenses/MIT)