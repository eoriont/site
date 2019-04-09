---
layout: default.pug
title: My new website
---

## I did it again!
I have done it again. I remade my website for like the 4th time.
This time it is staying though, because I like the way I made it.
And yes, I notice that the blog post page isn't stripping all the markdown tags from the text.
I will fix this later.  
<br />
## Eleventy
For this new blog, I am using a static site generator called eleventy.
Eleventy runs off of js, and you can choose templating engines like pug, liquid, or handlebars to use with it.
The thing I like about eleventy is how little you actually need to start.
All you need is a node project with eleventy installed, and an index file to get started.
With this site, I am using pug, which is a templating engine similar to haml (if you have ever used rails).
I feel that pug is clean language that gets the job done quick.
With it, you don't need to write a bunch of opening and closing tags, because it relies on whitespace.
Sometimes languages that rely on markdown are annoying, but this one gets a pass because html is a markup language.  
<br />
I used to use jekyll, because it was a step up from just pure html.
It is so much better to have a templating engine to just copy layouts around.
As you may know, it gets extremely annoying to paste your content in a small box,
and whenever you need to make a change you have to change it in all of your files.  
The reason I didn't like jekyll was because it ran on ruby. 
The only experience I had with ruby was a quarter of the code academy course, and about an hour with rails before I gave up.
It is too 'magical' for me.
<br />
## The... Adventure
This website took a few weeks to make. 
It took like 3 days to make all the css, in 3 hour intervals (css is a pain).
The hard part was pushing it to github.
Now before, I had a jekyll site running. I had updated it about 5 months prior, and only
for me to find out that it doesn't look the same on my 4k screen as it does on my friend's 1080p screen.
I set out to change this. The process went a little like this: wait 4 months, start to think about it,
actually make the website.
When I finally made the website, I pushed it to github, thinking that it would stop running on jekyll and go back to
normal html.
Well, it didn't. I checked the github pages source, and it said 'Your GitHub Pages site is currently being built from the master branch.'
I was aware of the feature that let you choose the '/docs' directory on your repo.
Long story short, (by long I mean 3 days,) github doesn't let you choose the source when you are making a home page for your user. (For me, my repository was named eoriont.github.io)
This lead to me making one repository for my site, and keeping my user page repo (eoriont.github.io) just the compiled version of the eleventy page.
And this works, even though the other way was much preferable. 
I really hope that github adds back that feature.
<br />
## Moving forward
From now on, I want to maintain this website better.
I think that it is valuable to have a blog to record what you are doing, it is sort of like a journal.
Anyways, I am going to try to make a post about once a week, and maybe tutorials as frequent as well.
I can't do that with projects, because I have a limited amount of those. (unbelievably).  
<br />
That's it for this week. If you see a typo or have something to add, you can either make a pull request or an issue on [My Github Repository](https://github.com/eoriont/site).