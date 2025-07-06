import db from '../db/db.js';
import inquirer from 'inquirer';

export const editProject = async (name: string) => {
    const project = db.data!.projects.find(p => p.name === name);

    if (!project) {
        console.log(`❌ Proyecto "${name}" no encontrado.`);
        return;
    }

    const updated = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Nuevo nombre del proyecto:',
            default: project.name,
        },
        {
            type: 'input',
            name: 'path',
            message: 'Nueva ruta del proyecto:',
            default: project.path,
        },
        {
            type: 'input',
            name: 'runCommand',
            message: 'Nuevo comando de ejecución:',
            default: project.runCommand ?? '',
        },
    ]);

    // Verificar que el nuevo nombre no esté repetido (excepto el actual)
    const nameExists = db.data!.projects.some(
        (p) => p.name === updated.name && p !== project
    );

    if (nameExists) {
        console.log(`⚠️ Ya existe un proyecto con el nombre "${updated.name}".`);
        return;
    }

    // Actualizar los valores
    project.name = updated.name;
    project.path = updated.path;
    project.runCommand = updated.runCommand || undefined;

    await db.write();

    console.log(`✅ Proyecto actualizado con éxito.`);
};
