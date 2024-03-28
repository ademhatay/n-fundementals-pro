import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    // local array database
    private readonly songs = [];

    create(song) {
        // add song to local array database
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        // return all songs from local array database
        return this.songs;
    }

}
