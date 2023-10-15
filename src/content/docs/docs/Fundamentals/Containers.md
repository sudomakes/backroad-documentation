---
title: Containers
description: A reference page about using containers in your backroad application
sidebar:
  order: 2
---

Containers act as parent elements in a backroad app. Some examples of these are:

- **Page Container:** Adds a container which equates to a page on the backroad app, any elements or containers added to this container will only show when the user navigates to its associated path in the browser.

- **Sidebar Container:** A container which appears on the left side of a page, which usually contains information like navigation links.

While you will find most of the containers listed in the layouts section of the docs, but there are other types of use-case specific containers as well like `chatMessage` which are relevant for LLM apps.

Here is what the interface for a container looks like:

```ts
interface BackroadContainer<
  Type extends InbuiltContainerTypes,
  ChildrenValuePopulated extends boolean = false
> {
  children: BackroadNode<false, ChildrenValuePopulated>[];
  args: Type extends InbuiltContainerTypes
    ? ContainerArgsMapping[Type]["args"]
    : object;
  type: Type;
  path: string;
}
```
