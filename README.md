# React Gantt Chart with Different Editing Modes

A React sample project demonstrating Syncfusion's React Gantt chart with editable tasks, add/edit/delete operations, taskbar editing, and task dependency support.

## Features

- Syncfusion `@syncfusion/ej2-react-gantt` integration
- Editable Gantt chart with:
  - add, edit, delete tasks
  - taskbar editing
  - dependencies between tasks
- Toolbar controls:
  - Add
  - Edit
  - Delete
  - Update
  - Cancel
  - Expand All
  - Collapse All

## Project structure

- `src/App.tsx` — renders the Gantt chart and configures editing settings
- `src/data.js` — sample task data, including subtasks and dependencies
- `src/index.tsx` — React entry point
- `package.json` — project dependencies and scripts

## Installation

1. Open the project folder in Visual Studio Code.
2. Install dependencies:

```bash
npm install
```

## Run the app

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Notes

- The Gantt chart uses `taskFields` mapping to bind `TaskID`, `TaskName`, `StartDate`, `EndDate`, `Duration`, `Predeceesor`, and `subtasks`.
- Sample data includes parent tasks with nested subtasks and a dependency defined as `"2FS"`.
- The edit mode is configured as `Auto` and `allowTaskbarEditing` is enabled.

## Dependencies

- `react`
- `react-dom`
- `react-scripts`
- `@syncfusion/ej2-react-gantt`
- `@syncfusion/ej2-data`
