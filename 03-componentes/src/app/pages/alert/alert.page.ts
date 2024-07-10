import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  public promptAlertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      ccClass: 'secondary',
      handler: () => {
        console.log('Confirm cancel');
      }
    },
    {
      text: 'Ok',
      handler: (data:any ) => {
        console.log(data);
      }
    }];
  public promptAlertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  public alertRadioButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
  
  public alertRadioInputs = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentAlert();
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Advertencia!!',
      backdropDismiss: false,
      subHeader: 'Verifique su accion',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async presentAlertMultiButtons(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: [
        {
          text: 'Ok',
          handler: () =>{
            console.log('click en Ok')
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo'
        }
      ]
    });

    await alert.present();
  }
}
