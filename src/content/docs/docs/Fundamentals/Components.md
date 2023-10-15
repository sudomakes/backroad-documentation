---
title: Components
description: A reference page about using components in your backroad application
sidebar:
  order: 2
---

Component are leaf-level elements, which may or may not have a `value` associated with them. This `value` can be manipulated by user on the frontend and is passed back to the backroad script to further decide the control flow of the program. Every time a value is changed, a re-run of the script is generally executed with the new values, causing the frontend to be re-rendered in turn with any changes.

Components cannot have any further level of nesting inside them, and mark the end of the backroad app tree structure. Each Component is a child of some backroad `container`.

Some examples of in-built backroad components are `numberInput`,`textInput`,`json`,`fileUpload`, etc. While components like `numberInput` have a useful associated `value` to them, components like `json` do not and are used purely for presentational purposes on the frontend.

The interface for a backroad component is as follows:

```ts
export type BackroadComponent<
  Type extends InbuiltComponentTypes,
  ValuePopulated extends boolean = false
> = {
  args: ComponentPropsMapping[Type]["args"];
  type: Type;
  path: string;
  id: string;
} & (ValuePopulated extends true
  ? {
      value: ComponentPropsMapping[Type]["value"];
    }
  : {});
```
