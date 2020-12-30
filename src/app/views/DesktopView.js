import React, { useEffect } from 'react';
import { ACTIONS } from '../actions/actions';

import { useAsync } from '../Hooks/useAsync';
import AdminDesktopView from './Administrator/AdminDesktopView';

export default function DesktopView() {
  return <AdminDesktopView />;
}
