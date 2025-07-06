import db from '../db/db.js';
import { exec } from 'child_process';
import { spawn } from 'node:child_process';
export const launchProject = async (name) => {
    const project = db.data.projects.find(p => p.name === name);
    if (!project) {
        console.log(`❌ Proyecto "${name}" no encontrado.`);
        return;
    }
    console.log(`📂 Abriendo "${project.name}" en VS Code...`);
    exec(`code "${project.path}"`);
    if (!project.runCommand) {
        console.log(`⚠️ El proyecto "${project.name}" no tiene comando de ejecución.`);
        return;
    }
    console.log(`🚀 Ejecutando: ${project.runCommand}\n`);
    const [cmd, ...args] = project.runCommand.split(' ');
    const subprocess = spawn(cmd, args, {
        cwd: project.path,
        stdio: 'inherit', // ⬅️ muestra logs y permite interacción
        shell: true, // ⬅️ necesario para comandos encadenados (como npm run dev)
    });
    subprocess.on('close', (code) => {
        console.log(`\n📦 El proceso terminó con código ${code}`);
    });
};
