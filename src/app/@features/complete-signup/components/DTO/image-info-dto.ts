import { Observable } from "rxjs";

export class  ImageInfoDto {
    selectedFiles!: FileList;
    currentFile!: File;
    progresss = 0;
  
    imageInfos?: Observable<any>;
    imageBackgroundUrl : string = '';
    imageBackgroundColor : string = 'var(--secondary-color)';
    addIconStatus = true;
    constructor(
    ) {}

    restart() {
        this.selectedFiles = new FileList();
        this.currentFile = new File([], '');
        this.progresss = 0;
        this.imageInfos = new Observable();
        this.imageBackgroundUrl = '';
        this.imageBackgroundColor = 'var(--secondary-color)';
        this.addIconStatus = true;
    }
}