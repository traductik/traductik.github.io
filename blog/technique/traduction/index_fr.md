---
layout: page
title:  "Articles & actualités de la traduction"
breadcrumb: "Articles & actualités de la traduction"
permalink: /blog/technique/traduction_fr/
date:   2017-11-28
nav: nosideblog
ref: traductionwelcome
lang: fr
---



<!----------------- Liste des articles de blog ------------------->
  <div class="wrapper">
  <h1 class="page-heading">Articles classés par catégorie</h1>
 <ul class="post-list">
    {% assign posts=site.posts | where:"lang", page.lang %}
    {% for post in posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" style="font-size:60%" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
  </div>
  <!----------------- Fin de la liste des articles de blog ------------------->
