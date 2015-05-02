'use strict';

app.factory('Storage', function () {

  var defaultDbName = 'rester';
  var db;

  return {

    init: function (dbName) {
      if (typeof (dbName) === 'undefined') {
        db = new PouchDB(defaultDbName);
      }
      else {
        db = new PouchDB(dbName);
      }

    },

    info: function (callback) {
      if (typeof (db) === 'undefined') {
        console.error('Database is not initialized');
        callback('Database is not initialized');
        return;
      }

      db.info().then(function (result) {
        callback(null, result);
      }).catch(function (err) {
        callback(err);
        console.log(err);
      });
    },

    add: function (object, callback) {
      if (typeof (db) === 'undefined') {
        console.error('Database is not initialized');
        callback('Database is not initialized');
        return;
      }

      if (typeof (object) === 'undefined') {
        console.error('Object is not provided');
        callback('Object is not provided');
        return;
      }

      db.post(object)
        .then(function (response) {
        callback(null, response);
      })
        .catch(function (err) {
        callback(err);
      });
    },

    get: function (id, callback) {
      if (typeof (db) === 'undefined') {
        console.error('Database is not initialized');
        callback('Database is not initialized');
        return;
      }
      
      if (typeof (id) === 'undefined') {
        console.error('ID is not provided');
        callback('ID is not provided');
        return;
      }

      db.get(id)
        .then(function (doc) {
        callback(null, doc);
      }).catch(function (err) {
        callback(err);
        console.log(err);
      });
    },

    update: function (id, object, callback) {
      if (typeof (db) === 'undefined') {
        console.error('Database is not initialized');
        callback('Database is not initialized');
        return;
      }
      
      if (typeof (id) === 'undefined') {
        console.error('ID is not provided');
        callback('ID is not provided');
        return;
      }
      
      if (typeof (object) === 'undefined') {
        console.error('Object is not provided');
        callback('Object is not provided');
        return;
      }

      db.get(id, object)
        .then(function (doc) {
        return db.put(object, id, doc._rev);
      })
        .then(function (response) {
        callback(null, response);
      })
        .catch(function (err) {
        console.log(err);
        callback(err);
      });
    },

    remove: function (id, callback) {
      if (typeof (db) === 'undefined') {
        console.error('Database is not initialized');
        callback('Database is not initialized');
        return;
      }
      
      if (typeof (id) === 'undefined') {
        console.error('ID is not provided');
        callback('ID is not provided');
        return;
      }

      db.get(id).then(function (doc) {
        return db.remove(doc);
      }).then(function (result) {
        callback(null, result);
      }).catch(function (err) {
        console.log(err);
        callback(err);
      });
    }
  };
});