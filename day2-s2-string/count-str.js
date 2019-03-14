function countWord(str,word){
    let count = 0;
    const words = str.split(' ');
    for(let i = 0; i< words.length; i++){
        if(words[i] == word){
            count = count + 1;
        }
    }
    return count;
}
console.log(countWord("Hello Good Morning","Good"))