import Container from "./components/Container"
import Form from "./components/Form"
import Sidebar from "./components/Sidebar"
import Steps from "./components/Steps"

const App = () => {
  return (
    <Container>
      <Sidebar>
        <Steps />
      </Sidebar>
      <Form />
    </Container>
  )
}

export default App