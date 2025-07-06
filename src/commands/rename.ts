import db from '../db/db.js';
import inquirer from 'inquirer';

export const renameProject = async (name: string) => {
    const project = db.data!.projects.find(p => p.name === name);

    if (!project) {
        console.log(`❌ Proyecto "${name}" no encontrado.`);
        return;
    }

    const { newName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'newName',
            message: `Nuevo nombre para "${name}":`,
            default: name,
        },
    ]);

    // Verificar que no haya otro proyecto con ese nombre
    const nameExists = db.data!.projects.some(p => p.name === newName && p !== project);
    if (nameExists) {
        console.log(`⚠️ Ya existe un proyecto con el nombre "${newName}".`);
        return;
    }

    project.name = newName;
    await db.write();

    console.log(`✅ Proyecto renombrado a "${newName}".`);
};
