module.exports = {
  title: '毓秀合气道',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        title: '文章',
        path: '/',
        itemPermalink: '/post/:slug',
      },
    ],
    dateFormat: 'YYYY-MM-DD',
    nav: [
      {
        text: '文章',
        link: '/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'mail',
          link: 'mailto:nixeygnay@163.com',
        },
      ],
      copyright: [
        {
          text: 'CC BY-NC-SA 4.0',
          link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh'
        },
      ],
    },
    globalPagination: {
      prevText:'<',
      nextText:'>',
      lengthPerPage:'5',
      layout:'Pagination',
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'));
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600&display=swap' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com'}],
  ],
}