'use strict';
module.exports = app => {
  return {
    foo2() {
      // app is Application Object
      console.log(app);
      return 'helper';
    },
  };
};
