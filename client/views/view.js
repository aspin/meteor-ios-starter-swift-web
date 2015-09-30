Template.view.helpers({
    messages: function() {
        return Messages.find();
    }
});

Template.view.events({
    'submit form': function(e) {
        e.preventDefault();
        let message = e.target.message.value,
            sender = 'Web Client';
        Messages.insert({ content: message, sender: sender});
        e.target.reset()
    },
    'click .btn-danger': function(e) {
        if (confirm('Delete all messages?')) {
            Meteor.call('clearMessages');
        }
    }
});
