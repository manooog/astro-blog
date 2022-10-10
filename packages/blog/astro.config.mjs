import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import { resolve } from "path"
import remarkToc from "remark-toc"

import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

function getAdapter(args = {}) {
  return {
    name: "myAdapter",
    serverEntrypoint: resolve("./src/adapter/index.ts"),
    // exports: ["handler"],
    args,
  }
}

function myAdapter() {
  let _config

  return {
    name: "myAdapterIntegration",
    hooks: {
      "astro:config:done": ({ config, setAdapter }) => {
        setAdapter(getAdapter())
        _config = config
      },
    },
  }
}

// https://astro.build/config
export default defineConfig({
  site: "https://www.35iter.cn",
  integrations: [mdx(), sitemap(), tailwind(), react()],

  // build: {
  //   format: "file",
  // },

  markdown: {
    shikiConfig: {
      theme: "dracula",
    },

    remarkPlugins: [remarkToc],

    extendDefaultPlugins: true,
  },
})
