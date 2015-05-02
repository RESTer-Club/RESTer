'use strict';

describe('Unit testing storage service', function () {

    var $scope,
        Storage;

    beforeEach(module('RESTer'));

    beforeEach(inject(function (_$rootScope_) {
        $scope = _$rootScope_;
    }));

    beforeEach(function () {
        inject(function ($injector) {
            Storage = $injector.get('Storage');
        });
    });

    it('call init when dbname is undefined ', function (done) {

        Storage.init();
        Storage.info(test);

        function test(err, result) {
            expect(result.db_name).toEqual('rester');
            done();
        }
    });

    it('call init when dbname is defined ', function (done) {
        var dbName = 'testDatabase';
        Storage.init(dbName);
        Storage.info(test);

        function test(err, result) {
            expect(result.db_name).toEqual(dbName);
            done();
        }
    });

    var objId;

  it('add object if it is undefined', function (done) {
        Storage.init();
        var object;
        Storage.add(object, test);

        function test(err, result) {
            expect(err).toEqual('Object is not provided');
            done();
        }
    });

  it('add object ', function (done) {
        Storage.init();
        var object = { test: 'test object' };
        Storage.add(object, test);

        function test(err, result) {
            expect(result.ok).toBe(true);
            objId = result.id;
            done();
        }
    });

  it('get object if object id is undefined', function (done) {
        Storage.init();
        var tmpObj;
        Storage.get(tmpObj, test);

        function test(err, result) {
            expect(err).toEqual('ID is not provided');
            done();
        }
    });

  it('get object ', function (done) {
        Storage.init();
        Storage.get(objId, test);

        function test(err, result) {
            expect(result.test).toEqual('test object');
            done();
        }
    });
    
      it('update object if object id is undefined', function (done) {
        Storage.init();
        var object = { test: 'updated test object' };
        var tmpObj;
        Storage.update(tmpObj, object, test);

        function test(err, result) {
            expect(err).toEqual('ID is not provided');
            done();
        }
    });
    
    it('update object if object is undefined', function (done) {
        Storage.init();
        var object;
        var tmpObj = '';
        Storage.update(tmpObj, object, test);

        function test(err, result) {
            expect(err).toEqual('Object is not provided');
            done();
        }
    });

  it('update object ', function (done) {
        Storage.init();
        var object = { test: 'updated test object' };
        Storage.update(objId, object, test);

        function test(err, result) {
            expect(result.ok).toBe(true);
            done();
        }
    });

  it('get updated object ', function (done) {
        Storage.init();
        Storage.get(objId, test);

        function test(err, result) {
            expect(result.test).toEqual('updated test object');
            done();
        }
    });

  it('delete updated object ', function (done) {
        Storage.init();
        Storage.remove(objId, test);

        function test(err, result) {
            expect(result.ok).toBe(true);
            done();
        }
    });

  it('delete object if id is not provided', function (done) {
        Storage.init();
        var tmpId;
        Storage.remove(tmpId, test);

        function test(err, result) {
            expect(err).toEqual('ID is not provided');
            done();
        }
    });
    
  it('get deleted object ', function (done) {
        Storage.init();
        Storage.get(objId, test);

        function test(err, result) {
            expect(err.name).toEqual('not_found');
            expect(err.reason).toEqual('deleted');
            done();
        }
    });
});