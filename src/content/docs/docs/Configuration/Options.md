---
title: Options
description: You can customize certain aspects of the backroad application by changing the options you pass to the run function.
sidebar:
  order: 2
---

You can customize certain aspects of the backroad application by changing the options you pass to the run function.

```js
import { run } from "@backroad/backroad";
run(
  (br) => {
    br.write({ body: "Do your usual backroad stuff here" });
  },
  {
    port: 3000,
  }
);
```

## Description

1. **port:** Use this option to customise the port number on which the backroad server runs.
