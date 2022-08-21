import { Component, OnInit } from '@angular/core';
import { EditorService } from './editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public myContent = '';

  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.getContent();
  }

  private async getContent() {
    this.myContent = await this.editorService.getContent();
  }

  public saveContent(content: string) {
    this.editorService.setContent(content);
  }
}
