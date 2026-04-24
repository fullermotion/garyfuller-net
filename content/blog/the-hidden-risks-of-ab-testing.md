---
title: The Hidden Risks of A/B Testing
date: 2025-12-05
summary: A/B testing is one of the most widely trusted tools in digital product work — and one of the most commonly misused. Revisiting Peter Borden's "How Optimizely (Almost) Got Me Fired" is a useful reminder that the platform reporting a winner doesn't mean you have one.
tags: [Strategy, Software Delivery, Enterprise Architecture]
---

I recently revisited "How Optimizely (Almost) Got Me Fired" by Peter Borden, a well known reminder that A/B testing can mislead even experienced teams. It prompted a reconsideration of how tools meant to support data driven decisions often conceal statistical and organizational risks.

False positives are common because even identical variants can be labeled as winners, especially when many tests or metrics run at once. Limited sample size leads teams to miss small effects or over interpret noise, particularly when they declare results too early. Problems in experiment structure, uneven assignment, or sample ratio mismatches can invalidate outcomes while still appearing statistically sound.

Short term uplifts in metrics like clicks or signups may fail to reflect retention, revenue, or lasting value, which means teams may optimize for fast gains at the cost of long term performance. Overconfidence in platform reported significance can also push teams toward decisions built on weak assumptions or noisy data.

Responsible experimentation requires planning, adequate sample size and power calculations, and validation of randomization through checks such as an A/A test. Significance should be interpreted cautiously by examining confidence intervals, effect size, and whether a result aligns with genuine business goals rather than vanity indicators.

Quantitative results benefit from support through qualitative research that explains why a change worked. Experimentation should be treated as a disciplined process where inconclusive outcomes remain acceptable.

In environments that reward fast wins, it is easy to rely too heavily on testing platforms. Without careful practice, the foundation becomes unstable. For anyone working in product, UX, growth, or digital experience, A/B testing is valuable but should remain only one method within a broader strategy.
