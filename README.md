# webpack_boilerplate

---

```
npm i
npm run serve
```

### data , props , slots **vuejs**

*data return*

```
export default{
     data() { 
        return {  title: }

            }  
            }
```
**data** is private memory of each components where you can store any variable you need


___

*props*
```
export default{
    props:["title","description"]
}
```
**props** are how you pass this data from a parent component down to to a child component 

>[example](src/views/CardMyPage.vue)
___
*slots*
```
<p>Header</p>
<slot></slot>
<p>Footer</p>
``` 
using vue slots , yuu can pass or distribute HTML code across various component in your project

>[example](src/views/NewPage.vue)

