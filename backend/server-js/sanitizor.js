const badStuff = ['<', ',', '.', "\\", '/', '|', '?', '"', "'", ':', ';', '}', '{', '[', ']', '(', ')', '=', '+', '_', '-', '*', '!', '@', '#', '$', '%', '^', '&', '~', '`', '>']
module.exports ={
    sanitize:function(word) {
        for(let i = 0; i < badStuff.length; i++) word = word.split(badStuff[i]).join("");
        if(word.length > 30){
            word = word.substring(0, 50)
        }
        return word;
    }
}

