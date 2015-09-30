Meteor.methods({
    ping: function (arg) {
        console.log(`Ping! Meteor-iOS says "${arg.data}".`);
        return 'Pong!';
    },
    clearMessages: function() {
        Messages.remove({});
    }
});
