# Width-snitch

**Width Snitch** creates a child container just to show the browser width... That's all :)

I know, I know, it is pretty simple... It is really an excersise: my first plugin :)

## Requirements
* Jquery

## Installation

Include script file after the jQuery library 

  <script src="/path/to/jquery.width_snitch.min.js"></script>

## Usage
Call the `width_snitch` method on the body element.  
I like to use a development class ('dev') just in case I forget to remove both the plugin and the js code before uploading/delivering… You know, sometimes it happens…


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

### Options
| Option | Type | Description   |
| ------ | ---- | ------------- |
| *className* | String | (Optional) The class name of the width container. 'snith' will be used as default class name. |
| *style* | Object | (Optional) Styles can be defined through the `style` option or inside the main css file. It's up to you. |

## Demo

## License
Really?? 

