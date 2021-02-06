import React, { useEffect, useState } from 'react';
import { ACTIONS } from '../../actions/actions';
import { useAsync } from '../../Hooks/useAsync';
import { Collapse } from 'react-collapse';
import Tree from '../../components/organisms/Tree';
import { TreeContext } from '../../context/context';
import { compareJSON } from '../../helpers/getObjectDiff';
import NavigationBar from '../../components/organisms/NavigationBar';
import Logo from '../../components/atoms/Logo';
import Header from '../../components/organisms/Header';

export default function AdminDesktopView({ treeData, treeStatus }) {
  return (
    <div className="container">
      <Tree treeData={treeData} treeStatus={treeStatus} />
    </div>
  );
}
