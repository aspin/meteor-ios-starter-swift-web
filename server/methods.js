/*

    ADD IN SERVER METHODS HERE.

    e.g. if you need to call a secure function from the
    server that has full access to database.

*/

Meteor.methods({
    ping: function (arg) {
        console.log('PING!');
        console.log(arg);
        return 'PONG!';
    },
    clearMessages: function() {
        Messages.remove({});
    }
});