import db from '../db/db.js';
import Table from 'cli-table3';

export const listProjects = async () => {
    const projects = db.data?.projects;

    if (!projects || projects.length === 0) {
        console.log('⚠️ No hay proyectos registrados.');
        return;
    }

    const table = new Table({
        head: ['Nombre', 'Ruta', 'Comando'],
        colWidths: [20, 50, 30],
        wordWrap: true,
    });

    projects.forEach((p) => {
        table.push([
            p.name,
            p.path,
            p.runCommand || '—',
        ]);
    });

    console.log(table.toString());
};
