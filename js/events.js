---
layout: null
---
$('#calendar').fullCalendar({
buttonText: {
   today:    'Today',
},
events: [{% assign first = true %}{% for post in site.data.events | sort 'start' %} {% if first == false %},{% endif %}
{% if first == true %}{% assign first = false %}{% endif %}
{   title: "{{ post.title }}",
    start: "{{ post.start }}",
    url: "{{ post.url }}",
}{% endfor %}]
});