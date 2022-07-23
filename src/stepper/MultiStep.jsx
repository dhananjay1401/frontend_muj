import React from "react";
import "./MultiStep.scss";
import StepForm from "./StepForm";
import { CssBaseline, Container, Paper, Box } from "@mui/material";

function MultiStep() {
  return (
    <>
      <div className="multistep">
        <div className="container">
          {/* <div className="formse"> */}
          <Container component={Box} p={10}>
            <Paper component={Box} p={15}>
              {/* <div className="main_Text" >Registration Portal</div> */}

              <StepForm />
            </Paper>
          </Container>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default MultiStep;
