# Dropdown (React-Version) V 1.3
###### By Empty Soul

## Imports
- Import the dropdown via "import Dropdown from '[PATH]/Dropdown/Dropdown.jsx'"
- Import "useRef" from React in your parent component.
## How to Use

- Create Array in parent component and pass it to your Dropdown.
- To get a value or call a function out of the Dropdown component,
  you also have to define a useRef and pass a prop (here as "exampleProp") into the const.
- Pass an initial value via "initialValue"-prop as 'text' or via object-selector.
- The Dropdown also uses an unique component ID and an optional class.
- It's also possible to get the open / close state from the Dropdown component as boolean
  from the senCurrentState

<br/>

> Disclaimer: The dropdown is using variables in the color css props. Change if needed! 

Example Array (in parent component):

```js 
      const dropdownItems = [
        {dIKey:'select1', dIName: 'Select 1 Name'},
        {dIKey:'select2', dIName: 'Select 2 Name'},
        {dIKey:'select3', dIName: 'Select 3 Name'},
      ];
```
> :warning: No spaces in dIKey value !

<br>

Custom Ref-Function (also in parent component)

```js
 const dropdownRef = useRef(null);
    const customFunction = (exampleProp) => {
      // alert(exampleProp);
    };
```

<br>

Get current open / close state (true/false):

```js
    let getDropdownState = (state) => {
      // console.log('! Dropdown State: '+state)
    }
```

Example Dropdown Component with props:
("dropdownItems[1].dIKey" selects the key value of the second object)

```js
  <Dropdown dropdownItems={dropdownItems}
            initialValue={dropdownItems[0].dIKey} 
            refFunction={dropdownRef} 
            changeFunction={customFunction} 
            sendCurrentState={getDropdownState}
            dropdownId={'test-id'} 
            dropdownClass={'dropdown-customClass'}/>
```

> :warning: Pass only dIKey values through the initial value !

### Style

You can adjsut the width / size via ".dropdown" class or the custom class you defined.

## Dropdown component details

### props

- **dropdownItems** = passes dropdown array, which get maped as single items.
- **initialValue** = set the initial value, when component is loaded.
                      You can simply write the dIKey value in it or (better) select dIKey value
                      with array filter. (linke here)
- **refFunction** = simply pass your const with the given "useRef(null)" in it, 
                    so we can get a value out of it.
- **changeFunction** = here goes the custom function, which sits in the parent component.
                       (here as customFunction)
- **sendCurrentState** = give the sendCurrentState your conditional function with a prop in it, to get the boolean value.
- **dropdownId** = a simple element id, you can set to your dropdown component
- **dropdownClass** = a custom class, which is also given to your dropdown component for better styling options

### Update 1.3:
#### Styles
You can now add "**dropdown-negative**" to your custom class prop to make
the dropdown grow from bottom to top.

> You may have to change the bottom css prop, to display it correctly.
To invert the dropdowns arrow, simply uncomment the style blocks at the bottom
of the dropdown css.
