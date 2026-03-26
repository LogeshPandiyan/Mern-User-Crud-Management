// import "bootstrap/dist/css/bootstrap.min.css"
import UserPage from "./features/UserPage"
import { Toaster } from "sonner";
import "./index.css"



const App = () => {
  return (
    <>
    <Toaster position="bottom-left" richColors />
    <UserPage/>
    </>
  )
}

export default App