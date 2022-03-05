import { Property } from '../models/Project';
import * as moment from 'moment';

export const propertiesList: Property[] = [
  {
    propertyId: 1,
    propertyType: 'Angular Project',
    propertyAddress: 'Angudsfsdfslar',
    propertyImageUrl: './assets/img/project-1.png',
    price: 678.1,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 1))
    ).fromNow(),
    numberOfBathrooms: 2,
    numberOfBedrooms: 2,
    squareMeters: 240,
  },
  {
    propertyId: 2,
    propertyType: 'Apartment',
    propertyAddress: 'sdfsfs sd sdfsd fsfewrw',
    propertyImageUrl: './assets/img/project-2.jpeg',
    price: 540.145,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 2))
    ).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 2,
    squareMeters: 163,
  },
  {
    propertyId: 3,
    propertyType: 'Apartment',
    propertyAddress: "5-10 St. Martin's PI",
    propertyImageUrl: './assets/img/project-3.jpeg',
    price: 235.25,
    timeAdded: moment(new Date()).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 1,
    squareMeters: 88,
  },
  {
    propertyId: 4,
    propertyType: 'House',
  propertyAddress: "16-2 Queen Anne's Gate",
    propertyImageUrl: './assets/img/project-6.png',
    price: 789.25,
    timeAdded: moment(new Date()).fromNow(),
    numberOfBathrooms: 2,
    numberOfBedrooms: 3,
    squareMeters: 371,
  },
  {
    propertyId: 5,
    propertyType: 'Apartment',
  propertyAddress: "204a Dartmouth St",
    propertyImageUrl: './assets/img/project-5.jpeg',
    price: 432.23,
    timeAdded: moment(new Date()).fromNow(),
    numberOfBathrooms: 1,
    numberOfBedrooms: 3,
    squareMeters: 223,
  },
];