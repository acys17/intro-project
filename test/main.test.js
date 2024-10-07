const { describe, it } = require( "mocha" )

describe( "Form", function () {
  describe( "#addpersoninput()", function () {
    it( "should call functions in correct order", function () {
      // test logic here
      console.log( "test1 - order" )
    } )

    it( "should correctly handle async behavior", function () {
      // test logic here
      console.log( "test2 - async" )
    } )

    it( "should clear the existing form and set new values", function () {
      // test logic here
      console.log( "test3 - clear" )
    } )

    it( "should save without error", function () {
      // test logic here
      console.log( "test4 - save" )
    } )
  } )

  describe( "#editpersoninput()", function () {
    it( "should call functions in correct order", function () {
      // test logic here
      console.log( "test5 - order" )
    } )

    it( "should correctly handle async behavior", function () {
      // test logic here
      console.log( "test6 - async" )
    } )

    it( "should clear the existing form and pre-fill the orignal name input", function () {
      // test logic here
      console.log( "test7 - clear" )
    } )

    it( "should correctly set new values", function () {
      // test logic here
      console.log( "test8 - overwrite" )
    } )

    it( "should save without error", function () {
      // test logic here
      console.log( "test9 - save" )
    } )
  } )
} )
