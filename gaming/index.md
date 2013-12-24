---
layout: post
title: Gaming
---

{% for category in site.categories %}
  {% if category[0] == 'gaming' %}
  {% assign posts = category[1] %}
  {% include archive.html %}
  {% endif %}
{% endfor %}