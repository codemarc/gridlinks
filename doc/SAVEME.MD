## Data Model

#### TODO:
1. considerations
2. data schema
3. workflow

## Message of the Day

The Message of the Day (MOTD) component is a crucial part of the application, providing users with a daily dose of inspiration and motivation. It's designed to be flexible and customizable, allowing for different types of messages and authors.

This data for this component is created using generative ai. In our case use OpenAI's ChatGPT 4o we create the message of the day component using this prompt:

> CodeMarc:
>
> create a list of "message of the day" quotes formatted as an array of json objects containing the fields message and author

<br/>

```code
ChatGPT:

[
    {
        "message": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "message": "Success is not the key to happiness. Happiness is the key to success.",
        "author": "Albert Schweitzer"
    },
    {
        "message": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
    },
    ⋮
]
```

> CodeMarc:
>
> regenerate the quotes and make sure there is at least 50 of them. Then save them as a file named quotes.json

```code
ChatGPT:

I have generated the JSON file with at least 50 quotes. You can download the file here. ​
```
> CodeMarc:
>
> using the json object as a data source create a react component that renders a message picked at random from the list

```code
import { useState, useEffect } from 'react'ß
import quotes from '../data/quotes.json'

const MessageOfTheDay = () => {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    return (
        <div>
            <h1>Message of the Day</h1>
            <p>"{quote.message}"</p>
            <p><strong>- {quote.author}</strong></p>
        </div>
    );
};

export default MessageOfTheDay
```

This is the genesis of the message of the day component. When you are ready, have a look at the source to see [the completed version](https://github.com/codemarc/gridlinks/blob/c6766d46ba7f8b6aa48db5ae1edf9afc8d172753/src/components/Motd.jsx).
