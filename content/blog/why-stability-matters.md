---
title: Why Stability Matters — Lessons from the Inclining Experiment
date: 2026-03-22
tags:
  - naval-architecture
  - stability
  - learning
draft: false
---

# Why Stability Matters — Lessons from the Inclining Experiment

One of the first things you (I) learn(ed) in naval architecture is that a beautiful hull means nothing if the vessel can't stay upright. Stability is the foundation everything else is built on — and the inclining experiment is how we prove it.

## What is an inclining experiment?

In simple terms, you move a known weight across a vessel and measure how much it heels. From the angle of heel and the weight's moment, you can work out the metacentric height (GM) — a key indicator of how stiff or tender a vessel is.

The principle is elegant: $GM = \frac{w \cdot d}{W \cdot \tan(\theta)}$

Where *w* is the inclining mass, *d* is the distance it moves, *W* is the vessel's displacement, and *θ* is the resulting angle of heel.

## What I learned in the lab

Working with a box catamaran model, I ran the experiment in two conditions: with solid ballast and with water ballast (introducing a free surface effect). The solid ballast case came within about 8% of the theoretical prediction — a satisfying result. But the free surface case diverged by over 25%.

That discrepancy taught me more than any textbook. It forced me to think critically about:

- **Measurement precision** — How accurately can you read a pendulum angle on a small model at small angles?
- **Assumptions in theory** — The theoretical model assumes perfect geometry and zero friction. surface tension at this scale is not negligible
- **Free surface behaviour** — Water sloshing in a tank does not behave like a textbook diagram

## Why it matters for real design

Every vessel that goes to sea has undergone an inclining experiment. It's not optional — classification societies require it. The data feeds directly into the stability booklet that tells the crew how to load the vessel safely. (Extremely important for cargo ships and ferries)

Getting comfortable with the gap between theory and reality — and understanding *why* that gap exists — which seems to be mostly due to modelling assumptions. 

## The Polar method

 I read a few papers about the polar method of calculation and thought "Surely it cant be that bad". I did a similar thing when I decided to buy a yacht to live on. after a couple hours I had a semi working polar method of calculating the Average as inclined GM with a GZ curve graph. The accuracy of the polar method for calculating the GM is marginally higher than the classical method that has been in use since the 18th century and significantly more complicated. The main reason my results were only marginally more accurate when calculating the GM is due to the fact that a box shaped catamaran has a constant waterplane area and so the classical method excels in this situation for small angles.

---

*Have questions or thoughts? [[contact|Drop me a message]].*
