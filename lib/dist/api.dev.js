"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostbySlug = getPostbySlug;
exports.getAllSlugs = getAllSlugs;
exports.getAllPosts = getAllPosts;
exports.getAllCategories = getAllCategories;
exports.getAllPostsByCategory = getAllPostsByCategory;
exports.client = void 0;

var _microcmsJsSdk = require("microcms-js-sdk");

var client = (0, _microcmsJsSdk.createClient)({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
});
exports.client = client;

function getPostbySlug(slug) {
  var post;
  return regeneratorRuntime.async(function getPostbySlug$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(client.get({
            endpoint: 'blogs',
            queries: {
              filters: "slug[equals]".concat(slug)
            }
          }));

        case 3:
          post = _context.sent;
          return _context.abrupt("return", post.contents[0]);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log('~~ getPostBySlug ~~');
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function getAllSlugs() {
  var limit,
      slugs,
      _args2 = arguments;
  return regeneratorRuntime.async(function getAllSlugs$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          limit = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 100;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(client.get({
            endpoint: 'blogs',
            queries: {
              fields: 'title,slug',
              orders: '-publishDate',
              limit: limit
            }
          }));

        case 4:
          slugs = _context2.sent;
          return _context2.abrupt("return", slugs.contents);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log('~~ getAllSlugs ~~');
          console.log(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}

function getAllPosts() {
  var limit,
      posts,
      _args3 = arguments;
  return regeneratorRuntime.async(function getAllPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          limit = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 100;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(client.get({
            endpoint: 'blogs',
            queries: {
              fields: 'title,slug,eyecatch',
              orders: '-publushDate',
              limit: limit
            }
          }));

        case 4:
          posts = _context3.sent;
          return _context3.abrupt("return", posts.contents);

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.log('~~ getAllPosts ~~');
          console.log(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
}

function getAllCategories() {
  var limit,
      categories,
      _args4 = arguments;
  return regeneratorRuntime.async(function getAllCategories$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          limit = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 100;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(client.get({
            endpoint: 'categories',
            queries: {
              fields: 'name,id,slug',
              limit: limit
            }
          }));

        case 4:
          categories = _context4.sent;
          return _context4.abrupt("return", categories.contents);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log('~~ getAllCategories ~~');
          console.log(_context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
}

function getAllPostsByCategory(catID) {
  var limit,
      posts,
      _args5 = arguments;
  return regeneratorRuntime.async(function getAllPostsByCategory$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          limit = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 100;
          _context5.prev = 1;
          console.log(catID);
          _context5.next = 5;
          return regeneratorRuntime.awrap(client.get({
            endpoint: 'blogs',
            queries: {
              filters: "categories[equals]".concat(catID),
              // filters: `title[contains]お知らせ1`,
              fields: 'title,slug,eyecatch',
              orders: '-publishDate',
              limit: limit
            }
          }));

        case 5:
          posts = _context5.sent;
          return _context5.abrupt("return", posts.contents);

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          console.log('~~ getAllPostsByCategory ~~');
          console.log(_context5.t0);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 9]]);
}