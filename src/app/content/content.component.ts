import { Component, HostListener, ElementRef } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'

type Names = Array<{[index: number]: string}>
type Vendors = Array<{type: string, name: string, url: string}>

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
        bottom: '-2em'
      })),
      transition('show => hide', [
        animate('0.25s ease-out')
      ]),
      transition('hide => show', [
        animate('0.25s ease-in-out')
      ])
    ])
  ]
})

export class ContentComponent {

  constructor(public element: ElementRef) {
    this.element.nativeElement
  }

  show: boolean = false

  title: string = `Alex & Loren's Wedding Day`

  specialPeople: Names = [
    'Jose Alberto Suarez Policarpio',
    'Arianne Trisha Ortezuela',
    'Rhuster Bañez',
    'Ken Go',
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

  vendors: Vendors = [
    { type: 'Photographer', name: 'Cebu Wedding Photographer – Dennis Carpio', url: 'http://denniscarpiophotography.com/' },
    { type: 'Videographer', name: 'Joseph Bacalso Films & Stills', url: 'http://josephbacalso.com' },
    { type: 'Coordinator/Florist', name: 'Ruenas Events and Services', url: 'https://www.facebook.com/ruenaseventsandservice/' },
    { type: 'Make up', name: 'Jomer Arances / Secanara Hands', url: 'https://www.facebook.com/Jomer-Arances-Secanara-Hands-222885341930507/' },
    { type: 'MC/Host', name: 'Cebu Wedding Emcee Cebu Event Host', url: 'https://www.facebook.com/cebuweddingemcee/' },
    { type: 'Videoke', name: 'Videoke For Rent Lapu-Lapu City', url: 'https://www.facebook.com/Videoke-For-Rent-Lapu-Lapu-City-280132819032505/' },
    { type: 'Venue', name: 'Mövenpick Hotel Mactan Island Cebu', url: 'https://www.facebook.com/movenpickcebu/' }
  ]

  getNameList = this.NameRandomizer

  get NameRandomizer() {
    return this.specialPeople.sort( () => Math.random() - 0.5) // randomize list
  }

  goTo(url: string) {
    window.open(url, '_blank')
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction()
  }

  scrollFunction() {
    const intro = this.element.nativeElement.querySelector('#intro').offsetHeight / 2 // show after half screen has been scrolled
    if (document.body.scrollTop > intro || document.documentElement.scrollTop > intro) {
      this.show = true
    } else {
      this.show = false
    }
  }

}
