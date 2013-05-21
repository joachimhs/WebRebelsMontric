var Montric = Ember.Application.create();

Montric.Router.map(function() {
    this.resource("charts", {path: "/"}, function() {
        this.route("chart", {path: "/chart/:chart_id"});
    });
});

Montric.ChartsRoute = Ember.Route.extend({
    model: function() {
        return Montric.ChartsModel.findAll();
    }
});

Montric.ChartsChartRoute = Ember.Route.extend({
    model: function(chart) {
        return Montric.ChartModel.find(chart.chart_id);
    }
});


Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    '{{render header}}' +
    '{{outlet}}'
);

Ember.TEMPLATES['header'] = Ember.Handlebars.compile('' +
    '<div id="headerArea">' +
        '{{#linkTo charts}}<img src="/img/logo-small.png" />{{/linkTo}}' +
    '</div>'
);

Ember.TEMPLATES['charts'] = Ember.Handlebars.compile('' +
    '<div id="menuArea">' +
        '<h1>Charts</h1>' +
        '<ul>' +
        '{{#each controller}}' +
            '<li>{{#linkTo charts.chart this.chart}}{{name}}{{/linkTo}}</li>' +
        '{{/each}}' +
        '</ul>' +
    '</div>' +

    '{{outlet}}'
);

Ember.TEMPLATES['charts/chart'] = Ember.Handlebars.compile('' +
    '<div id="chartsArea">' +
        //'{{chartValue}}' +
        '{{view Montric.ChartView chartBinding="this"}}' +
    '</div>'
);