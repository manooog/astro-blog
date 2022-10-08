import { mergeClassName } from "../../../utils/classname"
import styles from "./index.module.css"

export interface Heading {
  depth: number
  slug: string
  text: string
}

const TableOfContent: React.FC<{ headings: Heading[] }> = function ({
  headings,
}) {
  if (headings.length === 0) return null
  return (
    <div className={mergeClassName(styles.tableOfContent, "lg:block hidden")}>
      <p>目录</p>

      <section className={mergeClassName(styles.headingBlock, "flex flex-col")}>
        {headings.map((head) => {
          return (
            <a style={{ paddingLeft: 8 * head.depth }} href={"#" + head.slug}>
              {head.text}
            </a>
          )
        })}
      </section>
    </div>
  )
}

export default TableOfContent
