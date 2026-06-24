# React Gantt Chart with Different Editing Modes

A React sample project that demonstrates the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component with support for editing tasks, taskbar manipulation, and task dependency management in a project scheduling scenario.

## Project Overview

This repository provides a practical example of using the Syncfusion React Gantt Chart to build an interactive project management interface. The sample focuses on configuring built-in editing capabilities and toolbar actions that allow users to manage tasks directly within the Gantt chart

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

## Installation

Install project dependencies using:

```bash
npm install
```

## Run the app

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## How It Works

The sample renders a `GanttComponent` configured with editing options enabled. Task data is supplied from a local data source and mapped to the Gantt chart using the taskFields property.

## Notes

- The edit mode is configured as `Auto` to allow inline task updates.
- Taskbar editing is enabled using the `allowTaskbarEditing` option.
- Sample data includes parent tasks, nested subtasks, and a basic dependency value such as `2FS`.

## Related Links

- [Explore React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart)
- [Gantt Chart Feature Overview](https://ej2.syncfusion.com/react/documentation/gantt/overview)
- [React Gantt Chart Getting Started Guide](https://ej2.syncfusion.com/react/documentation/gantt/getting-started)
- [React Gantt API Documentation](https://ej2.syncfusion.com/react/documentation/api/gantt/)
- [React Gantt Chart Live Demos and Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/gantt/default-editing)