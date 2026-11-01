// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { pluginCollapsible } from 'expressive-code-collapsible';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightThemeNext from 'starlight-theme-next';
import { createStarlightTypeDocPlugin } from 'starlight-typedoc';

const [serverStarlightTypeDoc] = createStarlightTypeDocPlugin();
const [clientStarlightTypeDoc] = createStarlightTypeDocPlugin();
const [browserStarlightTypeDoc] = createStarlightTypeDocPlugin();

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.cyber.mp',
  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics([
          {
            label: { en: 'Guides', ru: 'Гайды' },
            link: '/guides/getting-started',
            icon: 'open-book',
            items: [
              {
                label: 'Getting started',
                translations: { ru: 'С чего начать' },
                items: [
                  {
                    label: 'Introduction',
                    translations: { ru: 'Введение' },
                    slug: 'guides/getting-started',
                  },
                  {
                    label: 'Install the client',
                    translations: { ru: 'Установка клиента' },
                    slug: 'guides/getting-started/install-client',
                  },
                  {
                    label: 'Install the server',
                    translations: { ru: 'Установка сервера' },
                    slug: 'guides/getting-started/install-server',
                  },
                  {
                    label: 'Run the server',
                    translations: { ru: 'Запуск сервера' },
                    slug: 'guides/getting-started/run-server',
                  },
                  {
                    label: 'Create a resource',
                    translations: { ru: 'Создание ресурса' },
                    slug: 'guides/resources/creating-resource',
                  },
                  {
                    label: 'Set up your workspace',
                    translations: { ru: 'Настройка окружения' },
                    slug: 'guides/getting-started/workspace',
                  },
                ],
              },
              {
                label: 'Client',
                translations: { ru: 'Клиент' },
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'guides/game-client',
                  },
                  {
                    label: 'Supported platforms',
                    translations: { ru: 'Платформы' },
                    slug: 'guides/game-client/platforms',
                  },
                  {
                    label: 'System requirements',
                    translations: { ru: 'Системные требования' },
                    slug: 'guides/game-client/system-requirements',
                  },
                  {
                    label: 'Launcher',
                    translations: { ru: 'Лаунчер' },
                    slug: 'guides/game-client/launcher',
                  },
                  {
                    label: 'Direct connect',
                    translations: { ru: 'Прямое подключение' },
                    slug: 'guides/game-client/direct-connect',
                  },
                  {
                    label: 'Fast connect',
                    translations: { ru: 'Быстрое подключение' },
                    slug: 'guides/game-client/fast-connect',
                  },
                  {
                    label: 'Console',
                    translations: { ru: 'Консоль' },
                    slug: 'reference/client/console',
                  },
                ],
              },
              {
                label: 'Server',
                translations: { ru: 'Сервер' },
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'guides/dedicated-server',
                  },
                  {
                    label: 'Hardware and OS',
                    translations: { ru: 'Железо и ОС' },
                    slug: 'guides/dedicated-server/hardware',
                  },
                  {
                    label: 'Console commands',
                    translations: { ru: 'Команды консоли' },
                    slug: 'reference/server/console',
                  },
                  {
                    label: 'server.toml',
                    slug: 'reference/server/configuration',
                  },
                  {
                    label: 'CDN',
                    slug: 'guides/dedicated-server/cdn',
                  },
                ],
              },
              {
                label: 'Server Manager',
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'guides/server-manager',
                  },
                  {
                    label: 'Create a server',
                    translations: { ru: 'Создание сервера' },
                    slug: 'guides/server-manager/create-server',
                  },
                  {
                    label: 'Tokens',
                    translations: { ru: 'Токены' },
                    slug: 'guides/server-manager/tokens',
                  },
                  {
                    label: 'Plans and subscriptions',
                    translations: { ru: 'Подписки' },
                    slug: 'guides/server-manager/subscriptions',
                  },
                  {
                    label: 'Server list',
                    translations: { ru: 'Список серверов' },
                    slug: 'guides/server-manager/server-list',
                  },
                ],
              },
              {
                label: 'Concepts',
                translations: { ru: 'Концепции' },
                collapsed: true,
                items: [
                  {
                    label: 'Hashes and models',
                    translations: { ru: 'Хеши и модели' },
                    items: [
                      'guides/general/hashes',
                      'guides/general/resource-types',
                      'guides/general/appearances',
                    ],
                  },
                  {
                    label: 'resource.toml',
                    slug: 'guides/resources/resource-toml',
                  },
                  {
                    label: 'Custom assets',
                    translations: { ru: 'Кастомные ассеты' },
                    slug: 'guides/resources/adding-resource-files',
                  },
                  {
                    label: 'Lifecycle',
                    translations: { ru: 'Жизненный цикл' },
                    slug: 'guides/client/lifecycle',
                  },
                  {
                    label: 'Dimensions',
                    translations: { ru: 'Измерения' },
                    slug: 'guides/scripting/dimensions',
                  },
                  'guides/general/sync-and-meta',
                  'guides/general/troubleshooting',
                ],
              },
              {
                label: 'Freeroam',
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'guides/freeroam',
                  },
                ],
              },
            ],
          },
          {
            label: { en: 'JavaScript', ru: 'JavaScript' },
            link: '/guides/scripting/server',
            icon: 'seti:javascript',
            items: [
              {
                label: 'Server scripting',
                translations: { ru: 'Скрипты сервера' },
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'guides/scripting/server',
                  },
                  {
                    label: 'Resources',
                    translations: { ru: 'Ресурсы' },
                    collapsed: true,
                    items: [
                      {
                        label: 'Start, stop, refresh',
                        translations: { ru: 'Старт, стоп, refresh' },
                        slug: 'guides/resources/interacting-with-resources',
                      },
                      {
                        label: 'Live updates',
                        translations: { ru: 'Живые обновления' },
                        slug: 'guides/resources/live-updates',
                      },
                    ],
                  },
                  {
                    label: 'Events',
                    translations: { ru: 'События' },
                    slug: 'guides/server/events',
                  },
                  {
                    label: 'Entities',
                    translations: { ru: 'Сущности' },
                    collapsed: true,
                    items: [
                      {
                        label: 'Vehicles',
                        translations: { ru: 'Транспорт' },
                        slug: 'guides/server/vehicles',
                      },
                      {
                        label: 'Objects, peds, pickups',
                        translations: { ru: 'Объекты, педы, пикапы' },
                        slug: 'guides/server/world-entities',
                      },
                    ],
                  },
                  {
                    label: 'cybermp_core',
                    slug: 'guides/scripting/core',
                  },
                ],
              },
              {
                label: 'Client scripting',
                translations: { ru: 'Скрипты клиента' },
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'guides/scripting/client',
                  },
                  {
                    label: 'Spawn the player',
                    translations: { ru: 'Спавн игрока' },
                    slug: 'guides/client/spawning-player',
                  },
                  {
                    label: 'Teleport',
                    translations: { ru: 'Телепорт' },
                    slug: 'guides/client/teleporting-player',
                  },
                  {
                    label: 'Network ids and local entities',
                    translations: { ru: 'Сеть и локальные сущности' },
                    slug: 'guides/client/network-and-local',
                  },
                  {
                    label: 'Local storage',
                    translations: { ru: 'Локальное хранилище' },
                    slug: 'guides/scripting/local-storage',
                  },
                  {
                    label: 'Events',
                    translations: { ru: 'События' },
                    slug: 'guides/client/events',
                  },
                  {
                    label: 'Game natives',
                    translations: { ru: 'Игровые нативы' },
                    slug: 'reference/client/working-with-game-natives',
                  },
                  {
                    label: 'Observe and override',
                    translations: { ru: 'Observe и Override' },
                    collapsed: true,
                    items: [
                      {
                        label: 'Observe',
                        translations: { ru: 'Observe' },
                        slug: 'guides/client/observes',
                      },
                      {
                        label: 'Override',
                        translations: { ru: 'Override' },
                        slug: 'guides/client/overrides',
                      },
                    ],
                  },
                  {
                    label: 'UI and integrations',
                    translations: { ru: 'UI и интеграции' },
                    collapsed: true,
                    items: [
                      {
                        label: 'CEF',
                        slug: 'guides/client/first-cef-ui',
                      },
                      {
                        label: 'Discord',
                        slug: 'guides/client/discord',
                      },
                    ],
                  },
                ],
              },
              {
                label: 'Shared scripting',
                translations: { ru: 'Общий скриптинг' },
                items: [
                  {
                    label: 'API map',
                    translations: { ru: 'Карта API' },
                    slug: 'guides/general/api-map',
                  },
                  {
                    label: 'Network events and RPC',
                    translations: { ru: 'Сетевые события и RPC' },
                    slug: 'guides/general/rpc',
                  },
                  'guides/general/exports',
                  'guides/general/hotreload',
                  'guides/general/voice',
                  'guides/general/cheatsheet',
                  {
                    label: 'Runtime and API',
                    translations: { ru: 'Среда и API' },
                    collapsed: true,
                    items: [
                      'guides/general/type-safety',
                      'guides/general/js-bridge',
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: { en: 'Lua', ru: 'Lua' },
            link: '/lua/server',
            icon: 'seti:lua',
            items: [
              {
                label: 'Server scripting',
                translations: { ru: 'Скрипты сервера' },
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'lua/server',
                  },
                  {
                    label: 'Resources',
                    translations: { ru: 'Ресурсы' },
                    collapsed: true,
                    items: [
                      {
                        label: 'Start, stop, refresh',
                        translations: { ru: 'Старт, стоп, refresh' },
                        slug: 'lua/server/resources',
                      },
                      {
                        label: 'Live updates',
                        translations: { ru: 'Живые обновления' },
                        slug: 'lua/server/live-updates',
                      },
                    ],
                  },
                  {
                    label: 'Events',
                    translations: { ru: 'События' },
                    slug: 'lua/server/events',
                  },
                  {
                    label: 'Entities',
                    translations: { ru: 'Сущности' },
                    collapsed: true,
                    items: [
                      {
                        label: 'Vehicles',
                        translations: { ru: 'Транспорт' },
                        slug: 'lua/server/vehicles',
                      },
                      {
                        label: 'Objects, peds, pickups',
                        translations: { ru: 'Объекты, педы, пикапы' },
                        slug: 'lua/server/world-entities',
                      },
                      {
                        label: 'Pools and entity objects',
                        translations: { ru: 'Пулы и объекты сущностей' },
                        slug: 'lua/server/entities',
                      },
                    ],
                  },
                  {
                    label: 'cybermp_core',
                    slug: 'lua/server/core',
                  },
                  {
                    label: 'HTTP and utilities',
                    translations: { ru: 'HTTP и утилиты' },
                    slug: 'lua/server/http',
                  },
                ],
              },
              {
                label: 'Client scripting',
                translations: { ru: 'Скрипты клиента' },
                items: [
                  {
                    label: 'Overview',
                    translations: { ru: 'Обзор' },
                    slug: 'lua/client',
                  },
                  {
                    label: 'Spawn the player',
                    translations: { ru: 'Спавн игрока' },
                    slug: 'lua/client/spawning-player',
                  },
                  {
                    label: 'Teleport',
                    translations: { ru: 'Телепорт' },
                    slug: 'lua/client/teleporting-player',
                  },
                  {
                    label: 'Network ids and local entities',
                    translations: { ru: 'Сеть и локальные сущности' },
                    slug: 'lua/client/network-and-local',
                  },
                  {
                    label: 'Local storage',
                    translations: { ru: 'Локальное хранилище' },
                    slug: 'lua/client/local-storage',
                  },
                  {
                    label: 'Events',
                    translations: { ru: 'События' },
                    slug: 'lua/client/events',
                  },
                  {
                    label: 'Game natives',
                    translations: { ru: 'Игровые нативы' },
                    slug: 'lua/client/game-natives',
                  },
                  {
                    label: 'Observe and override',
                    translations: { ru: 'Observe и Override' },
                    collapsed: true,
                    items: [
                      {
                        label: 'Observe',
                        translations: { ru: 'Observe' },
                        slug: 'lua/client/observes',
                      },
                      {
                        label: 'Override',
                        translations: { ru: 'Override' },
                        slug: 'lua/client/overrides',
                      },
                    ],
                  },
                  {
                    label: 'UI and integrations',
                    translations: { ru: 'UI и интеграции' },
                    collapsed: true,
                    items: [
                      {
                        label: 'CEF',
                        slug: 'lua/client/cef',
                      },
                      {
                        label: 'Discord',
                        slug: 'lua/client/discord',
                      },
                    ],
                  },
                ],
              },
              {
                label: 'Shared scripting',
                translations: { ru: 'Общий скриптинг' },
                items: [
                  {
                    label: 'API map',
                    translations: { ru: 'Карта API' },
                    slug: 'lua/shared',
                  },
                  {
                    label: 'Network events and RPC',
                    translations: { ru: 'Сетевые события и RPC' },
                    slug: 'lua/shared/events',
                  },
                  {
                    label: 'Exports',
                    translations: { ru: 'Экспорты' },
                    slug: 'lua/shared/exports',
                  },
                  {
                    label: 'Hotreload',
                    translations: { ru: 'Hotreload' },
                    slug: 'lua/shared/hotreload',
                  },
                  {
                    label: 'Voice',
                    translations: { ru: 'Голос' },
                    slug: 'lua/shared/voice',
                  },
                  {
                    label: 'Cheatsheet',
                    translations: { ru: 'Шпаргалка' },
                    slug: 'lua/shared/cheatsheet',
                  },
                  {
                    label: 'Runtime and API',
                    translations: { ru: 'Среда и API' },
                    collapsed: true,
                    items: [
                      {
                        label: 'Numbers and hashes',
                        translations: { ru: 'Числа и хэши' },
                        slug: 'lua/shared/hashes',
                      },
                      {
                        label: 'Scheduler',
                        translations: { ru: 'Планировщик' },
                        slug: 'lua/shared/scheduler',
                      },
                      {
                        label: 'Meta',
                        translations: { ru: 'Мета' },
                        slug: 'lua/shared/meta',
                      },
                      {
                        label: 'Commands',
                        translations: { ru: 'Команды' },
                        slug: 'lua/shared/commands',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: { en: 'Recipes', ru: 'Рецепты' },
            link: '/guides/recipes',
            icon: 'puzzle',
            items: [
              'guides/recipes/spawn-vehicle',
              'guides/recipes/drop',
              'guides/recipes/npc',
              'guides/recipes/rpc-hello',
              'guides/recipes/cef-button',
            ],
          },
          {
            label: { en: 'Reference', ru: 'Справка' },
            link: '/reference',
            icon: 'information',
            items: [
              'reference',
              {
                label: 'Server',
                translations: { ru: 'Сервер' },
                items: [
                  {
                    label: 'API',
                    translations: { ru: 'API' },
                    autogenerate: { directory: 'reference/server/api' },
                    collapsed: true,
                  },
                ],
              },

              {
                label: 'Client',
                translations: { ru: 'Клиент' },
                items: [
                  {
                    label: 'API',
                    translations: { ru: 'API' },
                    autogenerate: { directory: 'reference/client/api' },
                    collapsed: true,
                  },
                ],
              },
              {
                label: 'Browser',
                translations: { ru: 'Браузер' },
                items: [
                  {
                    label: 'API',
                    translations: { ru: 'API' },
                    autogenerate: { directory: 'reference/browser/api' },
                    collapsed: true,
                  },
                ],
              },
            ],
          },
        ]),
        // starlightLinksValidatorPlugin(),
        starlightThemeNext(),
        serverStarlightTypeDoc({
          entryPoints: ['./node_modules/@cybermp/server-types/src/index.ts'],
          tsconfig: 'tsconfig.typedoc.json',
          output: 'reference/server/api',
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: 'none',
            parametersFormat: 'list',
            router: 'category',
            defaultCategory: 'Global',
            flattenOutputFiles: false,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: false,
            classPropertiesFormat: 'table',
            typeDeclarationFormat: 'table',
            interfacePropertiesFormat: 'list',
            disableSources: false,
            useHTMLAnchors: true,
          },
        }),
        clientStarlightTypeDoc({
          entryPoints: [
            './node_modules/@cybermp/client-types/precomputed/index.d.ts',
          ],
          tsconfig: 'tsconfig.typedoc.json',
          output: 'reference/client/api',
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: 'none',
            parametersFormat: 'list',
            router: 'category',
            defaultCategory: 'Global',
            flattenOutputFiles: false,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: false,
            classPropertiesFormat: 'table',
            typeDeclarationFormat: 'table',
            interfacePropertiesFormat: 'list',
            disableSources: false,
            useHTMLAnchors: true,
          },
        }),
        browserStarlightTypeDoc({
          entryPoints: ['./node_modules/@cybermp/browser-types/index.d.ts'],
          tsconfig: 'tsconfig.typedoc.json',
          output: 'reference/browser/api',
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: 'none',
            parametersFormat: 'list',
            router: 'category',
            defaultCategory: 'Global',
            flattenOutputFiles: false,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: false,
            classPropertiesFormat: 'table',
            typeDeclarationFormat: 'table',
            interfacePropertiesFormat: 'list',
            disableSources: false,
            useHTMLAnchors: true,
          },
        }),
      ],
      expressiveCode: {
        plugins: [pluginCollapsible({ lineThreshold: 25, previewLines: 10 })],
        styleOverrides: {
          borderRadius: '0.4rem',
          frames: {
            editorActiveTabIndicatorTopColor: '#e5ff00',
          },
        },
      },
      title: {
        en: 'CyberMP Docs',
        ru: 'Документация CyberMP',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ru: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      credits: false,
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'alternate',
            href: '/llms.txt',
            type: 'text/plain',
            title: 'llms.txt',
          },
        },
      ],
      components: {
        ThemeSelect: './src/components/starlight/theme-select.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
      },
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/global.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/cyber-mp',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.cyber.mp',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/cyber-mp/cybermp-docs/edit/main',
      },
    }),
  ],
  vite: {
    server: {
      host: true,
    },
  },
  redirects: {
    '/': '/guides/getting-started',
    '/ru': '/ru/guides/getting-started',
    '/rpc': '/guides/general/rpc',
    '/ru/rpc': '/ru/guides/general/rpc',
  },
});
