import Ember from 'ember';

const { Controller } = Ember;
export default Controller.extend({
  columns: [
    {
      propertyName : 'name',
      template     : 'components/ui-table/cell/cell-event',
      title        : 'Name'
    },
    {
      propertyName : 'starts-at',
      template     : 'components/ui-table/cell/cell-date',
      title        : 'Date'
    },
    {
      propertyName   : 'roles',
      template       : 'components/ui-table/cell/cell-roles',
      title          : 'Roles',
      disableSorting : true
    },
    {
      propertyName   : 'sessionsByState',
      template       : 'components/ui-table/cell/cell-sessions',
      title          : 'Sessions',
      disableSorting : true
    },
    {
      propertyName   : 'speakers.length',
      title          : 'Speakers',
      disableSorting : true
    },
    {
      propertyName   : 'tickets',
      template       : 'components/ui-table/cell/cell-tickets',
      title          : 'Tickets',
      disableSorting : true
    },
    {
      propertyName   : 'url',
      template       : 'components/ui-table/cell/cell-link',
      title          : 'Public URL',
      disableSorting : true
    },
    {
      template       : 'components/ui-table/cell/cell-buttons',
      title          : 'Action',
      disableSorting : true
    }
  ],
  actions: {
    moveToDetails(id) {
      this.transitionToRoute('events.view', id);
    },
    editEvent(id) {
      this.transitionToRoute('events.view.edit.basic-details', id);
    }
  }
});
