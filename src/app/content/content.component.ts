import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  title = `Alex & Loren's Wedding Day`

  specialPeople = [
    'Jose Alberto Suarez Policarpio',
    'Arianne Trisha Ortezuela',
    'Rhuster',
    'Ken',
    'Batch 134',
    'Nicholas Valle',
    'Iraiza Valle',
    'Andy Choe',
    'Jongsik Shin',
    'Thai Le',
    'Nam Bok Rodriguez',
    'Priscilla Valle',
    'Omar Valle',
    'Stefano Piantoni',
    'Seongeon Park',
    'Karen Tang',
    'Faby Champion',
    'Remi Champion',
    'Staff Family'
  ]

  vendors = [
    { type: 'Photographer', name: 'Cebu Wedding Photographer – Dennis Carpio', url: 'http://denniscarpiophotography.com/' },
    { type: 'Videographer', name: 'Joseph Bacalso Films & Stills', url: 'http://josephbacalso.com' },
    { type: 'Coordinator/Florist', name: 'Ruenas Events and Services', url: 'https://www.facebook.com/ruenaseventsandservice/' },
    { type: 'Make up', name: 'Jomer Arances / Secanara Hands', url: 'https://www.facebook.com/Jomer-Arances-Secanara-Hands-222885341930507/' },
    { type: 'MC/Host', name: 'Cebu Wedding Emcee Cebu Event Host', url: 'https://www.facebook.com/cebuweddingemcee/' },
    { type: 'Videoke', name: 'Videoke For Rent Lapu-Lapu City', url: 'https://www.facebook.com/Videoke-For-Rent-Lapu-Lapu-City-280132819032505/' },
    { type: 'Venue', name: 'Mövenpick Hotel Mactan Island Cebu', url: 'https://www.facebook.com/movenpickcebu/' }
  ]

}
