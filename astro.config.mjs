// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { pluginCollapsible } from "expressive-code-collapsible";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightThemeNext from "starlight-theme-next";
import { createStarlightTypeDocPlugin } from "starlight-typedoc";
import mermaid from "astro-mermaid";

const [serverStarlightTypeDoc] = createStarlightTypeDocPlugin();
const [clientStarlightTypeDoc] = createStarlightTypeDocPlugin();
const [browserStarlightTypeDoc] = createStarlightTypeDocPlugin();

// https://astro.build/config
export default defineConfig({
  site: "https://docs.cyber.mp",
  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics(
          [
            {
              label: "Guides and recipes",
              link: "/guides/introduction",
              icon: "open-book",
              items: [
                "guides/introduction",
                "guides/getting-started",
                {
                  label: "Resources",
                  items: [
                    "guides/resources/introduction",
                    "guides/resources/creating-resource",
                    "guides/resources/interacting-with-resources",
                    "guides/resources/live-updates",
                    "guides/resources/adding-resource-files",
                    "guides/resources/exports",
                  ],
                },
                {
                  label: "Server",
                  items: [
                    "guides/server/players",
                    "guides/server/vehicles",
                    "guides/server/entities",
                    "guides/server/events",
                    "guides/server/commands",
                    "guides/server/meta",
                    "guides/server/hashes",
                    "guides/server/cdn",
                  ],
                },
                {
                  label: "Client",
                  items: [
                    "guides/client/spawning-player",
                    "guides/client/teleporting-player",
                    "guides/client/events",
                    "guides/client/first-cef-ui",
                    "guides/client/lifecycle",
                    "guides/client/observes",
                    "guides/client/overrides",
                    "guides/client/network-ids",
                    "guides/client/local-entities",
                    "guides/client/local-storage",
                    "guides/client/discord",
                  ],
                },
                // {
                //   label: "Recipes",
                //   items: [
                //     "guides/recipes/typescript",
                //     "guides/recipes/hotreload",
                //     "guides/recipes/rpc",
                //   ],
                // },
              ],
            },
            {
              label: "Reference",
              link: "/reference/server/configuration",
              icon: "information",
              items: [
                {
                  label: "Server",
                  items: [
                    {
                      label: "JS API",
                      autogenerate: { directory: "reference/server/api" },
                      collapsed: true,
                    },
                    {
                      label: "Lua API",
                      items: ["reference/lua/server"],
                      collapsed: true,
                    },
                    "reference/server/configuration",
                    "reference/server/resource-configuration",
                    "reference/server/console",
                  ],
                },

                {
                  label: "Client",
                  items: [
                    {
                      label: "JS API",
                      autogenerate: { directory: "reference/client/api" },
                      collapsed: true,
                    },
                    {
                      label: "Lua API",
                      items: ["reference/lua/client"],
                      collapsed: true,
                    },
                    "reference/client/working-with-game-natives",
                  ],
                },
                {
                  label: "Browser",
                  items: [
                    {
                      label: "JS API",
                      autogenerate: { directory: "reference/browser/api" },
                      collapsed: true,
                    },
                  ],
                },
              ],
            },
          ],
          { exclude: ["/guides/recipes/*"] },
        ),
        // starlightLinksValidatorPlugin(),
        starlightThemeNext(),
        serverStarlightTypeDoc({
          entryPoints: ["./node_modules/@cybermp/server-types/src/index.ts"],
          tsconfig: "tsconfig.typedoc.json",
          output: "reference/server/api",
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: "none",
            parametersFormat: "list",
            router: "category",
            defaultCategory: "Global",
            flattenOutputFiles: false,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: false,
            classPropertiesFormat: "table",
            typeDeclarationFormat: "table",
            interfacePropertiesFormat: "list",
            disableSources: false,
            useHTMLAnchors: true,
          },
        }),
        clientStarlightTypeDoc({
          entryPoints: [
            "./node_modules/@cybermp/client-types/precomputed/index.d.ts",
          ],
          tsconfig: "tsconfig.typedoc.json",
          output: "reference/client/api",
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: "none",
            parametersFormat: "list",
            router: "category",
            defaultCategory: "Global",
            flattenOutputFiles: false,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: false,
            classPropertiesFormat: "table",
            typeDeclarationFormat: "table",
            interfacePropertiesFormat: "list",
            disableSources: false,
            useHTMLAnchors: true,
          },
        }),
        browserStarlightTypeDoc({
          entryPoints: ["./node_modules/@cybermp/browser-types/index.d.ts"],
          tsconfig: "tsconfig.typedoc.json",
          output: "reference/browser/api",
          typeDoc: {
            githubPages: false,
            hideGenerator: true,
            readme: "none",
            parametersFormat: "list",
            router: "category",
            defaultCategory: "Global",
            flattenOutputFiles: false,
            hidePageHeader: true,
            hidePageTitle: true,
            hideBreadcrumbs: true,
            useCodeBlocks: false,
            classPropertiesFormat: "table",
            typeDeclarationFormat: "table",
            interfacePropertiesFormat: "list",
            disableSources: false,
            useHTMLAnchors: true,
          },
        }),
      ],
      expressiveCode: {
        plugins: [pluginCollapsible({ lineThreshold: 25, previewLines: 10 })],
      },
      title: "CyberMP Docs",
      credits: false,
      components: {
        ThemeSelect: "./src/components/starlight/theme-select.astro",
      },
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/cyber-mp",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.cyber.mp",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/cyber-mp/cybermp-docs/edit/main",
      },
    }),
    mermaid({
      theme: "base",
      autoTheme: true,
    }),
  ],
  vite: {
    server: {
      host: true,
    },
  },
  redirects: {
    "/": "/guides/introduction",
    "/guides/client/network-and-local": "/guides/client/network-ids",
  },
});
