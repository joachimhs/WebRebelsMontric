var Montric = Ember.Application.create();

Montric.Router.map(function() {

});

Montric.ChartsRoute = Ember.Route.extend({
});

Montric.ChartsChartRoute = Ember.Route.extend({
});


Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    '{{outlet}}'
);

Ember.TEMPLATES['header'] = Ember.Handlebars.compile('' +
    '<div id="headerArea">' +
        '<img src="/img/logo-small.png" />' +
    '</div>'
);

Ember.TEMPLATES['charts'] = Ember.Handlebars.compile('' +
    '<div id="menuArea">' +
        '<h1>Charts</h1>' +
    '</div>' +

    '{{outlet}}'
);

Ember.TEMPLATES['charts/chart'] = Ember.Handlebars.compile('' +
    '<div id="chartsArea">' +
        'Chart Goes Here!' +
    '</div>'
);