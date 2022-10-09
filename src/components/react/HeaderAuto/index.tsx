import { useEffect, useMemo, useRef } from "react"
import { useResize } from "../../../utils/hooks"

const HeaderAuto: React.FC = () => {
  const onScroll = useMemo(
    () => () => {
      const deltaY = window.scrollY
      if (deltaY > lastDeltaYRef.current) {
        if (deltaY > navheightRef.current) {
          navHeaderRef.current?.classList.add("need-hide")
        }
      } else {
        navHeaderRef.current?.classList.remove("need-hide")
      }

      lastDeltaYRef.current = deltaY
    },
    []
  )
  const navHeaderRef = useRef<HTMLElement | null>(null)

  const navheightRef = useRef(0)
  const lastDeltaYRef = useRef(0)

  const { width } = useResize()

  useEffect(() => {
    if (width > 768) {
      // 可能之前隐藏了菜单，这里就要去掉
      navHeaderRef.current?.classList.remove("need-hide")
      return
    }
    const navHeader = (navHeaderRef.current = document.getElementById("header"))
    navheightRef.current = navHeader?.getBoundingClientRect()?.height || 0
    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [width])

  return null
}
export default HeaderAuto
