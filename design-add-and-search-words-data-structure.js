/**Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter. */
class TrieNode {
    constructor() {
      this.childrens = {};
      this.endW = false;
    }
  }
  
  class WordDictionary {
    constructor() {
      this.root = new TrieNode();
    }
    
    addWord(word) {
      let curr = this.root;
      
      for (let ch of word) {
        if (!(ch in curr.childrens)) {
          curr.childrens[ch] = new TrieNode();
        }
        curr = curr.childrens[ch];
      }
      curr.endW = true;
    }
    
    
    search(word) {
      function dfs(node, idx) {
          let curr = node;
        
        for (let i = idx; i < word.length; i++) {
          let ch = word[i];
          if (ch === ".") {
            for (let child of Object.values(curr.childrens)) {
              if (dfs(child, i + 1)) {
                return true;
              }
            }
            return false;
          } else {
            if (!(ch in curr.childrens)) {
              return false;
            }
            curr = curr.childrens[ch];
          }
        }
        return curr.endW;
      }
  
      return dfs(this.root, 0);
    }
  
  };