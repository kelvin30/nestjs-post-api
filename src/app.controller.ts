import { Body, Controller, Post } from '@nestjs/common';
import Pusher from 'pusher';
import { PusherService } from './pusher.service';
import { channel } from 'diagnostics_channel';

@Controller('api')
export class AppController {
  
  constructor(private pusherService: PusherService){

  }

  @Post()
  async messages(
    @Body('username') username: string,
    @Body('message') message: string
  ) {
    await this.pusherService.trigger("chat",  "message", {
      username,
      message
    });

    return[]; // Return an empty array to avoid CORS errors when sending data to the client

  }
}
