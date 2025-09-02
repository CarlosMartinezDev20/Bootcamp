import { LoginComponent } from "./components/LoginComponent"
import { RegisterComponent } from "./components/RegisterComponent"

//rafc
export const SessionView = () => {
  return (
    <div>
    Session
    <RegisterComponent />
    <LoginComponent />
    </div>
  )
}
