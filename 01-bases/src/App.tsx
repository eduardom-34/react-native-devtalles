// import { BasicType } from './typescript/BasicType'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { Counter } from "./components/Counter"
// import { BasicFunctions } from './typescript/BasicFunctions'
// import { LoginPage } from "./components/LoginPage"
// import { UsersPage } from "./components/UsersPage"


import { FormsPage } from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"



function App() {


  return (

    <AuthProvider>

    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className='text-4xl mb-5'>React + TS</h1>

      {/* <BasicType></BasicType> */}
      {/* <ObjectLiterals></ObjectLiterals> */}
      {/* <BasicFunctions></BasicFunctions> */}
      {/* <Counter></Counter> */}
      {/* <LoginPage></LoginPage> */}
      {/* <UsersPage></UsersPage> */}
      <FormsPage/>

    </div>
    </AuthProvider>
  )
}

export default App
