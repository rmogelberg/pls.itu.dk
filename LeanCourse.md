---
layout: page
title: Programming and Proving with Lean
archived: true
---
This is a mini-course taught by David Thrane Christiansen and organised
by Marco Carbone and Rasmus Møgelberg. For further information,
contact Marco Carbone

### Description

Lean is an interactive theorem prover that largely shares its logical foundations with Coq, but in which quite different design decisions have been made. Lean has attracted a substantial user base of mathematicians, and it has already been used both to construct a large library of mathematics (over one million lines) and a number of other results, including a successful formalization of Scholze's liquid tensor experiment and a proof of the existence of sphere eversions.

At the same time, Lean is a general-purpose pure functional programming language with dependent types. It is a sufficiently capable language that its compiler is written in Lean itself. Lean is also used as the language in which proof automation is implemented. As a programming language, Lean has innovative approaches to memory management, structuring monadic code, metaprogramming, and embedded languages.

This mini-course will situate Lean in both the landscape of theorem provers and the landscape of functional programming languages, and demonstrate proving, programming, and metaprogramming, all from a computer science perspective. The sections on programming and metaprogramming will also be relevant to those who have no interest in interactive theorem proving, and won't assume prior knowledge of Coq, Agda, Idris, or similar systems.

### Literature

- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/) (FPiL)
- Beyond Notations: Hygienic Macro Expansion for Theorem Proving Languages, by Ullrich and de Moura, IJCAR 2020
 - Counting Immutable Beans: Reference Counting Optimized for Purely Functional Programming (same authors, IFL 2019)
 - The Type Theory of Lean, by Mario Carneiro


### Files
[Slides](LEANCourseFiles/slides.pdf)
[Examples](LEANCourseFiles/ITU Examples.zip)

### Schedule

- Session 1 - An Overview of Lean. November 14, 2023 from 10 to 12. Aud 4, ITU. Readings: FPiL chp 1-6
- Session 2 - Programming and Metaprogramming. November 21, 2023 from 10 to 12. Aud 4, ITU. Readings: FPiL chp 7-10, the papers Beyond Notations and Counting Immutable Beans
- Session 3 - Foundations and Proofs. November 28, 2023 from 10 to 12. 4A58, ITU. Readings: The Type Theory of Lean
