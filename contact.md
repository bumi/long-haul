---
layout: default
title: Contact
---

<div id="contact">
  <h1 class="pageTitle">Contact</h1>
  <div class="contactContent">
    <p>
      <strong>HeHe Labs Ltd:</strong><br />
      Clarisse Iribagiza Abakunda<br />
      clarisse@hehelabs.com
      <hr />
      <strong>Markets Merger Ltd:</strong><br />
      Louis-Antoine Muhire<br />
      muhirela@mergims.com
    </p>
  </div>
  <form action="http://formspree.io/{{ site.social.email}}" method="POST">
  
    <input type="hidden" name="_next" value="//{{site.url}}/contact-thanks.html" />
    <label for="name">Name</label>    
    <input type="text" id="name" name="name" class="full-width"><br>
    <label for="email">Email Address</label>
    <input type="email" id="email" name="_replyto" class="full-width"><br>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" class="full-width"></textarea><br>
    <input type="submit" value="Send" class="button">
  </form>
</div>
