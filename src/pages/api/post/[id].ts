export async function get({ params }: { params: { id: number } }) {
  const { id } = params
  const product = await Promise.resolve(null)

  if (!product) {
    return new Response("fuck", {
      status: 200,
      statusText: "Not found111",
    })
  }

  return new Response(JSON.stringify(product), {
    status: 200,
  })
}
