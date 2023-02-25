# webpack_boilerplate

---

```
npm i
npm run serve
```
___
Handling Events and Methods in **VueJS**

-if your Vuejs website has clickable buttons, forms, etc., 

you would surely want that if a user clicks a button, submits a form, or even moves their mouse Vue.js website would respond somehow.

As a simple example, we can implement a counter that increments every time a user clicks a button
```js
data() {
  return {
    count: 0
  }
}
```
In the view, we can define the method to run when a button is clicked ...
```js
<label>Count is: {{count}}</label>
<button v-on:click="count++">Increment</button>
```

The most common events that are generally used to be handled :
- keyup
- submit 
- drag
- scroll
- mouseover
___
on this [**page**](src/App.vue) are two simple examples of using events and in vuejs
