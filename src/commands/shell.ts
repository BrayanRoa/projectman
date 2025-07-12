import db from '../db/db.js';
import { spawn } from 'child_process';
import os from 'os';

export const openShellInProject = async (name: string) => {
    const project = db.data!.projects.find(p => p.name === name);

    if (!project) {
        console.log(`❌ Proyecto "${name}" no encontrado.`);
        return;
    }

    const shell = os.userInfo().shell || '/bin/bash';

    console.log(`🔁 Abriendo subshell en: ${project.path}`);
    console.log(`💡 Escribe ${'exit'} para volver.`);

    const child = spawn(shell, {
        cwd: project.path,
        stdio: 'inherit',
    });

    child.on('exit', (code) => {
        console.log(`👋 Saliste del proyecto "${name}"`);
    });
};
