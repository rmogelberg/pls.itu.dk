---
layout: page
title: Talks
---
Autumn 2023. We meet Tuesdays 12-13.

**Upcoming Talks** 

- Oct 3:: **Emil Ørup Kristensen**. _Secure Choreographies in PSPSP/Isabelle_ <br>
In this thesis, Security Protocol Choreography (SPC), a new 
choreographic security protocol specification based on Alice and Bob 
(AnB)-notation which uses Performing Security Proofs of Stateful 
Protocols (PSPSP) to prove security, is introduced. AnB-notation is a 
popular way of describing security protocols, and formal languages based 
on AnB-notation, such as AnB, allow for connection with protocol 
verification tools. However, this notation is limited: it cannot express 
branching, repetition, or longterm state. Choreographies (or MultiParty 
Session Types) are a way to describe more complex interactions while 
maintaining much of the brevity and simplicity of AnB-notation. The task 
of this the sis is to connect choreographies to a verification tool: 
PSPSP. This tool is embedded into Isabelle/HOL and thus obtains 
verification results with very high reliability. It is based on 
describing a protocol at an “atomic” level, i.e., transactions are 
executed as a single transition and cannot be interrupted by other 
transactions. PSPSP allows for longterm state and arbitrary control 
flows so that the actions of a given choreography can be expressed in 
PSPSP. Moreover, PSPSP does not need a bound on the number of sessions 
required by other tools like OpenSource FixedPoint ModelChecker (OFMC). 
On the other hand, PSPSP uses an abstract interpretation technique that 
can lead to false positives (attacks that only work in the abstraction). 
Thus, this thesis aims to conceptually design a translator from 
choreographies to PSPSP transactions, implement it, and test it on 
concrete examples. Besides the practical aspects, the theoretical value 
of this work is a declarative semantics to choreographies based on 
higher order logic/ PSPSP. Lastly, The Envelope Protocol is modelled in 
both SPC and PSPSP as a motivation example for the clarity of SPC.
- Oct 17 (No talk, Autumn break)
- Oct 31
- Nov 14
- Nov 28
- Dec 12

**Past Talks** 
- Sept 5:: **Mahsa Varshosaz**. _Formal Specification and Testing for Reinforcement Learning_ <br> 
The development process for reinforcement learning applications is still exploratory rather than systematic. This exploratory nature reduces reuse of specifications between applications and increases the chances of introducing programming errors. This paper takes a step towards systematizing the development of reinforcement learning applications. We introduce a formal specification of reinforcement learning problems and algorithms, with a particular focus on temporal difference methods and their definitions in backup diagrams. We further develop a test harness for a large class of reinforcement learning applications based on temporal difference learning, including SARSA and Q-learning. The entire development is rooted in functional programming methods; starting with pure specifications and denotational semantics, ending with property-based testing and using compositional interpreters for a domain-specific term language as a test oracle for concrete implementations. We demonstrate the usefulness of this testing method on a number of examples, and evaluate with mutation testing. We show that our test suite is effective in killing mutants (90% mutants killed for 75% of subject agents). More importantly, almost half of all mutants are killed by generic write-once-use-everywhere tests that apply to any reinforcement learning problem modeled using our library, without any additional effort from the programmer.

- Aug 22: **Patrick Bahr**. _Modal FRP For All._ <br>
Functional reactive programming (FRP) provides a high-level interface for implementing reactive systems in a declarative manner. However, this high-level interface has to be carefully reigned in to ensure that programs can in fact be executed in practice. Specifically, one must ensure that FRP programs are productive, causal, and can be implemented without introducing space leaks. In recent years, modal types have been demonstrated to be an effective tool to ensure these operational properties.
In this paper, we present Rattus, a modal FRP language that extends and simplifies previous modal FRP calculi while still maintaining the operational guarantees for productivity, causality, and space leaks. The simplified type system makes Rattus a practical programming language that can be integrated with existing functional programming languages. To demonstrate this, we have implemented a shallow embedding of Rattus in Haskell that allows the programmer to write Rattus code in familiar Haskell syntax and seamlessly integrate it with regular Haskell code. Thus Rattus combines the benefits enjoyed by FRP libraries such as Yampa, namely access to a rich library ecosystem (e.g. for graphics programming), with the strong operational guarantees offered by a bespoke type system.
To establish the productivity, causality, and memory properties of the language, we prove type soundness using a logical relations argument fully mechanised in the Coq proof assistant.



Spring 2023. We meet Tuesdays 12-13
- Jan 25: Dawit Tirore: Sound and complete projection of multi-party protocols
- Feb 7: No talk, just meetings
- March 7: Carsten Schürmann (postponed)
- March 21: Reynald Affeldt (AIST) and Takafumi Saikawa (Nagoya)
- March 31: Raul Pardo Jimenez (Joint PLS/Square): Formal Verification of Privacy Policies for Social Networks
- April 11: Jimmy Koppen (MIT): Meta-metaprogramming
- May 2: Carsten Schürmann: Tick Unify
- May 16: Ichiro Hasuo (National Institute of Informatics,
  Japan): Proving Safety of Automated Driving Vehicles. Online talk.
