import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstFormGroup: FormGroup;
  firstFormSubmitted = false;

  secondFormGroup: FormGroup;
  secondFormSubmitted = false;

  thirdFormGroup: FormGroup;
  thirdFormSubmitted = false;

  fileData: File = null;
  fourthFormGroup: FormGroup;


  previewUrl: any = '/assets/image/avatar.png';

  fifthFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    let obj: any = {};
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    obj.fileInformation = this.fileData;
    obj.fileName = obj.fileInformation.name;
    obj.fileType = obj.fileInformation.type;

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      obj.base64 = reader.result;
      obj.base64Data = (String(obj.base64).split('base64,')[1]);
      this.firstFormGroup.controls.image.setValue(obj)
    }
  }

}
