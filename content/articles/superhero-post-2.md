---
title: Superhero Family II
categories:
  - label: Marvel Universe
    name: marvel
    list: []
  - label: DC Comics
    name: dc-comics
    list: []
  - label: The Incredibles
    name: incredibles
    list: []
items:
  - name: Superman
    category: dc-comics
  - name: The Hulk
    category: marvel
  - name: Elastigirl
    category: incredibles
  - name: Green Lantern
    category: dc-comics
  - name: Iron Man
    category: marvel
  - name: The Flash
    category: dc-comics
  - name: Dash
    category: incredibles
---

Drag and sort each superheroes into their respective family.

<gsap-sortable :categories="categories" :items="items"></gsap-sortable>

`<gsap-sortable>` component embedded into Markdown:

```md
<gsap-sortable :categories="categories" :items="items"></gsap-sortable>
```

...where `props` are passed from frontmatter `yaml` like below.

```
---
title: Superhero Family II
categories:
  - label: Marvel Universe
    name: marvel
    list: []
  - label: DC Comics
    name: dc-comics
    list: []
  - label: The Incredibles
    name: incredibles
    list: []
items:
  - name: Superman
    category: dc-comics
  - name: The Hulk
    category: marvel
  - name: Elastigirl
    category: incredibles
  - name: Green Lantern
    category: dc-comics
  - name: Iron Man
    category: marvel
  - name: The Flash
    category: dc-comics
  - name: Dash
    category: incredibles
---
```
