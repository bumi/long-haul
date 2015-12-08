function loadParticipants(rsvpElement) {
  var participants = new Stamplay.Cobject('participant').Collection;

  var meetup = $(rsvpElement).data('meetup');
  var participantList = $(rsvpElement).find('.participants');

  participants.equalTo('meetup', meetup).pagination(1,1000).fetch().then(function() {
    participantList.html('');
    $.each(participants.instance, function(index, p) {
      var participantEntry = $('<div class="participant"><nobr><img src="" class="avatar" /><span class="name"></span></nobr>');
      participantEntry.find('.name').html(p.get('name'));
      if(p.get('gravatarHash') != '') {
        participantEntry.find('.avatar').attr('src', '//www.gravatar.com/avatar/' + p.get('gravatarHash') + '?s=40');
      }
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
    participant.set('meetup', form.data('meetup'));
    var email = form.find('input[name="email"]').val();
    if(email != '') {
      participant.set('email', email);
      participant.set('gravatarHash', MD5(email));
    }
    participant.save().then(function() {
      loadParticipants(form.parent('.rsvp'));
      form.find('input[type="submit"]').val('registered');
      form.find('input[name="name"]').val('');
      form.find('input[name="email"]').val('');
      form.find('.success').show();
    });
  });

});
