'use strict';

const faker = require('faker');
const _ = require('lodash');

const generateData = () => {
  return {
    customers: _.times(100, (n) => {
      return {
        id: n + 1,
        name: faker.name.findName(),
        photo: faker.internet.avatar(),
        twitter: '@' + faker.internet.userName(),
        url: 'http://' + faker.internet.domainName(),
        email: faker.internet.email()
      }
    })
  };
}

module.exports = generateData;
