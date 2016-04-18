---
title: Contact
layout: contact
summary: Contact the Great Project
---

To contact AALGS, please use the form below to contact the Secretary:

{% comment %}Forms provided by formspree.io{% endcomment %}

<form action="https://allotmentmail.herokuapp.com/send" method="POST">
  <label>Name</label> <input type="text" name="name">
  <label>Email</label> <input type="text" name="email">
  <label>Subject</label> <input type="text" name="subject">
  <label>Your Message</label> <textarea name="message" cols="40" rows="5"></textarea>
  <input type="submit" value="Send Message">
</form> 