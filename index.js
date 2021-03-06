const { Telegraf } = require('telegraf');
// fs node jsning fayllar bilan ishlash un moduli
const fs = require('fs')
// bu word faylimizning buffer sifatida saqlanib olinishi keyinchalik jo'natish un
const buffer = fs.readFileSync('./university_info.docx')
// bu word faylimizning buffer sifatida saqlanib olinishi keyinchalik jo'natish un
const buffers = fs.readFileSync('./kontrakt_info.docx')

const TOKEN = '1979962335:AAEHD90r7lF0uOA0T0foQriddjnWt4r1U4k'

const bot = new Telegraf(TOKEN)



bot.start((ctx, next) => {
    welcome(ctx)
})

function welcome(ctx) {
    const helloMessage = 'International European University'
    bot.telegram.sendMessage(ctx.chat.id, helloMessage,
        {
            reply_markup: {
                keyboard: [
                    [
                        { text: 'π₯ BIZ HAQIMIZDA π₯' }
                    ],
                    [
                        { text: 'π Magistratura va bakalavr π' },
                        { text: 'π±BIZNING IJTIMOIY TARMOQLARπ±' },
                        
                    ],
                    [
                        { text: 'π CALL CENTER π' },
                        { text: 'π’ BIZNING MANZIL π’' },
                    ],
                    [
                        { text: 'π± Administrator π±' },
                    ],

                ],
                realize_keyboard: true
            }
        }
    )
}

bot.hears('π₯ BIZ HAQIMIZDA π₯', ctx => {
   
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffer, filename: './university_info.docx.' })

    ctx.reply('Bu erda biz haqimizda koproq malumotga ega bolishingiz mumkinπ')

})



bot.hears('π Magistratura va bakalavr π', ctx => {
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffers, filename: './kontrakt_info.docx' })

    ctx.reply('Shartnoma narxini ushbu fayldan bilib olishingiz mumkinπ')

})


bot.hears('π±BIZNING IJTIMOIY TARMOQLARπ±', ctx => {
    ctx.reply('π²  Websayt : Ieu.edu.ua/uz                                                                           π² Telegram: https://t.me/xalqarouniversitet                                                                                                           π²  Instagram: https://www.instagram.com/meu_uz/')
   
})


bot.hears('π CALL CENTER π', ctx => {
    ctx.reply('Π’Π΅Π»: +99890.006.44.42 | +99890.006.44.43')

})


bot.hears('π’ BIZNING MANZIL π’', ctx => {
    ctx.reply('https://maps.app.goo.gl/w2FrNxaFt28ma7WW9')

})

bot.hears('π± Administrator π±', ctx => {
    ctx.reply('@Ieu_vakolatxonasi01')
    ctx.reply('Administratorga savollar: +998900064443')

})

bot.launch()