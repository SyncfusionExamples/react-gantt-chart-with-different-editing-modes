import React from 'react';
import './App.css';
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective, Edit, Inject,
         Toolbar, Selection } from '@syncfusion/ej2-react-gantt';
import { projectData } from './data';
function App() {
  const editOptions: any = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    mode: "Auto"
  }
  const taskValues: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: "EndDate",
    duration: 'Duration',
    dependency: 'Predeceesor',
    child: 'subtasks'
  }
  return (
    <div>
      <GanttComponent dataSource={projectData} taskFields={taskValues} editSettings={editOptions}
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll']}
        allowSelection={true}>
        <Inject services={[Edit, Toolbar, Selection]}></Inject>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name"></ColumnDirective>
          <ColumnDirective field="StartDate" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="Duration"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default App;
