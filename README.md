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
---
>Working with forms in **vueJs**

- use directives for forms 
- Directives are instruction for VueJS to do things in a certain way
- such as v-if, v-show, v-else, v-for, v-bind , v-model ..

**v-for** with an object

You can also use **v-for** to iterate through the properties of an object
```js
data() {
  return {
    myObject: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
}

```
```js
<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>

```
PREVIEW :
- 0. title: How to do lists in Vue
- 1. author: Jane Doe
- 2. publishedAt: 2016-04-10

Vue **v-model** is a directive that creates a two-way data binding between a value in our template and a value in our data properties

````js
<template>
  <div>
    <input type="text" v-model="value" />
    <p>Value: {{ value }}</p>
  </div>
</template>

<script setup>
export default{
  data(){
    return{
      value:"",
    }
  }
}


</script>

````
When we type in our text input, we’ll see that our data property is changing.