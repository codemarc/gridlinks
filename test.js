import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
})

async function main() {
   const models = await openai.models.list()
   models.data.forEach(model => {
     console.log(model.id)
   })

   const chatCompletion = await openai.chat.completions.create({
     messages: [{ role: 'user', content: 'Say this is a test' }],
     model: 'davinci-002'
   })
   console.dir(chatCompletion)
}

main()