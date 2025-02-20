---
title: Astro Portfolio
description: How I created and now host my own public Website for next to nothing
date: 2025-02-20
tags: ['web', 'cicd', 'astro', 'static']
---

Hosting your own portfolio often seems like the first step in creating your own
presence on the web. As someone who really likes the original idea of the
internet being a network of knowledge[^1], this idea is often realized in form
of a selfmade website that shows accompolishments, but also works as a kind of blog.
Recent neoliberal social media companies, such as [Meta](https://about.meta.com/de/) and [Twitter](https://about.x.com/en), work diametrical
against this idea by shutting down crosslinkages and encouraging locking each user in 
their respective ecosystem in order to create maximum profits.

I therefore want to teach you how I created and hosted this exact website. And the
best part is that my only expense is for my own domain that I had lying around anyway.
I split up this tutorial in three topics.

- [Astro](#astro) deals with the implementation of the Website in general
- [CI/CD](#cicd) shows how i get Github to render and deploy my site directly to Github Pages
- [Domain](#domain) shows how I set up my DNS routes to use my own domain

# Astro

There is no backend to this website. Each page get rendered on deployment and is then
available as a static webpage. [Astro](https://astro.build/) therefore seemed like a good fit for me.
I dont need the hassle of configuring some CMS[^2] and could also decide on a minimal 
Datamodel. I decided that I wanted to show my current and past jobs and projects that I worked
on as well as some blog entries that would write sporadically whenever I felt like it.

In general each of my Datatypes (Job, Project and Post) exists as a Markdown file that I
can then style using [Tailwind](https://tailwindcss.com/). All Metadata is contained in
each file in form of frontmatter. In case you ever used something like Obsidian this might be
familiar to you.

```markdown
---
title: a title
description: a description
date: 2025-02-20
tags: ['a', 'tag']
---

Your content goes here
```

I then declared the collectiontype in `content/config.js`

```js
const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    date: z.date().optional()
  })
});

export const collections = {
    'project': projectCollection
};
```

For the rendering of tags I simply created a set of all
present tags in each Markdown file

```js
const allPosts: { frontmatter: { tags: string[] } }[] = Object.values(
    import.meta.glob("../../content/*/*.md", { eager: true }) as Record<
        string,
        { frontmatter: { tags: string[] } }
    >,
);
const allTags = [
    ...new Set(allPosts.flatMap((post) => post.frontmatter?.tags)),
].sort();
```

# CI/CD

There is a Github Actions definition present that runs whenever there is a 
new push to the `main` branch. That workflow checks out my repository, build the
static page using Astros own build action an then deploys this artifact
to Github Pages. Make sure to enable Actions in your repository!

I addition I use dependabot to receive Notification on new package releases and
vulnerabilites. Though especially the latter is more of a nice to have thing in 
my case.

# Domain

If you deploy to Github pages your domain probaly looks something like
`yourrepo.yourusername.github.io`. In case you want your own domain to link
to this static webpage you need to change the `A` and `AAAA` record of
your DNS config to the respective IP-Addresses. You can find these IP-Adresses
in the settings of your own Github repository.

[^1]: https://en.wikipedia.org/wiki/Internet
[^2]: https://en.wikipedia.org/wiki/Content_management_system