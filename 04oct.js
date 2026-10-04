//Isomorphic Strings

function isIsomorphic(s,t){
    let MapObj={};
    for(let i=0;i<s.length;i++){
        if(MapObj.hasOwnProperty(s[i])){
            console.log(`Mapping ${MapObj[s[i]]} & ${t[i]}`);
            if(MapObj[s[i]]!=t[i])
            {
                return false;
            }
        }
        else
        {
            MapObj[s[i]]=t[i];
        }
    }
    console.log(MapObj);
}

// console.log(isIsomorphic("egg","add"));

//Sort Characters By Frequency

function frequencySort(str){
    let obj = {};

    for(let i=0; i<str.length; i++){
        if(obj.hasOwnProperty(str[i])){
            obj[str[i]] += 1;
        }
        else{
            obj[str[i]] = 1;
        }
    }

    console.log(obj);

    const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log(sortedEntries);

    let strans = "";
    for (const [key, count] of sortedEntries) {
        for(let k=0; k<count; k++){
            strans += key;
        }
    }

    console.log("Frequency Order:", strans);
    return strans;
}

console.log(frequencySort("Aabb"));