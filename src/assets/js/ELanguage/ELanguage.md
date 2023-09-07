# ELanguage by Empty Soul
#### V 2.1 (REACT Version)
_____
## How to import
```jsx
import { getLang, getLangVarable } from '<UR PATH>/ELanguage/ELanguage.jsx'
```

Inside your function:
```jsx
const eLang = getLang()
```
## How to use

```jsx
<p className="this_is_a_translated_text">{eLang.<UR DEFINET PROP IN JSON>}</p>
```
example:
```jsx
<p className="this_is_a_translated_text">{eLang.test}</p>
```

## How to use inside constructor

example:
```jsx
constructor() {
    super();

    let eLang = getLang(); //set eLang
    this.weekdays = [eLang.test]; //put translated text inside object
}
```

inside render return:
```jsx
render() 
    {
        return(
            <h1>{getLangVar('test')}</h1> // use exported getlangVar
        )
    }
```
____

## Infos
Each translation must be set as a string in the json (lan/lang.json).
Then call the desired translated text as an extension.
You can also add new languages.
Any undefined language will be replaced with English.

#### update 2.0
Can now be used inside constructor.
New and better code.

#### update 2.1
The HTML attribute "lang" is now also set to the selected/readed language.
(This can possibly be unoptimal for search engines)
