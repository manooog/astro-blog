import { PropsWithChildren, useEffect, useRef } from "react"
import { mergeClassName } from "../../../utils/classname"
import styles from "./index.module.css"

const Mask: React.FC<PropsWithChildren<{ visible?: boolean }>> = ({
  children,
  visible,
}) => {
  const htmlRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    htmlRef.current = document.querySelector("html")
  }, [])

  useEffect(() => {
    if (visible) {
      htmlRef.current?.classList.add("not-scroll")
    } else {
      htmlRef.current?.classList.remove("not-scroll")
    }
  }, [visible])
  return (
    <div className={mergeClassName(styles.mask, visible && styles.visible)}>
      {children}
    </div>
  )
}
export default Mask
