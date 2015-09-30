Meteor.methods({
    ping: function (arg) {
        console.log('Ping! Meteor-iOS says ${arg}.');
        return 'Pong!';
    },
    clearMessages: function() {
        Messages.remove({});
    }
});
