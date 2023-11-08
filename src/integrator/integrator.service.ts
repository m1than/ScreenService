import {Injectable} from '@nestjs/common';
import {writeFile} from 'node:fs/promises';
@Injectable()
export class IntegratorService {
    public async IntegrateIntoMP3(buffer: string): Promise<string> {
        try {
            const source = "voices/file.mp3";
            const data = Buffer.from(buffer, 'binary');
            await writeFile(source, data);

            return source;

        } catch (e) {
            throw new Error(e);
        }
    }
}