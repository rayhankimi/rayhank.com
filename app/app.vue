<script setup lang="ts">
import { siteContent } from '~~/sitecontent'

const { meta, seo } = siteContent

const colorVars = Object.entries(siteContent.colors)
  .map(([name, hex]) => `--site-${name}: ${hex}`)
  .join('; ')

const ogImage = `${seo.siteUrl}${seo.ogImage}`

useHead({
  title: meta.title,
  htmlAttrs: { lang: meta.lang, style: colorVars },
  bodyAttrs: { class: 'm-0 bg-charcoal text-paper font-body' },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: seo.siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: seo.person.name,
        alternateName: seo.person.alternateName,
        url: seo.siteUrl,
        email: `mailto:${seo.person.email}`,
        sameAs: seo.person.sameAs,
        jobTitle: seo.person.jobTitle,
        worksFor: { '@type': 'Organization', name: seo.person.worksFor },
        knowsAbout: seo.person.knowsAbout,
        description: seo.person.description,
      }),
    },
  ],
})

useSeoMeta({
  description: seo.description,
  keywords: seo.keywords.join(', '),
  author: seo.author,
  robots: 'index, follow',
  themeColor: seo.themeColor,
  ogType: 'website',
  ogTitle: meta.title,
  ogDescription: seo.ogDescription,
  ogUrl: seo.siteUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterCreator: seo.twitterCreator,
  twitterTitle: meta.title,
  twitterDescription: seo.twitterDescription,
  twitterImage: ogImage,
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <main>
      <HeroSection />
      <AboutSection />
    </main>
    <SiteFooter />
  </div>
</template>
