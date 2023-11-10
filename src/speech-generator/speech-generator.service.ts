import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import GetAuthKey from "./db/GetAuthKey";

@Injectable()
export class SpeechGeneratorService {
    constructor(private readonly httpService : HttpService) {}
    async GetVoice(words: string): Promise<string> {
        const authKey = (await GetAuthKey())?.rows[0].value;

        return await this.httpService.axiosRef
            .request({
                method: 'post',
                url: `https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize?text=${words}&lang=ru-RU&emotion=good&format=mp3&folderId=${process.env.FOLDER_ID}`,
                headers: {
                    'Authorization': `Bearer ${authKey}`
                },
                responseType: "arraybuffer"
            }).then(d => d.data);
    }
}
