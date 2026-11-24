import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

//package for forms 
import { FormsModule } from '@angular/forms';

//rendered components
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
         IonCardContent, IonItem, IonLabel, IonDatetime, IonDatetimeButton, IonModal, IonButton, 
		 IonSelect, IonList, IonListHeader, IonSelectOption, IonItemSliding, IonItemOptions, IonItemOption,
		 IonNote, ToastController} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  //update imported components 
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
          IonCardContent, IonItem, IonLabel, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonSelect,
			IonSelectOption, IonList, IonListHeader, IonItemSliding, IonItemOptions, IonItemOption, IonNote],
})
export class HomePage {
  constructor(public sleepService:SleepService, private toastController:ToastController) {

	}

	//brief confirmation popup at the bottom of the screen so users know an action went through
	private async showToast(message:string) {
		const toast = await this.toastController.create({
			message: message,
			duration: 1500,
			position: 'bottom',
			color: 'primary'
		});
		await toast.present();
	}
	//simple fields
	bedTime: string = new Date(new Date().setHours(-1, 0, 0, 0)).toISOString();
	wakeTime: string = new Date().toISOString();
	sleepiness: number | null = null; 

	//field to hold text descriptor of stanfordsleepiness as an array, starting index1
	//this data is already imported from the data/file, thus can be accessedd from home
	scaleLabels = StanfordSleepinessData.ScaleValues.slice(1); 	
	

	ngOnInit() {
		console.log(this.allSleepData);
	}

	//----getters----
	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
	
	//helper method based on fields 
	get validSleep() { return new Date(this.wakeTime) > new Date(this.bedTime); }

	get recentData(){
		return[...this.allSleepData].reverse(); //most recent at top
	}

	//----logs----
	//use sleepservice method to log overnightsleepdata based on bed/waketime
	logSleep() {
  		this.sleepService.logOvernightData(new OvernightSleepData(new Date(this.bedTime), new Date(this.wakeTime)));
		this.showToast('Sleep logged');
	}

	logSleepiness() {
		this.sleepService.logSleepinessData(new StanfordSleepinessData(this.sleepiness!, new Date()));
		this.sleepiness = null; // reset so the next log starts fresh
		this.showToast('Sleepiness logged');
	}

	//remove an entry from history and confirm it
	deleteEntry(entry:SleepData) {
		this.sleepService.deleteData(entry);
		this.showToast('Entry deleted');
	}
}
