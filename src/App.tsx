import { useState } from "react"
import Container from "./components/Container"
import Form from "./components/Form"
import Sidebar from "./components/Sidebar"
import Steps from "./components/Steps"

const App = () => {
  const [activeStep, setActiveStep] = useState<number>(1)
  return (
    <Container>
      <Sidebar>
        <Steps activeStep={activeStep} />
      </Sidebar>
      <Form activeStep={activeStep} setActiveStep={setActiveStep} />
    </Container>
  )
}

export default App