import uuid4 from "uuid4";
import fs from "fs/promises";
import path from 'path';
import { execPromisified } from './utils/execUtility.js';

const extension = {
    'python': 'py',
    'javascript': 'js',
    'java': 'java',
    'cpp': 'cpp',
}

const generateFile = async (code, language) => {
    const jobId = uuid4();
    
    const filename = `${jobId}.${extension[language]}`;
    const filePath = path.resolve(`.\\codes\\${filename}`);
    await fs.writeFile(filePath, code);
    return filePath;
}

export default generateFile;