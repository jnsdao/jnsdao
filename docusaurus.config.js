// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JNS DAO',
  tagline: '从这里开始你的web3宇宙之旅',
  url: 'https://jnsdao.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hmisty', // Usually your GitHub org/user name.
  projectName: 'odyssey', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/hmisty/odyssey-src/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/hmisty/odyssey-src/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JNS DAO',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '奥德赛',
          },
          {to: '/blog', label: '博客', position: 'left'},
		  {
			href: 'https://github.com/hmisty/jnsdao-src/wiki',
			label: '图书馆',
			position: 'left'
		  },
          {
            href: 'https://jscan.jnsdao.com',
            label: '区块链浏览器',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '奥德赛攻略',
                to: '/docs/intro',
              },
              {
                label: '图书馆',
                href: 'https://geek.yuque.com/cqbaat',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'jouleverse',
                href: '#',
              },
              {
                label: 'blockcoach',
                href: 'https://blockcoach.com',
              },
              {
                label: '刘教链',
                href: 'https://twitter.com/liujiaolian',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hmisty/jnsdao-src',
              },
            ],
          },
        ],
        copyright: `CC0 © ${new Date().getFullYear()} JNS DAO. tech support: blockcoach.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
