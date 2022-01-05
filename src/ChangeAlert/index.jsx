import React from 'react';
import { Button } from '../Button';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return <Button toggleShow={toggleShow} />;
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
