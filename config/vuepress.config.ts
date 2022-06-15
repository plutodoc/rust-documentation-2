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
              collapsible: true,
              children: [
                '/documentation/error-handling/unrecoverable-errors-with-panic.md',
                '/documentation/error-handling/recoverable-errors-with-result.md',
                '/documentation/error-handling/to-panic-or-not-to-panic.md',
              ],
            },
            {
              text: '10 Generic Types, Traits, and Lifetimes',
              link: '/documentation/generics/index.md',
              collapsible: true,
              children: [
                '/documentation/generics/syntax.md',
                '/documentation/generics/traits.md',
                '/documentation/generics/lifetime-syntax.md',
              ],
            },
            {
              text: '11 Writing Automated Tests',
              link: '/documentation/testing/index.md',
              collapsible: true,
              children: [
                '/documentation/testing/writing-tests.md',
                '/documentation/testing/running-tests.md',
                '/documentation/testing/test-organization.md',
              ],
            },
            {
              text: '12 An I/O Project: Building a Command Line Program',
              link: '/documentation/an-io-project/index.md',
              collapsible: true,
              children: [
                '/documentation/an-io-project/accepting-command-line-arguments.md',
                '/documentation/an-io-project/reading-a-file.md',
                '/documentation/an-io-project/improving-error-handling-and-modularity.md',
                '/documentation/an-io-project/testing-the-librarys-functionality.md',
                '/documentation/an-io-project/working-with-environment-variables.md',
                '/documentation/an-io-project/writing-to-stderr-instead-of-stdout.md',
              ],
            },
            {
              text: '13 Functional Language Features: Iterators and Closures',
              link: '/documentation/functional-features/index.md',
              collapsible: true,
              children: [
                '/documentation/functional-features/closures.md',
                '/documentation/functional-features/iterators.md',
                '/documentation/functional-features/improving-our-io-project.md',
                '/documentation/functional-features/performance.md',
              ],
            },
            {
              text: '14 More About Cargo and Crates.io',
              link: '/documentation/more-about-cargo/index.md',
              collapsible: true,
              children: [
                '/documentation/more-about-cargo/release-profiles.md',
                '/documentation/more-about-cargo/publishing-to-crates-io.md',
                '/documentation/more-about-cargo/cargo-workspaces.md',
                '/documentation/more-about-cargo/installing-binaries.md',
                '/documentation/more-about-cargo/extending-cargo.md',
              ],
            },
            {
              text: '15 Smart Pointers',
              link: '/documentation/smart-pointers/index.md',
              collapsible: true,
              children: [
                '/documentation/smart-pointers/box.md',
                '/documentation/smart-pointers/deref.md',
                '/documentation/smart-pointers/drop.md',
                '/documentation/smart-pointers/rc.md',
                '/documentation/smart-pointers/interior-mutability.md',
                '/documentation/smart-pointers/reference-cycles.md',
              ],
            },
            {
              text: '16 Fearless Concurrency',
              link: '/documentation/concurrency/index.md',
              collapsible: true,
              children: [
                '/documentation/concurrency/threads.md',
                '/documentation/concurrency/message-passing.md',
                '/documentation/concurrency/shared-state.md',
                '/documentation/concurrency/extensible-concurrency-sync-and-send.md',
              ],
            },
            {
              text: '17 Object Oriented Programming Features of Rust',
              link: '/documentation/oop/index.md',
              collapsible: true,
              children: [
                '/documentation/oop/what-is-oo.md',
              ],
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
