const jokes = [
    '',
    '',
    '',
    '',
  ];



module.exports = {
    name: 'joke',
    description: 'Sends a joke',
    permissions: ['SEND_MESSAGES'],

    async execute(client, message, args, profileData) {
        message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
    }
}