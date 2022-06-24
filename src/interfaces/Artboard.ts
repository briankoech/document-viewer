export interface File {
  url: string;
  height:number;
  width: number;
  scale: number;
}

export interface Artboard {
  id: number;
  name: string;
  previewImg: string;
  documentId: string;
  files: Array<File>
}
