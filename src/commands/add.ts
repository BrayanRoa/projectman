import inquirer from 'inquirer';
import db from '../db/db.js';

export const addProject = async () => {
    const { name, path, runCommand } = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'Nombre del proyecto:' },
        { type: 'input', name: 'path', message: 'Ruta absoluta del proyecto:' },
        { type: 'input', name: 'runCommand', message: '¿Comando para ejecutar el proyecto? (opcional):' }
    ]);

    db.data!.projects.push({ name, path, runCommand });
    await db.write();
    console.log(`✅ Proyecto "${name}" agregado con éxito.`);
};
