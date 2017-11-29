---
layout: page
title: Services
permalink: /services_fr/
nav: navbar
breadcrumb: Services
ref: services
lang: fr
---

## Une gamme de services complète et cohérente
<div class="wrapper">


<ul>
    {% assign pages=site.services | where:"lang", page.lang %}
    {% for page in pages %}
      <li>
        
        <h3 >
			<a  href="{{ page.url | prepend: site.baseurl }}"><img src="{{ page.teaser-img | prepend: site.baseurl }}" alt="{{ page.title }}" title="{{ page.title }}"></a> <br>
          
        </h3>
        <p >{{ page.subtitle }}</p>
      </li>
    {% endfor %}
  </ul>
