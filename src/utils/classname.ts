/**
 * 合并 class
 */
export function mergeClassName(
  ...classnames: Array<string | boolean | undefined>
) {
  return classnames.filter(Boolean).join(" ")
}
