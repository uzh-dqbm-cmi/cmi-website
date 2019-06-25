---
layout: page
title: Research
permalink: /research/
background: '/assets/images/uzh_usz_eth.png'
---

[Our Lab GitHub](https://github.com/uzh-dqbm-cmi)

***

## Featured Projects

![DISCERN criteria](/assets/images/checklist.png){:class="img-responsive" height="100px"}

### Auto-Discern

We are building a machine learning system that rates the quality of health information websites, such as WebMD. 
We use the [DISCERN instrument](http://www.discern.org.uk/discern_instrument.php), 
which evaluates articles on attributes such as "are the treatment risks described" and "are the sources cited".

[View the code on GitHub](https://github.com/uzh-dqbm-cmi/auto-discern)

***
[](http://i.stack.imgur.com/vwxyz.png)
[![30 days all-cause readmission](../assets/images/ECCB18_poster_v2.png){:class="img-responsive" height="300px" width="200px"}](../assets/docs/ECCB18_poster_v2.pdf)
### 30 days all-cause readmission

**Abstract**
Heart failure (HF) is one of the leading causes of hospital admissions in the US. Readmission within 30
days after a HF hospitalization is both a recognized indicator for disease progression and a source of
considerable financial burden to the healthcare system. Consequently, the identification of patients
at risk for readmission is a key step in improving disease management and patient outcome. In this
work, we used a large administrative claims dataset to (1) explore the systematic application of neural
network-based models versus logistic regression for predicting 30 days all-cause readmission after
discharge from a HF admission, and (2) to examine the additive value of patients’ hospitalization
timelines on prediction performance. Based on data from 272,778 (49% female) patients with a mean
(SD) age of 73 years (14) and 343,328 HF admissions (67% of total admissions), we trained and tested
our predictive readmission models following a stratified 5-fold cross-validation scheme. Among the
deep learning approaches, a recurrent neural network (RNN) combined with conditional random fields
(CRF) model (RNNCRF) achieved the best performance in readmission prediction with 0.642 AUC (95%
CI, 0.640–0.645). Other models, such as those based on RNN, convolutional neural networks and CRF
alone had lower performance, with a non-timeline based model (MLP) performing worst. A competitive
model based on logistic regression with LASSO achieved a performance of 0.643 AUC (95% CI, 0.640–
0.646). We conclude that data from patient timelines improve 30 day readmission prediction, that a
logistic regression with LASSO has equal performance to the best neural network model and that the
use of administrative data result in competitive performance compared to published approaches based
on richer clinical datasets.

[**Presentation**](https://prezi.com/dayewmtvycb4/?token=6ae94b195bb9adbe6387d21730912aeddf49776991d25e1fb034d77c94b74a9d&utm_campaign=share&utm_medium=copy&rc=ex0share)
<iframe id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" width="550" height="400" src="https://prezi.com/embed/dayewmtvycb4/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI0cm5nRHhxUVdQNGNjc2pxeS9DUFAraVJnPT0&amp;landing_sign=H0HRqyX3lBJzXmWAcyH5tEAwQtN4GCmozGRej1XqwLU"></iframe>

[ECCB 2018 poster](http://eccb18.org/) can be downloaded [here](../assets/docs/ECCB18_poster_v2.pdf)

[Paper got accepted in Scientific Reports - Nature](www.nature.com/articles/s41598-019-45685-z)

[View the source code](https://bitbucket.org/A_2/hcup_research)

