import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {}

    @Post()
    create() {
        return this.songsService.create('Song 1');
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(): string {
        return 'This action returns a song';
    }

    @Put(':id')
    update(): string {
        return 'This action updates a song';
    }

    @Delete(':id')
    remove(): string {
        return 'This action removes a song';
    }
}
