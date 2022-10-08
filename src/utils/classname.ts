/**
 * 合并 class
 */
export function mergeClassName(...classnames: Array<string | boolean>) {
  return classnames.filter(Boolean).join(" ")
}
