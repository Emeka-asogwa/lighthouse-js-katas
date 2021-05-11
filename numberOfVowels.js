var numberOfVowels =function(word){
  count=0;
  for (var i=0;i<word.length;i++){
    if (word[i]==='a' || word[i]==='e' || word[i]==='i' || word[i]==='o' || word[i]==='u'){
      count+=1;

    }
  } return count;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));  

