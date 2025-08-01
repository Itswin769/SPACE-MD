require('dotenv').config();

module.exports = {
  //Enter your session id here (CYPHER-X:~UEsDBBQAAAgIAL2mAVvXgvlcUwQAAG4HAAAKAAAAY3JlZHMuanNvbpVU27KiOBT9l7xqNSiCaNWpai4qKKKIgDrVDxECRLlJAohd*vsUnj7d*TDTc4ankKT2Xntd8h1kOSZohVow*Q6KEteQom5J2wKBKZCrMEQl6IMAUgimYLG8ec1dt8LCflhW0yOmcbL2Q3HnXC6YEflVHNnCMl0JV+sNPPugqM4J9v9QMPBC21s6os4dOLpBUDg8VuxAPUX3ksehcbHO4gbHS0Vr8zfw7CpCXOIsmhUxSlEJkxVqtxCXn4N*W2amu*C3M7jVOH1v4GDi3FVDSrzIU7drtGJGNOypKUz9z8H34mt+9HzztnbPvmTFrEvI0a+jQZ5wIrNEim467j2LpaZ5h09wlKFAD1BGMW0*zXulHGVV0FiJ0VYw52nzqG+n0yJv+BW9xY3p0uS4jT3n5EifA37YeeNDLTJcdq5664TOQushVwtvcZHypRgUe*8ea4plydL6d+Db8sMr1**D+2h+9lpzghczOZ8ZRa85aEZCdDk0mZ15s7PdMN*rMOd8x*kc*Hzsp8P7znZdjo8EXeDgOPVxPjc9xEYGrxqH*WxJLibF0S*4kFbln1BCtaB50C5I69Resmr1nKxuh4012V4U*8yM3Nnluuk1C7SbqGPRviZuFVeiC*HuNtv0MjZ17BwNlJ25ONpmpomMnO4v0dtroitq9QBMB88+KFGECS0hxXn22uP5PoBBbSO*RPRFL9Dd69bVR8hcnnfWYxJvydW8MFy2a9RaIuncyHjjkGpGzohvoA+KMvcRISjQMKF52a4RITBCBEz*+tYHGbrTd+G6dtygD0JcEupkVZHkMPhQ9eMQ+n5eZdRuM1*pFqgEU*bXNqIUZxHpeKwyWPoxrpESQ0rANIQJQT8nRCUKwJSWFfqZWiUPOuLNtTA8qsYI9EH6EgQHYAqG*GgsTCYDnmUnU*Er+dJ0VWFRfMkQBX2QvG7xI5YdDIUBJ3BDTpyKX7vt5094XbUAUYgTAqZAWSoqNcliZjI2XVuLheREkhJJ4Nc4H754532SG2Zc34fqXE9OiiIwJCIJnJsja3ANrOFaaOD5WJf8Rnbe*qFI13LgpXPV8EPLmHHRbWkbjTx8HO76fDC*I3GVEuEk10mVpuLmwBX5rcj4+45pJyy9DFa3i59c6GzB305rFw0bbV*6F1Vq3rpuAaqxj35vRhhWtOUsGze1pk34eFT7EPUeG2pcr3KwZ1fXqjVF3xRnPcuuZtpOwZZLot0hNnuBmW2W3HHCzGvnRpbifdvah6ub4B+OfSUm+fFS4ZeXOqG63xCjV*Az2Mn3n8K94+7sxT77v5X48ZL8SxrlECqP41kMoru99Kyoqse6sfTiPZqZJ80xLxuySIeG0NtHLng+v*VBkUAa5mXaRTkLyhwHoA*KvOr8qmdh*odmiqzrqvU+eAIJlX5lYI9TRChMCzAdjPkRKw4EbvR+a1vmhQZJ3HHgjsc3pzN0KxWFTSH9iBSQum8l6+D5N1BLAQIUAxQAAAgIAL2mAVvXgvlcUwQAAG4HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==)
  SESSION_ID: process.env.SESSION_ID || '',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
