# Dropdown (React-Version) V 1
#### By Empty Soul

## How to Use

Import the dropdown via "import Dropdown from '[PATH]/Dropdown/Dropdown.jsx'"

Create Array in parent component and pass it to your Dropdown.
The Dropdown also uses an unique component ID and an optional class.

Example Array (Uses Key ans map key and select value)

```js 
      const dropdownItems = [
        {dIKey:'select1', dIName: 'Select 1 Name'},
        {dIKey:'select2', dIName: 'Select 2 Name'},
        {dIKey:'select3', dIName: 'Select 3 Name'},
      ];
```

Example Dropdown Component with props:

```js
  <Dropdown dropdownItems={dropdownItems} dropdownId={'test-id'} dropdownClass={'dropdownClass'}/>
```
