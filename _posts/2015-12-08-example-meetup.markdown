---
layout: meetup
title:  "Example Meetup"
truncate: true
meetup: "kigali-2015-12-23"
event_date: 2015-12-23
event_time: 8pm - 10pm
location: 
  name: "The Office Kigali"
  url: "http://maps.google.com?q=Kigali"
  embeded_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127599.8861796329!2d30.03433433845916!3d-1.954797433374141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C+Ruanda!5e0!3m2!1sde!2sde!4v1449514027947"
date: 2015-12-08
---

<p class="intro"><span class="dropcap">L</span>orem ipsum thor smash liege-bastogne-liege landbouwkrediet ombregt krabbe, rouleur derby is for lovers bonk giro gilbert bidon. Driedaagse de panne-koksijde monte paschi eroica, nevele gimondi berendries off the back cassette tenbosse.</p>

Bahamontes lanterne rouge normandie belgium. Fred paris-nice arrivere, for omnium commissaire ronde van vlaanderen horizontally stiff but vertically compliant muur, valkenberg jens paris-roubaix. Meyrueis belleville cavendish bianchi, rochefort echelon in soigneur ten dam omloop het volk, bettini aerts! Tour de mont aigoual cat among the pigeons rekelberg omloop het nieuwsblad paris-nice, dwars door vlaanderen coppi the colnago knockteberg anduze.

Kaperij lanterne rouge musette rund um koln bruges thor smash, geraardsbergen riis petacchi molteni pedaling squares. Virenque vande velde, valkenberg gutter pantani parcours gaul domestique, tilford campagnolo around madone. Bruyneel criterium ritte, gorgeous george the trousselier feed zone bruges nokere koerse, parcours gilbert garin? Anquetil valkenberg bettini cat among the pigeons.


{% if page.meetup %}{% include rsvp.html meetup=page.meetup %}{% endif %}
{% if page.location && page.location.embeded_url %}{% include location.html url=page.location.embeded_url %}{% endif %}
