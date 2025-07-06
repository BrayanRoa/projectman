import inquirer from 'inquirer';
import db from '../db/db.js';
export const removeProject = async () => {
    const choices = db.data.projects.map((p) => ({ name: p.name, value: p.name }));
    const { name } = await inquirer.prompt([
        { type: 'list', name: 'name', message: 'Selecciona el proyecto a eliminar:', choices }
    ]);
    db.data.projects = db.data.projects.filter(p => p.name !== name);
    await db.write();
    console.log(`🗑️ Proyecto "${name}" eliminado.`);
};
