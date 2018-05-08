---
layout: grid-sidebar
title: Partner Updates
summary: >-
  We can help you if you’re aged 15-24 years old and not in education,
  employment or training.
published: true
pagenumber: 6
---

{% capture partnercount %}{{ page.pagenumber | minus: 1 | times: 6 }}{% endcapture %}
{% for post in site.partnernews limit:6 offset:partnercount %}
<div class="teaser-wrapper">
	<div class="teaser">
 <a href="{{ site.baseurl }}{{ post.url }}"><img src="{{ post.thumbnail-image }}"></a>
  <h4><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h4>
  <div class="content">
	{% if post.summary == null %}
    {{ post.content | strip_html | truncatewords: 15 }}
	{% else %}
	{{ post.summary }}
	{% endif %}
  </div>
</div>
</div>
{% endfor %}

{% for post in site.partnernews %}
{% capture partnernewstotalpages %}{{ forloop.length }}{% endcapture %}
{% assign partnernewstotalpages = partnernewstotalpages | plus: 0 | divided_by: 6 | plus: 1 %}
{% endfor %}

{% if partnernewstotalpages > 1 %}
<div class="pagination">
  <ul>
  {% if page.pagenumber == 1 %}
  {% elsif page.pagenumber == 2 %}
    <li><a href="{{ site.baseurl }}/partners/" class="previous">Previous</a></li>
  {% elsif page.pagenumber > 2 %}
    <li><a href="{{ site.baseurl }}/partners/{{ page.pagenumber | minus: 1 }}" class="previous">Previous</a></li>
  {% else %}
  {% endif %}
  {% for item in (1..partnernewstotalpages) %}
  <li><a {% if page.pagenumber == item %}class="active" href="#"{% else %} href="{% if item !=1 %}{{ site.baseurl }}/partners/{{ item }}{% else %}{{ site.baseurl }}/partners/{% endif %}"{% endif %}>{{item}}</a></li>
  {% endfor %}
  {% if page.pagenumber != partnernewstotalpages %}
    <li><a href="{{ site.baseurl }}/partners/{{ page.pagenumber | plus: 1 }}" class="next">Next</a></li>
  {% else %}
  {% endif %}
  </ul>
</div>
{% endif %}