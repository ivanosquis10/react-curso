import React from 'react';
import { Button } from '../Button';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return <Button toggleShow={toggleShow} />;
  } else {
    return null;
  }
}

export { ChangeAlert };
