import { Inject, Injectable } from '@angular/core';
import { ElectronWindow, WINDOW } from '../window';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  constructor(@Inject(WINDOW) private window: ElectronWindow) {}

  private get ipcRenderer(): Electron.IpcRenderer {
    return this.window.require('electron').ipcRenderer;
  }

  public getContent(): Promise<string> {
    return this.ipcRenderer.invoke('getContent');
  }

  public setContent(content: string) {
    this.ipcRenderer.invoke('setContent', content);
  }
}
