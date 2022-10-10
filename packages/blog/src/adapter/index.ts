import { polyfill } from "@astrojs/webapi"
import { App } from "astro/app"
import http from "http"
import { existsSync, createReadStream } from "fs"
import { resolve } from "path"
import { fileURLToPath } from "url"
import mime from "mime-types"

// Headers
polyfill(globalThis, {
  exclude: "window document",
})

//@see https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
const __filename = fileURLToPath(import.meta.url)

export function start(manifest: any) {
  const app = new App(manifest)

  const s = http.createServer(async (req, res) => {
    const url = new URL("http://localhost" + req.url)
    const request = new Request(url)
    const routeData = app.match(request)

    if (!routeData) {
      // 判定 assets
      const assetPath = resolve(__filename, "../../client" + url.pathname)

      if (existsSync(assetPath)) {
        // 需要给静态资源一个 content-type，否则无法加载
        res.setHeader("content-type", mime.lookup(assetPath) as string)
        //@see https://stackoverflow.com/questions/10046039/node-js-send-file-in-response
        createReadStream(assetPath).pipe(res, { end: true })
      }
    } else {
      const _res = await app.render(request, routeData)

      if (_res.status === 200) {
        res.write(await _res.text())
      }

      res.end()
    }
  })

  s.listen(3000)
}
