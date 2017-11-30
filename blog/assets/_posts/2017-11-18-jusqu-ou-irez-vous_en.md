---
layout: post
title:  "My first assets post"
ref: whereto
permalink: /blog_en/assets/my-first-assets-post/
date:   2017-11-18 18:43:44 +0100
lang: en
---

# How far will you get?
## Customers in Europe&hellip;<br>&hellip; or all around the world? Yes, you can!

Vos produits et services plaisent et se vendent bien, mais... en France surtout, ou en France seulement. Comment faire mieux ? Très simplement...

<ul>

{% for blogcat in site.data.blogcats %}

  <li>
    Catégorie : {{ blogcat.name }} / {{ page.lang }}: {{ blogcat[page.lang] }}
    
  </li>
{% endfor %}
</ul>



