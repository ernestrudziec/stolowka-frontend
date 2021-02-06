import React, { useState, useEffect } from 'react';
import Tree from '../../components/organisms/Tree';
import { ACTIONS } from '../../actions/actions';
import { useAsync } from '../../Hooks/useAsync';
import { TreeContext } from '../../context/context';

const AdminDatabaseView = () => {
  const [getTree, treeStatus, treeError, treeData] = useAsync(ACTIONS.GET_MAIN_TREE);

  const [treeStatusControlled, setTreeStatusControlled] = useState('pending');
  const [treeState, setTreeState] = useState();
  const [getTreeCallTimes, setGetTreeCallTimes] = useState(0);

  useEffect(() => {
    getTree();
  }, []);

  const updateTree = () => {
    getTree();
  };

  useEffect(() => {
    if (treeStatus === 'success' && getTreeCallTimes == 0) {
      setTreeState(treeData);
      setGetTreeCallTimes(1);
      setTreeStatusControlled('success');
    } else if (treeStatus == 'success') {
      setTreeState(treeData);
    }
  }, [treeStatus]);
  return (
    <TreeContext.Provider value={{ updateTree }}>
      <div className="container">
        <Tree treeData={treeState} treeStatus={treeStatusControlled} />
      </div>
    </TreeContext.Provider>
  );
};

export default AdminDatabaseView;
