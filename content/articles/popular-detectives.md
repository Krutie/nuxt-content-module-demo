---
title: Popular Detectives
categories:
  - label: NCIS
    name: ncis
    list: []
  - label: Lucifer
    name: lucifer
    list: []
  - label: Law & Order SVU
    name: law-n-order
    list: []
  - label: True Detective
    name: true-detective
    list: []
items:
  - name: Rust Cohle
    category: true-detective
  - name: Marty Hart
    category: true-detective
  - name: Olivia Benson
    category: law-n-order
  - name: Chloe Decker
    category: lucifer
  - name: Tony Dinozzo
    category: ncis
  - name: Ziva David
    category: ncis
---

Drag and sort each detectives into their respective TV shows.

<gsap-sortable :categories="categories" :items="items"></gsap-sortable>

`<gsap-sortable>` component embedded into Markdown:

```md
<gsap-sortable :categories="categories" :items="items"></gsap-sortable>
```

...where `props` are passed from frontmatter `yaml` like below.

```
---
title: Popular Detectives
categories:
  - label: NCIS
    name: ncis
    list: []
  - label: Lucifer
    name: lucifer
    list: []
  - label: Law & Order SVU
    name: law-n-order
    list: []
  - label: True Detective
    name: true-detective
    list: []
items:
  - name: Rust Cohle
    category: true-detective
  - name: Marty Hart
    category: true-detective
  - name: Olivia Benson
    category: law-n-order
  - name: Chloe Decker
    category: lucifer
  - name: Tony Dinozzo
    category: ncis
  - name: Ziva David
    category: ncis
---
```
