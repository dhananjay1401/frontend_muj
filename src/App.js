import Login from "./login/Login"
// import Register from "./Register";
// import { CssBaseline, Container, Paper, Box } from '@mui/material';

import MultiStep from "./stepper/MultiStep";

// import StepForm from "./stepper/StepForm";
function App() {
  return (
    <>
      {/* <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <StepForm />
        </Paper>
      </Container> */}
<Login />
      {/* <MultiStep /> */}
    </>
  );
}

export default App;
