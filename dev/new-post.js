const inquirer = require('inquirer');
const fs = require('fs');

const basicQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the post?',
        validate: function(val) {
            var pass = val.length > 0;
            return pass || 'Posts must have a title.'
        }
    },
    {
        type: 'input',
        name: 'categories',
        message: 'Enter space-separated categories:',
        validate: function(val) {
            var pass = val.length > 0;
            return pass || 'Must have at least one category.'
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description for the post:',
        validate: function(val) {
            var pass = val.length > 0;
            return pass || 'Must have a description.'
        }
    },
    {
        type: 'confirm',
        name: 'hero',
        message: 'Does the post have a hero image?'
    }
]

const heroQuestions = [
    {
        type: 'input',
        name: 'heroPath',
        message: 'Path to the hero image:',
        validate: function(val) {
            var pass = val.length > 0;
            return pass || 'Path can\'t be empty.'
        }
    },
    {
        type: 'input',
        name: 'heroAlt',
        message: 'Enter alt text for the image:',
        validate: function(val) {
            var pass = val.length > 0;
            return pass || 'Alt text can\'t be empty.'
        }
    },
]
var frontMatter = {
    layout: 'post',
    title: '',
    date: null,
    categories: '',
    hero: '',
    heroalt: '',
    description: '',
}

function zeroPad(val) {
    return ('0' + val).slice(-2);
}

function formatDate(d) {   
    var yy = d.getFullYear();
    var mm = zeroPad(d.getMonth() + 1)
    var dd = zeroPad(d.getDate())
    return `${yy}-${mm}-${dd}`
}

function formatTime(d) {
    var h = zeroPad(d.getHours())
    var m = zeroPad(d.getMinutes())
    var s = zeroPad(d.getSeconds())
    return `${h}:${m}:${s}`
}


function basic() {
    var prompt = inquirer.prompt(basicQuestions).then(answers => {
        frontMatter.title = answers.title;
        frontMatter.categories = answers.categories;
        frontMatter.description = answers.description;

        if (answers.hero) hero();
    });

    return prompt;
}

function hero() {
    inquirer.prompt(heroQuestions).then(answers => {
        frontMatter.hero = answers.heroPath;
        frontMatter.heroalt = answers.heroAlt;
    });
}

function main() {
    console.log('Creating a new post...')
    
    var promptData = new Promise(resolve => {
        inquirer.prompt(basicQuestions).then(answers => {
            frontMatter.title = answers.title;
            frontMatter.categories = answers.categories;
            frontMatter.description = answers.description;
    
            if (answers.hero) {
                return inquirer.prompt(heroQuestions);
            } else {
                return new Promise(resolve => {
                    resolve()
                });
            }
        }).then(result => {
            if (result) {
                frontMatter.hero = result.hero;
                frontMatter.heroalt = result.heroAlt;
            }
            var d = new Date();
            var dd = formatDate(d);
            var tt = formatTime(d);
            var ft = ''
            ft += '---\n'
            ft += `layout: ${frontMatter.layout}\n`
            ft += `date: ${dd} ${tt}\n`
            ft += `categories: ${frontMatter.categories}\n`
            ft += `hero: ${frontMatter.hero}\n`
            ft += `heroalt: ${frontMatter.heroalt}\n`
            ft += `description: ${frontMatter.description}\n`
            ft += '---\n'
            
            var fileName = dd + '-' + frontMatter.title.replace(' ', '-') + '.markdown';
            fs.writeFile('./_posts/' + fileName, ft, err => {
                if (err) {
                    throw new Error(err)
                }
            })

            console.log('Finished!');
        });
    });
}

main()