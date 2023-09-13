# Icons
### V 1.2.2 (REACT - MyBackup5 Version)
_____

## How to import 
```js
    import Icon from '<YOUR PATH>/js/Icon/Icon.jsx'
```

### Import new icon
Convert your Svg as symbol and place it into the Icons SVG between the svg tags like the follow.
The Id allways has to start with "Icon-" followed by the given name.

```svg
<svg display="none" xmlns="http://www.w3.org/2000/svg">
<!-- Your icon below -->
  <symbol id="Icon-test" viewBox="0 0 32 32">
    <path d="M0.729 10.191c-0.061-0.424-0.098-0.847-0.109-1.269 0-0.008 0-0.015 0-0.023 0.065-3.807 3.485-6.88 7.689-6.88s7.624 3.073 7.689 6.88c0.001 0.037 0.001 0.073 0.001 0.11 0-0.037 0-0.073 0.001-0.11 0.065-3.807 3.485-6.88 7.689-6.88s7.624 3.073 7.689 6.88h0.001c0 0 0.969 6.792-15.38 21.081 0 0-13.875-10.014-15.271-19.79z"></path>
  </symbol>
<-- -->
</svg>
```

## How to use

Place Icon component and fill it with the desired informations.
You can also define the icon size and color via css and leave the props here empty.
Make shure, you have placed your icon as symbol with the correct id inside the "Icons" SVG.

```js
    <Icon name="<ICON NAME FROM ICON SYMBOL ID>" size="<YOUR SIZE AS NUMBER>" color="<ICON COLOR IN HEX>"/>
```

## Example

```js
    <Icon name="test" size="20" color="#fefefe"/>
```
