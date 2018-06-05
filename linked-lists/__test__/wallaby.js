module.exports = function () {
    return {
      files: [
        '*.js',
        '!__test__/*.test.js',
        
      ],
  
      tests: [
        '__test__/*.test.js',
      ],
  
      testFramework: 'jest',
      env: {
        type: 'node',
      },
    };
  };