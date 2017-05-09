export default babel => ({
  // plugin content
  visitor: {
    Program: {
      /**
       * initialization
       * @param  {AST}    path [description]
       * @param  {[type]} file [description]
       * @return {[type]}      [description]
       */
      enter : (path, file) => {},
      // termination
      exit  : (path, file) => {},
    }
  },
})
