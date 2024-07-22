import OpenAI from 'openai'
import process from 'process';
import fs from 'fs';


const createQuotes = async () => {
   const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY,})
   const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
      {
         role: "user",
         content: [
            {
               type: "text",
               text: 'create a list of 50 "message of the day" quotes formatted as an array of json objects containing the fields message and author',
            },
         ],
      },
   ],
   max_tokens: 2000,
   })

   console.dir(response)
   fs.writeFileSync('quotes.json', JSON.stringify(response))
}

const createList = async () => {
   const rawdata = fs.readFileSync('quotes.json')
   const jsondata = JSON.parse(rawdata)
   const quotes = jsondata.choices[0].message.content
   console.log(quotes)

}


async function main() {

   if(process.argv.includes('--create-quotes')) {
      await createQuotes()
   } else {
      await createList()
   }
}

main()