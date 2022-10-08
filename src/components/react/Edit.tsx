import type React from "react"
import { useStore } from "@nanostores/react"
import { isLogin } from "../../stores/user"

const Edit: React.FC = () => {
  const $isLoing = useStore(isLogin)

  console.log($isLoing, 1212)

  return $isLoing ? (
    <button className="ml-4" onClick={() => {}}>
      Edit
    </button>
  ) : (
    <i />
  )
}
export default Edit
