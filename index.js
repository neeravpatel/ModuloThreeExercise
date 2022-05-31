module.exports = function (inputString) {
  let state = "0";

  for (let i = 0; i < inputString.length; i++) {
    let input = inputString[i];

    switch (state) {
      // When state is 0
      case "0":
        if (input == "1") {
          state = "1";
        } else {
          state = "0";
        }
        break;

      // When state is 1
      case "1":
        if (input == "0") {
          state = "2";
        } else {
          state = "0";
        }
        break;

      // When state is 2
      case "2":
        if (input == "0") {
          state = "1";
        }
        break;
    }
  }

  return state;
};
