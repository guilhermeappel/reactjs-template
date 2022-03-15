import * as React from 'react';
import { styled } from '@mui/system';

import {
  Stepper as MuiStepper,
  Stack as MuiStack,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  StepConnector as MuiStepConnector,
  StepIconProps as MuiStepIconProps,
} from '@mui/material';

import { stepConnectorClasses as muiStepConnectorClasses } from '@mui/material/StepConnector';

import { Step } from '../../models/step';

interface Props {
  steps: Step[];
  activeStep: number;
}

const ColorlibConnector = styled(MuiStepConnector)(({ theme }) => ({
  [`&.${muiStepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${muiStepConnectorClasses.active}`]: {
    [`& .${muiStepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(136deg, rgba(30,65,242,1) 0%, rgba(39,62,178,1) 50%, rgba(0,85,141,1) 100%);',
    },
  },
  [`&.${muiStepConnectorClasses.completed}`]: {
    [`& .${muiStepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(136deg, rgba(30,65,242,1) 0%, rgba(39,62,178,1) 50%, rgba(0,85,141,1) 100%);',
    },
  },
  [`& .${muiStepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(136deg, rgba(30,65,242,1) 0%, rgba(39,62,178,1) 50%, rgba(0,85,141,1) 100%);',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(136deg, rgba(30,65,242,1) 0%, rgba(39,62,178,1) 50%, rgba(0,85,141,1) 100%);',
  }),
}));

const ColorlibStepIcon = (props: MuiStepIconProps) => {
  const { active, icon, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icon}
    </ColorlibStepIconRoot>
  );
};

const Stepper = ({ steps, activeStep }: Props) => {
  return (
    <MuiStack sx={{ width: '100%' }} spacing={4}>
      <MuiStepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(({ description, icon }) => (
          <MuiStep key={description}>
            <MuiStepLabel
              StepIconProps={{ icon }}
              StepIconComponent={ColorlibStepIcon}
            >
              {description}
            </MuiStepLabel>
          </MuiStep>
        ))}
      </MuiStepper>
    </MuiStack>
  );
};

export default Stepper;
