---
layout: default
title: home
---
<ul>
{% for p1 in site.data.toc_jekyll %}
  <li>{{ p1.name }}
    {% for p2 in p1.children %}
    {% if forloop.first %}<ul>{% endif %}
    <li>{{ p2.name }}
      {% for p3 in p2.children %}
      {% if forloop.first %}<ul>{% endif %}
      <li>{{ p3.name }}
      {% for p4 in p3.children %}
        {% if forloop.first %}<ul>{% endif %}
        <li>{{ p4.name }}
        </li>
        {% if forloop.last %}</ul>{% endif %}
      </li>
      {% if forloop.last %}</ul>{% endif %}
    </li>
    {% if forloop.last %}</ul>{% endif %}
  </li>
</ul>
