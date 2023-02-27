# webpack_boilerplate

---

```
npm i
npm run serve
```
___

>Styling Options in VueJS

Some of them include :
 - Global stylesheets
 - Global Component styles
 - scoped component styles
  ___
  When a **style** tag has the scoped attribute, its CSS will apply to elements of the current component only.
```js
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```
___
The **module** attribute instructs Vue Loader to inject the CSS modules locals object into the component as a computed property with the name **$style**
```js
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>
```
Then, add the **module** attribute to your style :
```js
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```