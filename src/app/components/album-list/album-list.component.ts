import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];

  constructor(private as: AlbumService) { }

  ngOnInit(): void {
    this.as.getAlbums()
      .subscribe(r => this.albums = r);
  }
}
