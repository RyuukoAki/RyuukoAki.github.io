# Astro Portfolio site

Welcome to my lovely portfolio, built with Astro, TailwindCSS, and a dash of Preact. Hopefully I remember to update literally anything in this readme at some point, but for now, here are some notes on the project, and what future me might need to remember about it.

-- For the project pages, at the bottom should add a project bento that only pulls projects with overlaping tags, titled related projects. don't know exactly how I'd do that quite yet but thats what docs are for.

## 🧞 Commands

All commands are run from the root of the project, from a terminal: (for my own reference)

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Markdown syntax

**Bold text**
*Italicized text*
***Bold & Italicized***
> Block Quote

> Multi line
>
>> Nested
> Block Quote

1. Ordered 
    1. Indented
    2. Ordered 
    3. List
2. List

- Unordered
    - Indented
    - Unordered
    - List
- List
- 420\. unordered list starting w number

`code`
`` escaping `backticks` in md``

Code needs to be indented by at least one tab or four spaces

    <html>
      <head>
      </head>
    </html>

horizontal rules

***

---

[links](https://www.markdownguide.org/basic-syntax/ "A title for the link can go here")

![Images](https://astro.build/assets/press/astro-logo-light-gradient.svg)

[![Image Links](https://astro.build/assets/press/astro-logo-light-gradient.svg)](https://astro.build/press/#assets)

\* escape characters like an astric by leading with a backslash
