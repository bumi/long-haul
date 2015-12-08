function loadParticipants(rsvpElement) {
  var participants = new Stamplay.Cobject('participant').Collection;

  var meetup = $(rsvpElement).data('meetup');
  var participantList = $(rsvpElement).find('.participants');

  participants.equalTo('meetup', meetup).pagination(1,1000).fetch().then(function() {
    participantList.html('');
    $.each(participants.instance, function(index, p) {
      var participantEntry = $('<div class="participant"><nobr><img src="" class="avatar" /><span class="name"></span></nobr>');
      participantEntry.find('.name').html(p.get('name'));
      participantEntry.find('.avatar').attr('src', '//www.gravatar.com/avatar/' + p.get('gravatarHash') + '?s=40');
      participantList.append(participantEntry)
    });
  });
};
$(function() {

  $('.rsvp[data-meetup]').each(function(index, e) {
    loadParticipants(e);
  });


  $('.rsvp form').on('submit', function(e) {
    e.preventDefault();
    var form = $(this);
    form.find('input[type="submit"]').val('loading...');
    var participant = new Stamplay.Cobject('participant').Model;
    participant.set('name', form.find('input[name="name"]').val());
    participant.set('email', form.find('input[name="email"]').val());
    participant.set('meetup', form.data('meetup'));
    participant.set('gravatarHash', MD5(form.find('input[name="email"]').val()));
    participant.save().then(function() {
      loadParticipants(form.parent('.rsvp'));
      form.find('input[type="submit"]').val('registered');
      form.find('input[name="name"]').val('');
      form.find('input[name="email"]').val('');
      form.find('.success').show();
    });
  });

});
