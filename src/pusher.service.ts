import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';


@Injectable()
export class PusherService {

    pusher: Pusher;

    constructor(){
        this.pusher = new Pusher({
            appId: "1768103",
            key: "0e6aa40c18fd9fdbb8d4",
            secret: "c04b37283fd0b081253c",
            cluster: "eu",
            useTLS: true
          });
    }


    async trigger(channel: string, event: string, data: any ){

        await this.pusher.trigger( channel , event , data );
    }

}
