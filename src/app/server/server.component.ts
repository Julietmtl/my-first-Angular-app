import { Component } from "@angular/core";

@Component({
  //needs to be a unique selector
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline'

  getServerStatus() {
    return this.serverStatus;
  }
}
