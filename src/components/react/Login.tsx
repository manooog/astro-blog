import type React from "react"
import { useStore } from "@nanostores/react"
import { isLogin } from "../../stores/user"

const Login: React.FC = () => {
  const $isLoing = useStore(isLogin)
  return (
    <button
      onClick={() => {
        isLogin.set(true)
      }}
    >
      {!$isLoing ? "Login" : "Logout"}
    </button>
  )
}
export default Login
