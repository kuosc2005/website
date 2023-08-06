// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
 
  title: 'Kathmandu University Open Source Community',
  tagline: 'KUOSC',
  
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kuosc.org.np',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kuosc2005', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'knowledgebase',
        path: 'knowledgebase',
        routeBasePath: 'knowledgebase',
        sidebarPath: require.resolve('./sidebarsKnowledgebase.js'),
      },
    ],
    
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'KUOSC',
        logo: {
          alt: 'KUOSC Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
          href: 'https://kuosc.org.np/'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Projects',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/knowledgebase/intro',
            sidebarId: 'knowledgebase',
            label: 'Knowledgebase',
            position: 'left',
          },
          {
            href: 'https://github.com/kuosc2005/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'announcementBar',
        backgroundColor: '#74e8a3',
        isCloseable: true,
        content:
          'If you would like to contribute, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kuosc2005/website">GitHub</a> ⭐ and take a look at the open issues!',
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'kuosc logo',
          src: '/img/logo.svg',
          href: 'https://kuosc.org.np/',
          height: 100,
        },
        links: [
          
          {
            title: 'Knowledgebase',
            items: [
              {
                label: 'Open School',
                to: '/docs/openschool/about',
              },
              {
                label: 'Linux Talk',
                to: '/docs/linuxtalk/about',
              },
              {
                label: 'HeNN Elibrary Deployment',
                to: '/docs/openschool/about',
              },
              {
                label: 'Localization',
                to: '/docs/openschool/about',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/kuosc',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#kuosc:matrix.org',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/kuosc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kuosc2005/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KUOSC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};



module.exports = config;
