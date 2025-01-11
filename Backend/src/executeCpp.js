import fs from "fs/promises";
import path from 'path';
import { execPromisified } from './utils/execUtility.js';

const executeCpp = async (filePath) => {

    const jobId = path.basename(filePath).split(".")[0];
    const outputFilePath = path.resolve(`.\\codes\\${jobId}.exe`);
    const command = `g++ ${filePath} -o ${outputFilePath} && ${outputFilePath}`;
    try {
        const { stdout, stderr } = await execPromisified(command, {
            cwd: `.\\codes`,
        });
        return { stdout, stderr };
    } catch (error) {
        return { stdout: '', stderr: error.message };
    }

};

export default executeCpp;