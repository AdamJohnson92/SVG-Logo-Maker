const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter the text for your logo, with a maximum of three characters.',
    },  

    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the color that you would like the text to be.',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape from the following list.',
        choices: ['circle', 'triangle', 'square']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color that you would like the shape to be.',
    }]

function init() {inquirer
    .prompt(questions) 
    .then(function(data) {
      console.log(data)
  
    fs.writeFile("logo.svg", generateMarkdown (data), function (err)
        {if (err) 
          {console.log(err)
         } else {
            console.log('Success!')
          }
        }
        );
    });}
  
  init();