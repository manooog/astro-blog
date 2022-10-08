---
layout: "../../layouts/BlogPost.astro"
title: "Astro Github Pages"
description: "Astro Github Pages 配置方式"
pubDate: "Jul 08 2022"
heroImage: "/placeholder-hero.jpg"
---

创建一个 repo，以`<username>.github.io`命名。

自定义域名

www.35iter.cn -> cname -> <username>.github.io.

https

绑定域名，增加一条 txt 记录（参考[这个链接](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)）。

![](/assets/2022-10-08-14-24-56.png)

![](/assets/2022-10-08-14-50-53.png)

创建 workflows，参考本项目。
