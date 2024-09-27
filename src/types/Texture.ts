export interface Texture {
  src: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;

  original: Blob;
  scaled: Blob;
}
