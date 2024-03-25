export type Album = {
  id: number;
  userId: number;
  title: string;
}

export type Foto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
