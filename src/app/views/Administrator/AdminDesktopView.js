import React, { useEffect } from 'react';
import { ACTIONS } from '../../actions/actions';
import { useAsync } from '../../Hooks/useAsync';
import { Collapse } from 'react-collapse';
import Tree from '../../components/organisms/Tree';

export default function AdminDesktopView() {
  const [getTree, getTreeStatus, getTreeError, getTreeData] = useAsync(ACTIONS.GET_MAIN_TREE);

  useEffect(() => {
    getTree();
  }, []);

  useEffect(() => {
    console.log(getTreeStatus);

    if (getTreeStatus === 'success') {
      console.log(getTreeData);
    }
  }, [getTreeStatus]);

  return (
    <div className="admin-desktop-view">
      <div className="container">
        <Tree treeData={getTreeData} treeStatus={getTreeStatus} />
      </div>
    </div>
  );
}
