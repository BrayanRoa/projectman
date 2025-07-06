import db from '../db/db.js';
import { exec } from 'child_process';

export const openProject = async (name: string) => {
    const project = db.data!.projects.find(p => p.name === name);

    if (!project) {
        console.log(`❌ Proyecto "${name}" no encontrado.`);
        return;
    }

    console.log(`📂 Abriendo ${project.name} en VS Code...`);
    exec(`code "${project.path}"`);
};
