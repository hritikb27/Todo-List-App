function createProject(projTitle) {
    const project = {
        'Title': projTitle,
        'Todo': [],
    }

    return project;
}

export default createProject;