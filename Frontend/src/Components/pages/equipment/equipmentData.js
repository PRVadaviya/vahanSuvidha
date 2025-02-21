import car from '../../../assets/car.png';
import truck from '../../../assets/truck.png';
import tractor from '../../../assets/tractor.jpg';
import bulldozer from '../../../assets/bulldozer.jpg';

const vehicleData = [
  {
    title: 'Aggricultural Equipment',
    //
    people: '2-5 People',
    bags: '1-4 Bags',
    description:
      'Choose from a variety of rental cars in this category including economy, full-size or luxury sedans. Whether you are looking for fuel-efficiency, space, or comfort and style, you are sure to find the perfect rental car no matter whether you are going on a quick family visit or an adventurous road trip.',
    buttonText: 'View All Cars',
    url: '/equipment/aggricultural',
    imageSrc: car, // Replace with the actual car image URL
  },
  {
    title: 'Construction Equipment',
    people: '0-6 People',
    bags: '0-4 Bags',
    description:
      "Whether you're hauling large items for a DIY project or packing up for a weekend retreat, our pickup trucks have the space, power and durability ideal for your needs. Enterprise Rent-A-Car locations do not allow a hitch to be attached or towing of any kind with the rental vehicle.",
    buttonText: 'View All Trucks',
    url: '/equipment/construction',
    imageSrc: truck, // Replace with the actual truck image URL
  },
  {
    title: 'Medical Equipment',
    people: '4-8 People',
    bags: '2-7 Bags',
    description:
      'Our SUVs offer plenty of flexibility with seating capacity, power, and luggage room. Whether you are going on a weekend family trip or exploring the countryside we are sure to have the ideal SUV for your needs.',
    buttonText: 'View All SUVs',
    url: '/equipment/medicalequipment',
    imageSrc: tractor, // Replace with the actual SUV image URL
  },
  {
    title: 'Transportation Equipment',
    people: '4-8 People',
    bags: '2-7 Bags',
    description:
      'Our SUVs offer plenty of flexibility with seating capacity, power, and luggage room. Whether you are going on a weekend family trip or exploring the countryside we are sure to have the ideal SUV for your needs.',
    buttonText: 'View All SUVs',
    url: '/equipment/transportationEquipment',
    imageSrc: bulldozer, // Replace with the actual SUV image URL
  },
];

export default vehicleData;