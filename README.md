## Javascript Unit testing with Jasmine


### run the app

it's a simple web page and did not use a third party library
*you can simply* open the project by

1. os explorer

open index.html file with your default browser

2. terminal

```bash
$ cd path/to/project/path
$ start index.html
```  
 

### Tests included

* **RSS Feeds**

the tests `All Feeds are defined, URL has a right Url, URL has a right name`
   
in this test i have to test that whether the url names and urls are present
 and not containing only spaces
 

* **The menu**

the tests `menu element is hidden, clicking on the menu change the visibilty of sidebar`

first i have to check if the *side menu* is hidden when the page loaded

second i get to **explicit** triggering the click event on *menu icon*

to be able to correctly testing it
 

* **Initial Entries**

the tests `Initial Entries`   

make sure the content is loaded before applying tests 
by using **beforeAll**

* **New Feed Selection**

the tests `New Feed Selection`

apply nested asynchronous tests and remove the dependency variables 

from previous tests



### Unit testing is awesome