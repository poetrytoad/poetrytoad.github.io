---
---

# Families

Test

<p>RAI
{% for item in site.Rai %}
• <a href="{{ item.url }}">{{ item.title }} </a> 
{% endfor %}
</p>

<p>SAHOTA
{% for item in site.Sahota %}
• <a href="{{ item.url }}"> {{ item.title }} </a>
{% endfor %}
</p>

<p>CHANA
{% for item in site.Chana %}
• <a href="{{ item.url }}"> {{ item.title }} </a>
{% endfor %}
</p>