- May 22: Natalia Slusarz (Heriot-Watt): Logic of Differentiable
  Logics: Towards a Uniform Semantics of DL
- May 24: Ekaterina Komendantskaya (Heriot-Watt): Integrated Neural Network Verification with Vehicle

Autumn 2022. We meet Tuesdays 12-13
- Sept 5: Frederik Haagensen: Incentive Alignment through Secure
- Oct 4: Yannick Zakowski (Inria): Monadic Definitional Interpreters as Formal Semantic Models of Computations in Coq
- Nov 1: Adele Veschetti (University of Bologna): A formal analysis of blockchain consensus protocols
- Nov 8: Jon Sterling (Aarhus University)
- Dec 13: Rasmus Møgelberg

Spring 2022. We meet Tuesdays 12-13
- Feb 11: Rasmus Lerchedahl Petersen (GitHub): Static analysis at GitHub Scale
- Feb 15: Jonas Kastberg Hinrichsen (Aarhus) (cancelled)
- March 15: Carsten Schürmann
- March 29: Mikkel Kragh Mathiesen (DIKU)
- April 7: Alejandro Aguirre (Aarhus)
- April 26: Tarmo Uustalu (Reykjavik) (over Zoom)
- May 18: Tim Steenvoorden (Open University the Netherlands)
- May 25: Christoph Matheja (DTU). Joint PLS/Square talk.
- June 7: Philip Munksgaard (DIKU)
- June 17: Sebastian Mödersheim (DTU). Joint PLS/CISAT talk

Autumn 2021. We meet Tuesdays 12-13.
- Sept 10: Patrick Bahr
- Sept 24: Jesper Bengtson
- Oct 5: Antoine van Muylder (Vrije Universiteit Brussel)
- Nov 16: Dawit Tiore
- Nov 30: Rasmus Lerchedahl Petersen (GitHub)(Cancelled)
- Dec 7 (at 13): Niccolò Veltri (Tallinn)
- Dec 14: Patricia Johann (Appalachian State University)

Spring 2021. We meet Fridays 12-13. For the time being meetings are virtual. Invitation will appear in calendars. If you would like to attend or give a talk, email Rasmus.
- Feb 12 (12-13). No talk, catch-up meeting
- Feb 26 (12-13). Magnus Baunsgaard Kristensen
- March 12: Christian Uldal Graulund PhD defence at 13.
- March 19: Willard Rafnsson
- March 26: Alceste Scalas: Effpi: Verified Message-Passing Programs in Scala 3
- April 9: Maaike Zwart
- April 16: Alex Kavvos (Bristol)
- April 23: Rasmus Møgelberg
- May 28: Louis Parlant
- June 4: Maja Hanne Kirkeby (RUC)


Autumn 2020.
- Oct 6 (Zoom, 1230-1330): Marco Carbone:  A Characterisation of Coherence as Linear Logic Proofs
- Oct 20 (Zoom, 13-14): Jonas Kastberg Hinrichsen: Mechanising Type Systems using Semantic Typing
- Nov 5 (3A08, 12-13): Christian Uldal Graulund
- Nov 17, 1230-1330: Willard Rafnsson

Spring 2020. This semester we meet Tuesdays 12-13 in 3A08 unless otherwise noted.

- Feb 4, (5A09): Marco Carbone: Towards a Logic of Forwarders
- Apr 17 (On zoom): Søren Debois
- May 18 (On zoom): Daniel Gratzer (Aarhus)

Autumn 2019. This semester we meet Tuesdays 12-13 in 4A05 unless otherwise noted.

