import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  titleToken(model) {
    return model.get('name');
  },

  model(params) {
    return this.store.findRecord('event', params.event_id, { include: 'social-links,event-copyright' });
  }
});
