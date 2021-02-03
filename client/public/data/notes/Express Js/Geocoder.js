// replace `${i}` --> \`   \$   {i}   \`

const data = [

  // card ----------------------------------------------------- >
  [
      //html
      [],
      //css
      [],
      //js
      [
{'js': `const NodeGeocoder = require('node-geocoder');

const options = {
  // 'google', 'mapquest', 'opencage'
  provider: 'mapquest',

  // Optional depending of the providers
  httpAdapter: 'https', // Default
  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;`}
      ],
      // output
      [],
      //render
      {'render': false}
  ],

  // card ----------------------------------------------------- >
  [
    //html
    [],
    //css
    [],
    //js
    [
{'js': `const geocoder = require('route/geocoder');

// World Trade Center
const address = '10007, 70 Vesey St, New York, 10006';

geocoder.geocode(address)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });`}
    ],
    // output
    [
{'output': `[
  {
    formattedAddress: '[17 - 199] Vesey St, 70, New York, NY 10007-2999, US',
    latitude: 40.711918,
    longitude: -74.009758,
    country: null,
    city: 'New York',
    stateCode: 'NY',
    zipcode: '10007-2999',
    streetName: '[17 - 199] Vesey St, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '[283 - 299] Vesey St, 70, New York, NY 10282-5800, US',
    latitude: 40.715086,
    longitude: -74.016769,
    country: null,
    city: 'New York',
    stateCode: 'NY',
    zipcode: '10282-5800',
    streetName: '[283 - 299] Vesey St, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '[69 - 199] Vesey St, 70, Newark, NJ 07105-1024, US',
    latitude: 40.72397,
    longitude: -74.168962,
    country: null,
    city: 'Newark',
    stateCode: 'NJ',
    zipcode: '07105-1024',
    streetName: '[69 - 199] Vesey St, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: ', New York, NY 10006, US',
    latitude: 40.708113,
    longitude: -74.013863,
    country: null,
    city: 'New York',
    stateCode: 'NY',
    zipcode: '10006',
    streetName: '',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '[121 - 199] Vesey St, 70, Brockton, MA 02301-6532, US',
    latitude: 42.063895,
    longitude: -71.026163,
    country: null,
    city: 'Brockton',
    stateCode: 'MA',
    zipcode: '02301-6532',
    streetName: '[121 - 199] Vesey St, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '10007 70th Ave, Forest Hills, NY 11375-5132, US',
    latitude: 40.717574,
    longitude: -73.849102,
    country: null,
    city: 'Forest Hills',
    stateCode: 'NY',
    zipcode: '11375-5132',
    streetName: '10007 70th Ave',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '10007 Vesey Ln, 70, Lynchburg, SC 29080-8668, US',
    latitude: 33.993375,
    longitude: -79.993461,
    country: null,
    city: 'Lynchburg',
    stateCode: 'SC',
    zipcode: '29080-8668',
    streetName: '10007 Vesey Ln, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '[5237 - 5299] Vesey Ave, 70, Warren, OH 44483, US',
    latitude: 41.297307,
    longitude: -80.855605,
    country: null,
    city: 'Warren',
    stateCode: 'OH',
    zipcode: '44483',
    streetName: '[5237 - 5299] Vesey Ave, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '[4869 - 4899] Vesey Ln, 70, Marianna, FL 32446-7882, US',
    latitude: 30.76665,
    longitude: -85.189502,
    country: null,
    city: 'Marianna',
    stateCode: 'FL',
    zipcode: '32446-7882',
    streetName: '[4869 - 4899] Vesey Ln, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  },
  {
    formattedAddress: '[3551 - 3599] Vesey Ave, 70, Fort Wayne, IN 46809, US',
    latitude: 41.052237,
    longitude: -85.158662,
    country: null,
    city: 'Fort Wayne',
    stateCode: 'IN',
    zipcode: '46809',
    streetName: '[3551 - 3599] Vesey Ave, 70',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  }
]`}
    ],
    //render
    {'render': false}
],

];

module.exports = data;