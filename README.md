react-immutable
===============

Demo using ES5 [React](https://facebook.github.io/react/index.html) + [Immutable.js](https://facebook.github.io/immutable-js/) which demonstrates using an [Immutable List](https://facebook.github.io/immutable-js/docs/#/List) to get performance boost in the ```shouldComponentUpdate``` method of child components by comparing Immutable data structures.

The component layout is very simple:

```js
<ListContainer>
  <List items={ items } />
</ListContainer>
```

```ListContainer``` has one piece of state which is an Immutable List of items.

In the ```componentDidMount``` method of ```ListContainer``` I setup a 20 second interval and on each 500ms it will either update the state items List with a new value or force a re-render of the ```ContainerList``` which will pass down the same Immutable Data Structure.

This way, in the ```shouldComponentUpdate``` method of ```List```, it will sometimes evaluate to ```true``` that it should update if the ```items``` are different, or ```false``` if the items are the same. This comparison of ```Immutable``` data structures is very efficient.

# Run Locally

```bash
python -m SimpleHTTPServer <port>
```

or using [serve](https://www.npmjs.com/package/serve)

```bash
serve
```