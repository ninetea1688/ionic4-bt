import { Component } from '@angular/core';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public bluetoothle: BluetoothLE, public plt: Platform
  ) {


    this.plt.ready().then((readySource) => {

      console.log('Platform ready from', readySource);

      this.bluetoothle.initialize().subscribe(ble => {
        console.log('ble', ble.status) // logs 'enabled'
        console.log('this bt data : ', ble)
      });

      // this.http.get('https://randomuser.me/api/, {params: params})
      // .subscribe(data => {
      //   this.data = data.results;
      //   resolve(this.data);
      // }));

    });

  }

}
