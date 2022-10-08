export async function post({ request }: { request: Request }) {
  const body = await request.text()

  const bJson = JSON.parse(body)

  let headers = {}

  if (
    bJson.u === import.meta.env.SECRET_USERNAME &&
    bJson.p === import.meta.env.SECRET_PASSWORD
  ) {
    // 登录

    headers = {
      "Set-Cookie": "ks=fuck-me;Path=/;Max-Age=6000;SameSite=Lax",
    }
  }
  return new Response(request.body, {
    status: 200,
    headers,
  })
}
