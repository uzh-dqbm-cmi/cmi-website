---
layout: page
title: "Drug-Drug Interactions"
subtitle: ""
author: "Kyriakos"
date: 2019-11-27 15:00:00 +0100
background: '/assets/images/Meds.jpg'
---

Drug-drug interactions (**DDIs**) refer to drugs' effect upon their concurrent administration. Under those conditions additional side effects may surface which would not manifest in case of individual drug administration. Consequently, DDIs are an important consideration for patient treatment where the aim is to maximize drug effectiveness while simultaneously minimizing unwanted side effects. Due to the combinatorial explosion of possible drug pairs, it is impossible to test them all and discover previously unobserved side effects. Therefore, computational methods and more recently **Deep Learning** based models are being employed for this task. 

<img  class="img-fluid"
      src="/assets/images/sideEffectsWordCloud.jpg"
      alt="Side Effects"
      style="margin: 0 auto;display: block;">

For instance, Lee et al. [[1](https://doi.org/10.1186/s12859-019-3013-0)] used Autoencoders coupled with Feed Forward Neural Network that takes drug structure, target gene and Gene Ontology (GO) term data as input, in order to predict the DDI type (example type: "DRUG A may increase the hypoglycemic activities of DRUG B."). Similarly, Ryu et al. [[2](https://doi.org/10.1073/pnas.1803294115)] proposed DeepDDI, a multilabel classification model, which also takes drug structure data as input, along with drug names, in order to output DDIs as human-readable sentences.

Due to these exciting opportunities, in one of our projects, we seek to improve our understanding of drug-drug interactions by developing and applying novel and interpretable Deep Learning models.
