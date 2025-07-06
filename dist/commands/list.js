import db from '../db/db.js';
export const listProjects = async () => {
    console.log('\n📁 Proyectos registrados:\n');
    db.data.projects.forEach((project, index) => {
        console.log(`${index + 1}. ${project.name} - ${project.path}`);
    });
};
