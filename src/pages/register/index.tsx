import { useMemo, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { isMobile } from 'react-device-detect';

import {
  Save as SaveIcon,
  Lock as LockIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBackIcon,
} from '@mui/icons-material';

import { Step } from '../../models/step';

import { Card } from '../../components/surfaces';
import { Button, LoadingButton } from '../../components/buttons';
import { Container } from '../../components/layouts';
import { Stepper } from '../../components/navigations';

import UserAccountData from './UserAccountData';
import UserPersonalData from './UserPersonalData';
import UserAddressData from './UserAddressData';

const steps: Step[] = [
  {
    description: 'Lock',
    icon: <LockIcon />,
  },
  {
    description: 'Person',
    icon: <PersonIcon />,
  },
  {
    description: 'Video',
    icon: <HomeIcon />,
  },
];

const pages: { [key: number]: JSX.Element } = {
  0: <UserAccountData />,
  1: <UserPersonalData />,
  2: <UserAddressData />,
};

const Register = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const currentPageStep = useMemo(() => pages[activeStep], [activeStep]);

  const handleNext = () => {
    if (activeStep === 2) {
      return;
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }

    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Box sx={{ maxWidth: 700 }}>
          <Card>
            <Box sx={{ marginBottom: 2 }}>
              <Stepper steps={steps} activeStep={activeStep} />
            </Box>
            {currentPageStep}
            <Box sx={{ marginTop: 2 }}>
              <Grid container spacing={1} justifyContent='flex-end'>
                <Grid item xs={isMobile ? 6 : 3}>
                  {activeStep > 0 && (
                    <Button
                      size='large'
                      variant='outlined'
                      description='BACK'
                      startIcon={<NavigateBackIcon />}
                      onClick={handleBack}
                    />
                  )}
                </Grid>
                <Grid item xs={isMobile ? 6 : 3}>
                  {activeStep === 2 ? (
                    <LoadingButton
                      size='large'
                      description='SAVE'
                      type='submit'
                      loading={loading}
                      disabled
                      icon={<SaveIcon />}
                    />
                  ) : (
                    <Button
                      size='large'
                      description='NEXT'
                      onClick={handleNext}
                      endIcon={<NavigateNextIcon />}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Container>
    </form>
  );
};

export default Register;
