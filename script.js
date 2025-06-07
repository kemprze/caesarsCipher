function rot13(str) {
  str = str.split("")
  let alphabetTable = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (alphabetTable.includes(str[i])) {
      if ((alphabetTable.indexOf(str[i])-13) < 0) {
        result.push(alphabetTable[alphabetTable.indexOf(str[i])+13])
      } else if ((alphabetTable.indexOf(str[i])-13 >= 0)) {
       result.push(alphabetTable[alphabetTable.indexOf(str[i])-13]);
    }
    } else {
      result.push(str[i])
    }
  }

  console.log(result.join(""));
  return result.join("");
}

rot13("SERR PBQR PNZC");