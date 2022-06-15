import { pwaPlugin } from '@vuepress/plugin-pwa';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/pwa/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/pwa/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/pwa/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Rust',
      description: 'Empower everyone to build reliable and efficient software',
    },
  },
  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/logo.png',
    locales: {
      '/': {
        contributors: false,
        repoLabel: 'Source Code',
        repo: 'https://github.com/rust-lang/rust',
        editLink: false,
        navbar: [
          {
            text: 'Documentation',
            link: '/documentation/getting-started/index.md',
          },
          {
            text: 'v1.58',
            children: [
              {
                text: 'Changelog',
                link: 'https://github.com/rust-lang/rust/releases',
              },
            ],
          },
        ],
        sidebar: {
          '/documentation/': [
            {
              text: '1 Getting Started',
              link: '/documentation/getting-started/index.md',
              collapsible: true,
              children: [
                '/documentation/getting-started/installation.md',
                '/documentation/getting-started/hello-world.md',
                '/documentation/getting-started/hello-cargo.md',
              ],
            },
            {
              text: '2 Programming a Guessing Game',
              link: '/documentation/guessing-game-tutorial/index.md',
            },
            {
              text: '3 Common Programming Concepts',
              link: '/documentation/common-programming-concepts/index.md',
              collapsible: true,
              children: [
                '/documentation/common-programming-concepts/variables-and-mutability.md',
                '/documentation/common-programming-concepts/data-types.md',
                '/documentation/common-programming-concepts/how-functions-work.md',
                '/documentation/common-programming-concepts/comments.md',
                '/documentation/common-programming-concepts/control-flow.md',
              ],
            },
            {
              text: '4 Understanding Ownership',
              link: '/documentation/understanding-ownership/index.md',
              collapsible: true,
              children: [
                '/documentation/understanding-ownership/what-is-ownership.md',
                '/documentation/understanding-ownership/references-and-borrowing.md',
                '/documentation/understanding-ownership/slices.md',
              ],
            },
            {
              text: '5 Using Structs to Structure Related Data',
              link: '/documentation/structs/index.md',
              collapsible: true,
              children: [
                '/documentation/structs/defining-structs.md',
                '/documentation/structs/example-structs.md',
                '/documentation/structs/method-syntax.md',
              ],
            },
            {
              text: '6 Enums and Pattern Matching',
              link: '/documentation/enums/index.md',
              collapsible: true,
              children: [
                '/documentation/enums/defining-an-enum.md',
                '/documentation/enums/match.md',
                '/documentation/enums/if-let.md',
              ],
            },
            {
              text: '7 Managing Growing Projects with Packages, Crates, and Modules',
              link: '/documentation/managing-growing-projects-with-packages-crates-and-modules/index.md',
              collapsible: true,
              children: [
                '/documentation/managing-growing-projects-with-packages-crates-and-modules/packages-and-crates.md',
                '/documentation/managing-growing-projects-with-packages-crates-and-modules/defining-modules-to-control-scope-and-privacy.md',
                '/documentation/managing-growing-projects-with-packages-crates-and-modules/paths-for-referring-to-an-item-in-the-module-tree.md',
                '/documentation/managing-growing-projects-with-packages-crates-and-modules/bringing-paths-into-scope-with-the-use-keyword.md',
                '/documentation/managing-growing-projects-with-packages-crates-and-modules/separating-modules-into-different-files.md',
              ],
            },
            {
              text: '8 Common Collections',
              link: '/documentation/common-collections/index.md',
              collapsible: true,
              children: [
                '/documentation/common-collections/vectors.md',
                '/documentation/common-collections/strings.md',
                '/documentation/common-collections/hash-maps.md',
              ],
            },
            {
              text: '9 Error Handling',
              link: '/documentation/error-handling/index.md',
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
});
