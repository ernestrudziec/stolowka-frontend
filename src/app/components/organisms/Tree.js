import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';
import AddTreeElementBar from '../atoms/Tree/AddTreeElementBar';
import TreeElementBar from '../atoms/Tree/TreeElementBar';

const TreeElementGroup = ({ group, isBranchCollapsed }) => {
  // useEffect(() => {
  //   console.log(group);
  // }, []);

  return <TreeElementBar type={'GROUP'} name={group.name} />;
};

const TreeElementUnit = ({ unit, isBranchCollapsed }) => {
  const [isOpened, setIsOpened] = useState(false);

  // useEffect(() => {
  //   console.log(unit);
  // }, []);

  useEffect(() => {
    if (isBranchCollapsed === false) {
      setIsOpened(false);
    }
  }, [isBranchCollapsed]);

  return (
    <>
      <TreeElementBar isOpened={isOpened} onClick={() => setIsOpened(!isOpened)} name={unit.name} type={'UNIT'} />

      <Collapse isOpened={isOpened}>
        {unit?.groups.map((group) => {
          return <TreeElementGroup group={group} />;
        })}
        <AddTreeElementBar type={'GROUP'} />
      </Collapse>
    </>
  );
};

const TreeElementCity = ({ city }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <TreeElementBar isOpened={isOpened} onClick={() => setIsOpened(!isOpened)} type={'CITY'} name={city.city} />
      <Collapse isOpened={isOpened}>
        {city?.units.map((unit) => {
          return <TreeElementUnit isBranchCollapsed={isOpened} unit={unit} />;
        })}
        <AddTreeElementBar type={'UNIT'} />
      </Collapse>
    </>
  );
};

export default function Tree({ treeData, treeStatus }) {
  return (
    <div className="tree">
      {treeStatus === 'success' ? (
        <>
          {treeData?.map((city) => {
            return <TreeElementCity city={city} />;
          })}
          <AddTreeElementBar type={'CITY'} />
        </>
      ) : (
        <div>Tree loading</div>
      )}
    </div>
  );
}
