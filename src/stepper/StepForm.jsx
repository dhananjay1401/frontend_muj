import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import { Typography, TextField, Step, StepLabel } from "@mui/material";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";
import Box from "@mui/material/Box";




const the = createTheme({
  palette: {
    primary: {
      main: "#f4511e",
    },
    secondary: {
      main: "#f44336",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(45),
    primary: {
      main: "#f4511e",
    },
    secondary: {
      main: "#f44336",
    },
  },
  multilineColor: {
    color: "red",
  },
}));
function getSteps() {
  return [
    "Account Details",
    "Academic Details",
    "Domain Details",
    "Terms and Conditions",
  ];
}

function getStepContent(step) {

 


  switch (step) {
    case 0:
      return (
        <>
          <Typography variant="h6" align="Center">
            Getting Started
          </Typography>
          <br />
          {/* <ThemeProvider theme={the}> */}
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              name="firstName"
              
            />
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              name="lastName"
            />
            <TextField
              id="nick-name"
              label="Nick Name"
              variant="outlined"
              placeholder="Enter Your Nick Name"
              fullWidth
              margin="normal"
              name="nickName"
            />
          {/* </ThemeProvider> */}
        </>
      );
    case 1:
      return (
        <>
          <Typography variant="h6" align="Center">
            Fill the Acadmic Details
          </Typography>
          <br />

          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            name="emailAddress"
            style={{borderRadius: "30px"}}

          />
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"
          />
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            name="alternatePhone"
          />
        </>
      );
    case 2:
      return (
        <>
          <Typography variant="h6" align="Center">
            Fill the Domain Details
          </Typography>
          <br />
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
        </>
      );
    case 3:
      return (
        <>
          <Typography variant="h6" align="Center">
            Last Step
          </Typography>
          <br />
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"
          />
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            name="cardMonth"
          />
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            name="cardYear"
          />
        </>
      );
  }
}

function StepForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  return (
    <>
      <ThemeProvider theme={the}>
        <Stepper alternativeLabel activeStep={activeStep} color="primary">
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  Optional
                </Typography>
              );
            }

            return (
              <Step {...stepProps} key={index} color="primary">
                <StepLabel {...labelProps} color="primary">
                  {step}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </ThemeProvider>
      <div></div>
      {/* <form>
        {getStepContent(activeStep)}
      </form> */}
      {activeStep === steps.length ? (
        <Typography variant="h3" align="Center">
          Thanks for Registering
        </Typography>
      ) : (
        <>
          <br />
          <Box
            component="form"
            // sx={{
            //   "& .MuiTextField-root": { m: 1, width: "25ch" , marginLeft: "10px"},
            // }}
            sx={{
              // display: 'flex-box',
              // justifyContent: 'center',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              "& .MuiTextField-root": {
                m: 1,
                width: "70ch",
              },
            }}
            noValidate
            autoComplete="off"
          >          <ThemeProvider theme={the}>

            {getStepContent(activeStep)}
            </ThemeProvider>
          </Box>

          <br />
          <Box
            sx={{
              display: "flex-box",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            {" "}
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <ThemeProvider theme={the}>

              {/* {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  color="primary"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )} */}
              <Button
                className={classes.button}
                onClick={handleNext}
                color="primary"
                variant="contained"
                style={{borderRadius: "30px" , width: "50px"}}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </ThemeProvider>
          </Box>
        </>
      )}
    </>
  );
}

export default StepForm;
