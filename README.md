# Astro Portfolio site

Welcome to my lovely portfolio, built with Astro, TailwindCSS, and a dash of Preact. Hopefully I remember to updat literally anything in this readme at some point, but for now, here are some notes on the project, and what future me might need to remember about it.

-- For the project pages, at the bottom should add a project bento that only pulls projects with overlaping tags, titled related projects. don't know exactly how I'd do that quite yet but thats what docs are for.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🗂 Current File tree

📦src
┣ assets
┃ ┣ Iris.jpg
┃ ┗ Sable.jpg
┣ components
┃ ┣ bento
┃ ┃ ┣ ProjectListBento.astro
┃ ┃ ┗ ProjectPageImgBento.astro
┃ ┣ bg
┃ ┃ ┣ AbstractBG.astro
┃ ┃ ┣ AbstractBG2.astro
┃ ┃ ┣ AbstractBG3.astro
┃ ┃ ┣ AbstractBG4.astro
┃ ┃ ┣ AbstractBG5.astro
┃ ┃ ┣ AbstractBGCondensed.astro
┃ ┃ ┗ shapes.txt
┃ ┣ cards
┃ ┃ ┣ ProjectCardBase.astro
┃ ┃ ┣ ProjectCardPlaceholder.astro
┃ ┃ ┗ projectPageImageBentoCard.astro
┃ ┣ hero
┃ ┃ ┣ HeroCentered.astro
┃ ┃ ┣ HeroCenteredCondensed.astro
┃ ┃ ┣ HeroProjectImg.astro
┃ ┃ ┗ HeroSplit.astro
┃ ┣ navheader
┃ ┃ ┣ Header.astro
┃ ┃ ┗ HeaderLink.astro
┃ ┣ preact
┃ ┃ ┗ selectImgCard.jsx
┃ ┣ BaseHead.astro
┃ ┣ Footer.astro
┃ ┗ FormattedDate.astro
┣ layouts
┃ ┣ BaseLayout.astro
┃ ┗ ProjectPageLayout.astro
┣ pages
┃ ┣ projects
┃ ┃ ┗ [...slug].astro
┃ ┣ about.astro
┃ ┣ contact.astro
┃ ┣ index.astro
┃ ┣ projects.astro
┃ ┗ rss.xml.js
┣ projects
┃ ┣ assets
┃ ┃ ┣ paperTrails
┃ ┃ ┃ ┣ paperTrails01.png
┃ ┃ ┃ ┣ paperTrails02.png
┃ ┃ ┃ ┣ paperTrails03.png
┃ ┃ ┃ ┣ paperTrails04.png
┃ ┃ ┃ ┗ paperTrailsCover.webp
┃ ┃ ┣ portfolio
┃ ┃ ┃ ┣ portfolio01.png
┃ ┃ ┃ ┗ portfolioCover.webp
┃ ┃ ┣ sabusaurus
┃ ┃ ┃ ┣ sabu01.png
┃ ┃ ┃ ┣ sabu02.png
┃ ┃ ┃ ┗ sabuCover.png
┃ ┃ ┣ spellbound1
┃ ┃ ┃ ┣ spellbound1-0.png
┃ ┃ ┃ ┣ spellbound1-01.png
┃ ┃ ┃ ┣ spellbound1-02.png
┃ ┃ ┃ ┣ spellbound1-03.png
┃ ┃ ┃ ┣ spellbound1-04.png
┃ ┃ ┃ ┗ spellbound1Cover.png
┃ ┃ ┣ spellbound2
┃ ┃ ┃ ┣ spellbound2-02.png
┃ ┃ ┃ ┣ spellbound2-03.png
┃ ┃ ┃ ┣ spellbound2-04.png
┃ ┃ ┃ ┣ spellbound2-05.png
┃ ┃ ┃ ┣ spellbound2-06.png
┃ ┃ ┃ ┣ spellbound2-07.png
┃ ┃ ┃ ┗ spellbound2-cover.png
┃ ┃ ┗ ticketTails
┃ ┃ ┃ ┣ ticketTails01.gif
┃ ┃ ┃ ┣ ticketTails02.gif
┃ ┃ ┃ ┣ ticketTails03.gif
┃ ┃ ┃ ┣ ticketTails04.gif
┃ ┃ ┃ ┗ ticketTailsCover.png
┃ ┣ PaperTrails.md
┃ ┣ portfolio_site.md
┃ ┣ sabusarus.md
┃ ┣ Spellbound-V1.md
┃ ┣ Spellbound-V2.md
┃ ┗ TicketTails.md
┣ styles
┃ ┗ global.css
┣ consts.ts
┗ content.config.ts
