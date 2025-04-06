---
title: Render Paths
description: Some insights into how backroad decides which components to re-render and where to place which component/container
sidebar:
  order: 1
---

Backroad uses a custom format for computing paths, which are identifiers to decide where exactly to render a component or container in the DOM tree. You generally don't have to think too much about it, since its all internally managed.

Here is what the default backroad tree looks like:

```js
const structure = {
  children: [
    {
      type: 'page' as const,
      args: {
        path: '/',
      },
      children: [],
      path: 'children.0',
    },
  ],
  path: '',
  type: 'base' as const,
  args: {},
};
```

Now every time you do a call to render some component/container, objects are inserted in this structure at very specific places (conveyed using the aforementioned `path`) and then the tree is re-rendered. So if a numberInput call is done on the `br` object provided in the callback by run function, it will insert an object with the value of `type` key being `number_input`, and its `path` key being `children.0.children.0`
