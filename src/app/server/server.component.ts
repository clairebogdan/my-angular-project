import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 11110;
    serverStatus = 'offline';

    /*
    getServerStatus() {
        if (Math.random() < 0.5) {
            this.serverStatus = 'offline';
            console.log(this.serverStatus);
            return this.serverStatus;
        }
        else if (Math.random() >= 0.5) { 
            this.serverStatus = 'online';
            console.log(this.serverStatus);
            return this.serverStatus;
        }
        else {
            return this.serverStatus;
        }
    }
    */
}