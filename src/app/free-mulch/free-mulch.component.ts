import { Component, OnInit } from '@angular/core';
import { Location } from './location.model';

@Component({
  selector: 'app-free-mulch',
  templateUrl: './free-mulch.component.html',
  styleUrls: ['./free-mulch.component.scss'],
})
export class FreeMulchComponent implements OnInit {
  locations: Location[] = [
    new Location(
      'Cardinia',
      'Free mulch is available off the Princes highway as you head in to Pakenham from Nar Nar Goon - opposite the Army Road intersection. Call 1300 787 624 to confirm details.',
      'https://www.cardinia.vic.gov.au/'
    ),
    new Location(
      'Glen Eria',
      'This free mulch facility is open seven days a week. It offers untreated material, usually from shredded tree prunings and sometimes from other sources. The facility is in the Glen Huntly Park car park off Neerim Road, near the corner of Booran and Neerim Roads. Melway Ref: 68 E3.',
      'https://www.gleneira.vic.gov.au/services/sustainable-living/gardening-and-nature/free-mulch'
    ),
    new Location(
      'Moreland',
      'To collect the free mulch, visit the mulch bay at the Council Operations Centre, 40-46 South Street, Hadfield with your trailer or ute. The mulch bay is open to the public at all hours and residents can help themselves to the mulch.',
      'https://www.moreland.vic.gov.au/living-in-moreland/environment/gardening-and-food-production/#autoAnchor5'
    ),
    new Location(
      'Manningham',
      'Corner of Websters and Blackburn roads, Templestowe',
      'https://www.manningham.vic.gov.au/visit-our-garden-waste-centre'
    ),
    new Location(
      'Moonee Valley',
      'Free mulch is available for Moonee Valley residents, subject to availability. You can get up to 200L (a bootload) per resident, per month. To find out more or to check availability, call (03) 8325 1730.',
      'https://mvcc.vic.gov.au/live/my-house/waste-and-recycling/'
    ),
    new Location(
      'Port Phillip',
      '        Free mulch is available at the South Melbourne Resource Recovery Centre.',
      'https://www.portphillip.vic.gov.au/council-services/trees-and-vegetation/tree-care-tips'
    ),
    new Location(
      'Yarra City',
      "You can pick up free mulch from outside Yarra's Clifton Hill depot. To check mulch availability contact Yarra City Council on 03 9205 5555 and ask for Yarra's Clifton Hill Depot, located at 168 Roseneath St, Clifton Hill.",
      'https://www.yarracity.vic.gov.au/services/take-climate-action/use-water-sensitively#accordion-free-garden-mulch'
    ),
    new Location(
      'Wyndham',
      ' Free mulch can be obtained from the Council’s Refuse Disposal Facility in Wests Road and is normally free of charge on a self-serve basis for ratepayers with their own vehicle. To find out more or to check availability, call 9742 0765.',
      'https://www.wyndham.vic.gov.au/venues/municipal-tip-refuse-disposal-facility'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
