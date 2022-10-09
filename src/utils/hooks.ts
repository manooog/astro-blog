import { useEffect, useMemo, useState } from "react"
import debounce from "lodash/debounce"

export function useResize() {
  const [state, setState] = useState({ width: 0, height: 0 })

  const onResize = useMemo(
    () =>
      debounce(() => {
        // console.log(window.innerWidth)

        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, 300),
    []
  )

  useEffect(() => {
    // 初始化
    onResize()
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return state
}
