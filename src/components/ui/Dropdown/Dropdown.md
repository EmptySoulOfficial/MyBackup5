# Dropdown (React-Version) V 1
#### By Empty Soul

## How to Use

Import the dropdown via "import Dropdown from '[PATH]/Dropdown/Dropdown.jsx'"

Create Array in parent component and pass it to your Dropdown.
The Dropdown also uses an unique component ID and an optional class.
Pass an initial value via "initialValue"-prop as 'text' or via object-selector.

Example Array (Uses Key ans map key and select value)

```js 
      const dropdownItems = [
        {dIKey:'select1', dIName: 'Select 1 Name'},
        {dIKey:'select2', dIName: 'Select 2 Name'},
        {dIKey:'select3', dIName: 'Select 3 Name'},
      ];
```

Example Dropdown Component with props:
("dropdownItems[1].dIKey" selects the key value of the second object)

```js
  <Dropdown dropdownItems={dropdownItems} initialValue={dropdownItems[1].dIKey} dropdownId={'test-id'} dropdownClass={'dropdown-small'}/>
```

! PASS ONLY KEY-VALUE through the initialValue !

### Style

You can adjsut the width / size via ".dropdown" class or the custom class you defined via dropdownClass.

