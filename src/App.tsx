import Container from "./components/Container"
import Sidebar from "./components/Sidebar"
import Steps from "./components/Steps"

const App = () => {
  return (
    <Container>
      <Sidebar>
        <Steps />
      </Sidebar>
    </Container>
  )
}

export default App