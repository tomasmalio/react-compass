# React Compass
React component that renders a visual compass allowing orientation to be displayed through dynamic rotation.

## How to use implement

Simply, you must execute the next command in your terminal:

```bash
npm install simple-react-compass
```

And then, you can added in your views like this:

```js
import { Compass } from 'simple-react-compass';

export const App = () => {
  return (
    <div>
      <Compass value={45} />
    </div>
  );
}
```

Let's go ahead and see what kind of properties you can share to the component to customize as you want.

## Properties


| Prop                | Type    | Description                                                                 | Default |
| ------------------- | ------- | --------------------------------------------------------------------------- | ------- |
| `value`             | number  | Value in degrees for the arrow's orientation.                               | `0`     |
| `displayLabel`      | boolean | Whether to display the degree and direction label.                          | `false` |
| `width`             | number  | Width of the compass component.                                             | `null`  |
| `height`            | number  | Height of the compass component.                                            | `null`  |
| `borderColor`       | string  | Border color of the compass.                                                | `null`  |
| `backgroundColor`   | string  | Background color of the compass.                                            | `null`  |
| `labelColor`        | string  | Color of the label text.                                                    | `null`  |
| `displayCompassLine`| boolean | Whether to display the central vertical and horizontal lines.               | `true`  |
| `displayCompassTick`| boolean | Whether to display the small lines between each cardinal direction.         | `true`  |


## Styles
The styles for this component are defined in src/Compass.scss. Make sure to import this file into your application where you use the component.

# Author
Tomás Malio

# License
MIT
