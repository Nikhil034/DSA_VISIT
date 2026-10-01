//Given a string s consisting of words and spaces, return the length of the last word in the string.

function LengthofLastWord(str){
    console.log(str.split(" "));
    const SplitStr=str.split(" ");

    for(let i=SplitStr.length-1;i>0;i--){
        if(SplitStr[i]!="")
        {
          return SplitStr[i].length;
        }
    }
}

// console.log(LengthofLastWord("luffy is still joyboy"));

//Find Words Containing Character

function findWordsContaining(WordArray,FindCharacter){
    let ContainArrayIndex=[];
    // console.log(FindCharacter);

    for(let k=0;k<WordArray.length;k++){
        // console.log("Array word:",WordArray[k]);
        for(let j=0;j<WordArray[k].length;j++){
        //    console.log("Individual Word character:",WordArray[k][j]);

          if(WordArray[k][j]==FindCharacter){
            if(!ContainArrayIndex.includes(k)){
                ContainArrayIndex.push(k);
            }
          }

        }
    }
    return ContainArrayIndex;
}

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"z"));