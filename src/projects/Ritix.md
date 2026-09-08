---
slug: "ritix"
title: "Ritix"
description: "A combat system development project built in Godot 4.7 that is designed to be used as a base for other game development titles."
pubDate: "2026-09"
status: "Ongoing"
contributors: ["Ava Daly"]
cover: "./assets/ritix/ritix_cover.png"
coverAlt: "Ritix - game cover "
gallery:
  [
    {
      img: "./assets/ritix/ritix_cover.png",
      alt: "A screenshot of Spellbound 2026, showing the main character in a 3D environment, standing next to a crystal ball.",
    },
  ]
tags:
  ["Godot", "Game Development", "GDScript", "ongoing", "games", "independent"]
---

**Ritix** is a game development project currently being produced in Godot 4.7.2, with the intention of becoming the base systems for two separate games in the future. While extremely bare right now, the intention is to build the shared systems between the two potential games, mostly focusing on the player systems and combat systems. Ritix is a third person 3D combat sandbox in its current state.

So far, there are a few major differences between **Ritix** and other projects such as [Spellbound 2026](../spellbound-2026). Spellbound used Configs and RefCounted objects to create and write its save data. While it worked for its intended purpose, it was clunky and over-engineered. Ritix uses a custom resource to hold save data which is a lot simpler, and frankly what Godot recommends.

Another improvement with Ritix is the player controller scripts. [Spellbound 2024](../spellbound-2024) had a monolith script as its player controller. Multiple `if else` chains that were 8+ statements long. [Spellbound 2026](../spellbound-2026) improved upon this with classes like the `PlayerCameraManager` and `PlayerInputManager`, and dedicated `Stat` and `StatModifier` objects to decouple operations from each other. There was, however, still huge room for improvement.

Ritix contains the first ever Resource-based state machine I've ever made, and I can understand why developers tend to like them. Not to say state machines aren't without issues, I can see a complicated state machine resulting from lots of interconnected states, but, for the time being, this state machine will make the player controller a lot more organized.

The next systems I will be tackling within Ritix are a more refined `Stat` system, control rebinding, and eventually complex combat systems kin to a souls-like.
