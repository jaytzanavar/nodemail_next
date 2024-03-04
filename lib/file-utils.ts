import fs from 'fs'
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export const fileExists = (path: string) => {
    return fs.existsSync(path)
}
export const writeFile = async (path: string, data: any, date: number) => {
    const dataToWrite = JSON.stringify({ date: date, ...data })
    await writeFileSync(path, dataToWrite)
}

export const readFile = async (path: string) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(JSON.parse(data));
        });
    });
}

export const routeStringToPathName = (route: string) => {
    const pathName = path.join(process.cwd(), "/public/reviews.json");
    return pathName
}