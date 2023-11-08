import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";

const authKey = "t1.9euelZqbmcmMncnLl8uZmo2KkZiJye3rnpWajI6NiZ2dm5yYmJGaxpmXkJTl9PdfD1dV-e9NXBSA3fT3Hz5UVfnvTVwUgM3n9euelZqWkJaVnYzOzMiVl5ySl4mOyO_8xeuelZqWkJaVnYzOzMiVl5ySl4mOyA.Ze7sG8eXpwLcG53cJPoV408zgjgvlXZHbbASWQkQytA00zR20KZgEUpTRyf3W-ibNVKf0HBfLTLedywdViypBg";
@Injectable()
export class SpeechGeneratorService {
    constructor(private readonly httpService : HttpService) {}
    async GetVoice(words: string): Promise<string> {
        const response = await this.httpService.axiosRef
            .request({
                method: 'post',
                url: `https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize?text=${words}&lang=ru-RU&emotion=good&format=mp3&folderId=b1grkf13fuqq110111o3`,
                headers: {
                    'Authorization': `Bearer ${authKey}`
                },
                responseType: "arraybuffer"
            }).then(d => d.data);
        console.log(typeof response);
        return response;
    }
}
