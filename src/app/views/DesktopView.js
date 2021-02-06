import React, { useEffect } from 'react';
import { ACTIONS } from '../actions/actions';

import { useAsync } from '../Hooks/useAsync';
import AdminView from './Administrator/AdminView';

export default function DesktopView() {
  return <AdminView />;
}
