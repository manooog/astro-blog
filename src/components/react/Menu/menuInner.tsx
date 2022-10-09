import Mask from "../Mask"

import { mergeClassName } from "../../../utils/classname"
import styles from "./menuInner.module.css"
import noop from "lodash/noop"
import ThemeButton from "../ThemeButton"

const menus = [
  { title: "Blog", url: "/all-post" },
  { title: "About", url: "/about" },
]

const MenuInner: React.FC<{
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
}> = ({ visible, onVisibleChange = noop }) => {
  return (
    <>
      <div
        className={mergeClassName(styles.wrapper, visible && styles.visible)}
      >
        <header className="flex justify-between items-center px-6">
          <ThemeButton />
          <div
            className={mergeClassName(styles.svgContainer)}
            onClick={() => {
              onVisibleChange(!visible)
            }}
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
            >
              <path
                d="M512 570.88l196.864 196.8 58.88-58.88L570.752 512l196.864-196.864-58.88-58.88L512 453.248 315.136 256.32l-58.88 58.88L453.248 512l-196.864 196.864 58.88 58.88L512 570.752z"
                fill="#000000"
              ></path>
            </svg>
          </div>
        </header>

        <section className="p-6 flex flex-col">
          {menus.map((menu) => (
            <div key={menu.url} className="mb-2">
              <a href={menu.url}>{menu.title}</a>
            </div>
          ))}
        </section>
      </div>
      <Mask visible={visible} />
    </>
  )
}
export default MenuInner
