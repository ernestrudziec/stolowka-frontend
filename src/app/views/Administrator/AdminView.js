import React, { useEffect, useState } from 'react';

import { Collapse } from 'react-collapse';
import Tree from '../../components/organisms/Tree';
import { compareJSON } from '../../helpers/getObjectDiff';
import NavigationBar from '../../components/organisms/NavigationBar';
import Logo from '../../components/atoms/Logo';
import Header from '../../components/organisms/Header';
import AdminDatabaseView from './AdminDatabaseView';
import AdminDesktopView from './AdminDesktopView';
import AdminCalendarView from './AdminCalendarView';

export default function AdminView() {
  const [activeView, setActiveView] = useState(1);

  const view = (activeView) => {
    let view = <AdminDesktopView />;

    switch (activeView) {
      case 1:
        view = <AdminCalendarView />;
        break;
      case 2:
        view = <AdminDesktopView />;
        break;
      case 3:
        view = <AdminDatabaseView />;
        break;
    }

    return view;
  };

  return (
    <>
      <Header />
      <NavigationBar activeView={activeView} setActiveView={setActiveView} />
      <div className="admin-view">{view(activeView)}</div>
    </>
  );
}
