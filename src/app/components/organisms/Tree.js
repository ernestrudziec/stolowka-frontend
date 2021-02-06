import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';
import AddTreeElementBar from '../atoms/Tree/AddTreeElementBar';
import TreeElementBar from '../atoms/Tree/TreeElementBar';

const TreeElementGroup = ({ group, isBranchCollapsed }) => {
  useEffect(() => {
    // console.log(group);
  }, []);

  return <TreeElementBar itemID={group.id} type={'GROUP'} name={group.name} />;
};

const TreeElementUnit = ({ unit, isBranchCollapsed }) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isBranchCollapsed === false) {
      setIsOpened(false);
    }
  }, [isBranchCollapsed]);

  return (
    <>
      <TreeElementBar
        itemID={unit.id}
        isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
        name={unit.name}
        type={'UNIT'}
      />

      <Collapse isOpened={isOpened}>
        {unit?.groups.map((group) => {
          return <TreeElementGroup key={group.id + 'city'} id={group.id} group={group} />;
        })}
        <AddTreeElementBar itemID={unit.id} type={'GROUP'} />
      </Collapse>
    </>
  );
};

const TreeElementCity = ({ city }) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // console.log(city);
  }, []);

  return (
    <>
      <TreeElementBar
        itemID={city.id}
        isOpened={isOpened}
        onClick={() => setIsOpened(!isOpened)}
        type={'CITY'}
        name={city.city}
      />
      <Collapse isOpened={isOpened}>
        {city?.units.map((unit, index) => {
          return <TreeElementUnit key={index + 'unit'} isBranchCollapsed={isOpened} unit={unit} />;
        })}
        <AddTreeElementBar itemID={city.id} type={'UNIT'} />
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
            return <TreeElementCity key={city.id + 'city'} id={city.id} city={city} />;
          })}
          <AddTreeElementBar type={'CITY'} />
        </>
      ) : (
        <div>Proszę czekać...</div>
      )}
    </div>
  );
}
