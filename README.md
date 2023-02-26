# webpack_boilerplate

---

```
npm i
npm run serve
```
___


Template Refs in **vue**

**ref** is a special attribute, similar to the **key** attribute discussed in the **v-for** chapter. 

It allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted.

 This may be useful when you want to, for example, programmatically focus an input on component mount, or initialize a 3rd party library on an element

  -we can use the special ref attribute:
  ```js
  <input ref="input">
  ```
  example : 
  ```js
   <script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input" />
</template>


  ```

[for more example ...](https://vuejs.org/guide/essentials/template-refs.html)