- Aug 1, 13-14 (4A54): [Guillaume Munch-Maccagnoni](https://guillaume.munch.name/): From systems programming to linear logic, and back
- Sep 3: No talk, just discussions
- Sep 17: Talk cancelled
- Sep 23, 10-11 (3A18): Andreas Nuyts: Dependent type theory with modalities and modes
- Oct 1: Alessandro Bruni
- Oct 24 (Thursday), 12-13 (3A07): Jesper Bengtson.
- Nov 12: Patrick Bahr: Calculating Correct Compilers -- How to Implement Compilers by Proving Their Correctness First
- Dec 4 (3A07): Andrea Vezzosi: Formalizing π-calculus in Guarded Cubical Agda
- Dec 5, 14-15 (2A20): Christian Sattler: Higher categorical structure in HoTT
- Dec 10 (4A05): Hugo Andres Lopez


In the Spring of 2019 PLS lunch talk are usually every other Wednesday 12-13 in 3A07

-   Jan 29: No talk just discussions
-   Feb 21 (3A08, 14-15): Willard Rafnsson: Types for Information-Flow Control in Functional Programming Languages
-   March 13: Jonas Kastberg Hinrichsen: Formal Verification of Distributed Systems in Iris
-   March 27: Andrea Vezzosi: Higher Inductive Types in Cubical Agda
-   April 10: Dima Szamozvancev: Well-typed music does not sound wrong
-   May 8: Carsten Schürmann: Intro to LF
-   May 14: Adrien Guatto (IRIF, Paris): A Basis for Synchronous Functional Programming (at 12 in 3A01)
-   May 15: Carsten Schürmann: Intro to LF continued
-   May 29: Sonia Marin: Justification logic for modal logics on an intuitionistic base

In the Autumn of 2018 PLS lunch talk are usually every other Tuesday
12-13

-   Sept 4 (2A08): No talk, just discussions
-   Sept 18 (2A08): Patrick Bahr: Strict Ideal Completions of the Lambda
    Calculus
-   Oct 2 (4A05): Niccolo Veltri: Bisimulation as path type for guarded
    recursive types
-   Nov 20 (3A08): No talk
-   Dec 4 (3A08): Marco Carbone: An Introduction to Multiparty Session
    Types and their Logical Interpretation
-   Dec 18 (3A08): Rasmus Møgelberg: An invitation to presheaf semantics
    of type theory.


In the Spring of 2018 PLS lunch talk are usually every other Tuesday
12-13

-   Feb 27: No talk, just discussions
-   March 8 (10-11 in 3A18): Eva Graversen and Nobuko Yoshida
-   March 13: Christian Uldal Graulund
-   April 24: Jonas Kastberg Hinrichsen
-   May 8: Jesper Bengtson
-   May 28: Willard Rafnsson
-   June 14: Rasmus Møgelberg and Bassel Mannaa (two talks)


In the Fall of 2017 PLS lunch talks usually take place on every other
Tuesday 12-13 in 2A08.

-   Sept 6: Oscar Toro: The Bitcoin Backbone Protocol
-   Sept 19: Jonas Kastberg Hinrichsen:
    Specification of object oriented languages in practice
-   Oct 3: Niccolo Veltri: Finiteness and rational sequences,
    constructively
-   Oct 5: Formalisations using two-level type theory
-   Oct 31: Cancelled
-   Nov 13: Danel Ahman: A fibrational view on computational effects.
    13-14 in 3A08.
-   Nov 14: Hugo A. Lopez
-   Nov 28: Anupam Das (U. Copenhagen)
-   Dec 12: Sonia Marin


In the Spring of 2017 PLS lunch talks usually take place on every other
Thursday 12-13 in 3A08.

-   February 2: No talk, just discussions
-   February 16: Rosario Giustolisi
-   March 16: Christian Uldal Graulund
-   March 24, 14-15 in 4A05: Bas Spitters (Aarhus): Colimits in homotopy
    type theory.
-   March 30: Agata Murawska: Lincx: A Linear Logical Framework with
    First-class Context
-   May 23: Patrick Bahr: The clocks are ticking: No more delays! and
    Rasmus Møgelberg: Presheaf semantics for Guarded Dependent Type
    Theory
-   June 8: Bassel Mannaa: Stack Semantics of Type Theory


In the Fall of 2016 PLS lunch talks usually take place on every other
Thursday 12-13 in 3A08.

-   September 1. Marco Carbone: Coherence Generalises Duality: a logical
    explanation of multiparty session types
-   September 29. Peter Brottveit Bock.
-   October 13. Meeting cancelled.
-   Nov 10. Håkon Normann: Non-interleaving opperational semantics for
    late and early Pi-calculus
-   Nov 24. Bassel Mannaa.


Talks from Spring 2016:

-   February 4. Alessandro Bruni: AIF-ω: Set-based Protocol Abstraction
    with Countable Families.
-   February 18. Robin Kaarsgaard (U. Copenhagen)
-   March 17. Hans Bugge Grathwohl (Aarhus).
-   March 31. Alec Faithful: Coqoon: an IDE for interactive proof
    development in Coq
-   April 28. Søren Debois.
-   June 10. Michael Denzel (U. Birmingham).


Talks from Fall 2015:

-   August 27, 13-13:30, 3A08. Patrick Bahr: Certified Symbolic
    Management of Financial Multi-party Contracts
-   September 3, 12-13, 3A08. Peter Brottveit Bock: A linear contextual
    logical Framework.
-   September 17, 12-13, 3A08. Marco Carbone: Multiparty Session Types
    as Coherence Proofs
-   September 18, 12-13, 3A08. Thomas Bolander (DTU): Building Planning
    Agents with Higher-Order Reasoning Capabilities
-   September 21, 10-11, 3A08. Paul Blain Levy (Birmingham): Transition
    systems over games
-   October 1, 12-13, 3A18. Cinzia Di Giusto (Nice, Sophia Antipolis): A
    Multyparty Session Type discipline for Event-Based Runtime
    Adaptation
-   October 19, 12-13, 2A08. Marco Paviotti: Formally verifying
    exceptions for low-level code with Separation Logic
-   October 29, 12-13. TBD.
-   November 11, 10-11, 4A09. Robbert Krebbers (Aarhus): Formalizing C
    in Coq
-   November 12, 12-13. Agata Anna Murawska: Towards an happy
    marriage: Linear Logic and Beluga
-   November 26, 12-13. Marie Kerjean (PPS Paris): The computational
    content of derivation
-   December 10, 12-13. Marco Paviotti. Synthetic Guarded Domain Theory:
    Recursion in Guarded Recursion.
-   December 17, 12-13. Lorena Ronquillo
