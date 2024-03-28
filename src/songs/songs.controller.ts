import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

    @Post()
    create(): string {
        return 'This action adds a new song';
    }

    @Get()
    findAll(): string {
        return 'This action returns all songs';
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
