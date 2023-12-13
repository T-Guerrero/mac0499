const { description } = require('../../package')

module.exports = {
  title: 'MAC0499 - Capstone Project',
  description: description,
  base: '/mac0499/',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "icon", href: "/favicon.ico" }]
  ],

  theme: 'default-prefers-color-scheme',
  themeConfig: {
    repo: 'https://github.com/Digi-Dojo',
    repoLabel: 'Code',
    docsRepo: 'https://github.com/T-Guerrero/mac0499',
    docsDir: 'docs/src',
    docsBranch: 'main',
    editLinks: true,
    lastUpdated: true,
    smoothScroll: true,
    prefersTheme: 'dark',
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      { 
        text: 'Proposal',
        link: '/Proposal',
      },
      {
        text: 'Monography',
        link: '/monography',
      },
      {
        text: 'Presentation',
        link: '/presentation',
      }
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['social-share', {
      networks: ['twitter', 'telegram', 'whatsapp']
    }]
  ]
}
