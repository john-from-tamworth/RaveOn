export const sampleData = [
  {
    id: '1',
    title: 'Back 2 Love',
    date: new Date('2021-06-21'),
    category: 'drinks',
    description:
      'With lockdown lifted we are excited to throw an all day party playing the best in classic funky house!  Dress to impress!',
    city: {
      address: 'Ibiza, Spain',
      latLng: {
        lat: 38.917261,
        lng: 1.443865,
      },
    },
    venue: {
      address: 'Pacha, Ibiza',
      latLng: {
        lat: 38.917261,
        lng: 1.443865,
      },
    },
    hostedBy: 'Glitter Box',
    hostPhotoURL:
      'https://www.houseoffrankie.com/wportal/wp-content/uploads/2019/02/h2c-AUls-e1549364219645-696x710.jpeg',
    attendees: [
      {
        id: 'a',
        displayName: 'Lana',
        photoURL: 'https://randomuser.me/api/portraits/women/46.jpg',
      },
      {
        id: 'b',
        displayName: 'Leeeeeeroy',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
    ],
  },
  {
    id: '2',
    title: 'Pure Garage with DJ EZ',
    date: new Date('2021-06-27'),
    category: 'drinks',
    description:
      'After some monster sets during lockdown, the one and only DJ EZ will be playing a marathon 12 hour set!  Can you handle it? Playing the best in oldskool bangers, future classics and everything in between.  Early birds tickets available.  BE FAST - THIS WILL SELL OUT!',
    city: {
      address: 'London, UK',
      latLng: {
        lat: 51.509865,
        lng: -0.118092,
      },
    },
    venue: {
      address: 'Ministry of Sound, London',
      latLng: {
        lat: 51.492,
        lng: -0.0928,
      },
    },
    hostedBy: 'DJ EZ',
    hostPhotoURL:
      'https://popularbio.com/wp-content/uploads/2020/05/DJ-EZ-1.jpeg',
    attendees: [
      {
        id: 'a',
        displayName: 'Gianni',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
      {
        id: 'b',
        displayName: 'Claire',
        photoURL: 'https://randomuser.me/api/portraits/women/89.jpg',
      },
    ],
  },
];
