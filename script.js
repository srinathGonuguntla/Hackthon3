function searchDictionary() {
    var searchTerm = document.getElementById('searchTerm').value;
    // Replace this with your own dictionary data or API call
    var dictionary = {
        "apple": "A fruit that grows on trees and is typically red, yellow, or green.",
        "banana": "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
        "orange": "A round juicy citrus fruit with a tough bright reddish-yellow rind."
    };
    var result = dictionary[searchTerm];
    if (result) {
        document.getElementById('result').innerHTML = "<strong>" + searchTerm + ":</strong> " + result;
    } else {
        document.getElementById('result').innerHTML = "Word not found in the dictionary.";
    }
}