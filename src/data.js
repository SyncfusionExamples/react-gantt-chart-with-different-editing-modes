Object.defineProperty(exports, "__esModule", { value: true });
exports.projectData = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2020'),
        EndDate: new Date('04/21/2020'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/06/2020'), Duration: 4, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/10/2020'), Duration: 4, Progress: 50, Predeceesor:"2FS" },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/12/2020'), Duration: 4, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2020'),
        EndDate: new Date('04/21/2020'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/03/2020'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2020'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/08/2020'), Duration: 3, Progress: 50 }
        ]
    },
];