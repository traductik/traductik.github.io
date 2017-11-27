---
layout: page
title: Services
permalink: /services_en/
nav: navbar
breadcrumb: Services
ref: services
lang: en
---

## A complete range of services

<div class="wrapper">


<ul >
    {% assign posts=site.services | where:"lang", page.lang %}
    {% for post in posts %}
      <li>
        
        <h3 >
			<a href="{{ post.url | prepend: site.baseurl }}"><img src="{{ post.teaser-img | prepend: site.baseurl }}" alt="{{ post.title }}" title="{{ post.title }}"></a> <br>
          
        </h3>
        <p >{{ post.subtitle }}</p>
      </li>
    {% endfor %}
  </ul>





      
</div>
