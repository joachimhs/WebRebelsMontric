Montric.ChartsModel = Montric.Model.extend({

});

Montric.ChartsModel.reopenClass({
    collection: Ember.A(),

    find: function(id) {
        return Montric.Model.find('/json/charts', id, Montric.ChartsModel, "chart");
    },

    findAll: function() {
        return Montric.Model.findAll('/json/charts', Montric.ChartsModel, "charts");
    }
});