Template.view.helpers({
    messages: function () {
        return Messages.find();
    }
});

Template.view.rendered = function () {

};

Template.view.events({
    'submit form': function (e) {
        e.preventDefault();
        var message = e.target.message.value;
        var sender = 'Kevin';
        Messages.insert({ content: message, sender: sender});
        e.target.reset()
    },
    'click .btn-danger': function (e) {
        if (confirm('Delete all messages?')) {
            Meteor.call('clearMessages');
        }
    }
});