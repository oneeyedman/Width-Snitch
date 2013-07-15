![Width Snitch logo](https://dl.dropboxusercontent.com/u/381855/width-snitch-icon.png)

**Width Snitch** creates a child container just to show the browser width... That's all :)

I know, I know, it is pretty simple, but this is what I need to work with mediaqueries.

## Requirements
* Jquery

## Installation

Include script file after the jQuery library 

  <script src="/path/to/jquery.width_snitch.min.js"></script>

## Usage
Call the `width_snitch` method on the body element.  
I like using a development class ('dev') just in case I forget to remove both the plugin and the js code before uploading/delivering… You know, sometimes it happens…

```JavaScript
$('body.dev').width_snitch({
  className: 'width_snitch',
  style: {
    'background': 'rgba(0,0,0,.8)',
    'border':'none',
    'border-radius': '5px',
    'box-shadow' : '0 1px 5px rgba(0, 0, 0, .3)',
    'color': '#fff',
    'font' : '1.5em arial, sans-serif',
    'left':'.5em',
    'padding': '.5em 1em',
    'position': 'fixed',
    'top': '.5em',
    'z-index': '666'
  }
});
```

### Options
| Option | Type | Description   |
| ------ | ---- | ------------- |
| *className* | String | (Optional) The class name of the width container, `snitch` will be used as default class name. |
| *style* | Object | (Optional) Styles can be defined through the `style` option or inside the main css file. It's up to you. |

## Demo
* [See it in action at sidiostedalimones.com](http://www.sidiostedalimones.com/_projects/width-snitch/demo.html)


## License
Really??
