import React from 'react';
import { Allotment} from 'allotment';
import EditorComponent from '../../molecules/EditorComponent/EditorComponent';
import ProblemDescription from '../../molecules/ProblemDescription/ProblemDescription';
import {problemDes} from '../../../data/problems.js';
import 'allotment/dist/style.css';

const WorkSpace = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row',  width: '100%', height: '100vh' }}>
    <Allotment>
        <Allotment.Pane preferredSize={"50%"} minSize={"30%"} maxSize={"70%"}>
            <ProblemDescription details={problemDes} />
        </Allotment.Pane>
        <Allotment.Pane preferredSize={"50%"} minSize={"30%"} maxSize={"70%"}>
            <EditorComponent />
        </Allotment.Pane>
      
      {/* <Split className="split-vertical" direction="vertical"> */}
      
      {/* </Split> */}
    </Allotment>
    </div>
      
  );
};

export default WorkSpace;