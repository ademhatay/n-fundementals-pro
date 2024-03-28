import { Controller, Delete, Get, Post, Put, Body, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) { }

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.songsService.create(createSongDTO);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (error) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error,
            });
        }
    }

    @Get(':id')
    findOne(
        @Param(
            'id',
            new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
        ) id: number,
    ): string {
        return `fetching song the based on id ${typeof id}`;
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
