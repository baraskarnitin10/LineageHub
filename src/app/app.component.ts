import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

import HC_sankey from 'highcharts/modules/sankey';
import HC_depwheel from 'highcharts/modules/dependency-wheel';

HC_sankey(Highcharts);
HC_depwheel(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'tomato',
    },
  },
  legend: {
    enabled: false,
  },
});

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;

  options: Highcharts.Options = {
    title: {
      text: 'Highcharts Dependency Wheel',
    },

    series: [
      {
        keys: ['from', 'to', 'weight'],
        data: [
          ['Brazil', 'Portugal', 1],
          ['Brazil', 'France', 1],
          ['Brazil', 'Spain', 1],
          ['Brazil', 'England', 1],
          ['Canada', 'Portugal', 1],
          ['Canada', 'France', 5],
          ['Canada', 'England', 1],
          ['Mexico', 'Brazil', 1],
          ['Mexico', 'France', 1],
          ['Mexico', 'Spain', 5],
          ['Mexico', 'England', 1],
          ['USA', 'Brazil', 1],
          ['USA', 'France', 1],
          ['USA', 'Spain', 1],
          ['USA', 'England', 5],
          ['Portugal', 'Angola', 2],
          ['Portugal', 'Senegal', 1],
          ['Portugal', 'Morocco', 1],
          ['Portugal', 'South Africa', 3],
          ['France', 'Angola', 1],
          ['France', 'Senegal', 3],
        ],
        type: 'dependencywheel',
        name: 'Dependency wheel series',
        size: '95%',
      },
    ],
  };
}
