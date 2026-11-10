export const appInfo = {
  title: 'Uber',
  conceptBy: 'Diego Larrain',
};

export const coronavirusAlert = {
  title: 'Travel only if necessary',
  subtitle: 'Limit the spread',
};

export const recentDestinations = [
  {
    id: 'dest-1',
    name: 'Eliodoro Yañez 809',
    subtext: 'Providencia, Región Metropolitana',
    icon: 'location',
  },
  {
    id: 'dest-2',
    name: 'Carmen Fariña',
    subtext: 'Vitacura, Región Metropolitana',
    icon: 'location',
  },
];

export const vehicleModes = [
  {
    id: 'ride',
    name: 'Ride',
    label: 'Ride',
    icon: require('../assets/images/uber_car.png'),
    badge: 'UberX',
  },
  {
    id: 'car',
    name: 'Car',
    label: 'Car Rental',
    icon: require('../assets/images/awto_car.png'),
    badge: 'Awto',
  },
  {
    id: 'bike',
    name: 'Bike',
    label: 'JUMP Bike',
    icon: require('../assets/images/jump_bike.png'),
    badge: 'JUMP',
  },
  {
    id: 'scooter',
    name: 'Scooter',
    label: 'JUMP Scooter',
    icon: require('../assets/images/jump_scooter.png'),
    badge: 'JUMP',
  },
];

export const carRentalOptions = [
  {
    id: 'car-1',
    name: 'Awto CityCar FSKC61',
    type: 'CityCar',
    range: '254 kilometers range',
    serviceDesc: 'Service includes gas, insurance and free parking.',
    tagline: 'Rent a car by the minute',
    icon: require('../assets/images/awto_car.png'),
    logo: require('../assets/images/awto_logo.png'),
    distance: '180 m.',
    pricePerMin: '$0.35/min',
  },
  {
    id: 'car-2',
    name: 'Awto CityCar',
    type: 'CityCar',
    range: '850 kilometers range',
    serviceDesc: 'Service includes gas, insurance and free parking.',
    tagline: 'Rent a car by the minute',
    icon: require('../assets/images/awto_car.png'),
    logo: require('../assets/images/awto_logo.png'),
    distance: '350 m.',
    pricePerMin: '$0.38/min',
  },
  {
    id: 'car-3',
    name: 'Awto SUV',
    type: 'SUV',
    range: '500 kilometers range',
    serviceDesc: 'Service includes gas, insurance and free parking.',
    tagline: 'Rent a car by the minute',
    icon: require('../assets/images/awto_car.png'),
    logo: require('../assets/images/awto_logo.png'),
    distance: '520 m.',
    pricePerMin: '$0.49/min',
  },
];

export const bikeRentalData = {
  id: 'bike-13892',
  name: 'JUMP Bike 13892',
  range: '16 kilometers range',
  distanceCallout: '260 m.',
  icon: require('../assets/images/jump_bike.png'),
  pin: require('../assets/images/jump_pin.png'),
  priceUnlock: '$1.00 to unlock',
  pricePerMin: '$0.15/min',
};

export const simulatedPins = {
  uberCars: [
    { id: 'uc-1', top: '34%', left: '42%', image: require('../assets/images/uber_pin1.png') },
    { id: 'uc-2', top: '48%', left: '68%', image: require('../assets/images/uber_pin2.png') },
    { id: 'uc-3', top: '62%', left: '26%', image: require('../assets/images/uber_pin1.png') },
  ],
  awtoCars: [
    { id: 'ac-1', top: '38%', left: '32%', image: require('../assets/images/awto_pin1.png'), title: 'Awto CityCar FSKC61' },
    { id: 'ac-2', top: '55%', left: '60%', image: require('../assets/images/awto_pin2.png'), title: 'Awto SUV' },
  ],
  jumpBikes: [
    { id: 'jb-1', top: '44%', left: '48%', image: require('../assets/images/jump_pin.png'), callout: '260 m.' },
    { id: 'jb-2', top: '30%', left: '70%', image: require('../assets/images/jump_pin.png'), callout: '450 m.' },
  ],
};
