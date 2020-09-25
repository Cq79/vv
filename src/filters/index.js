import Vue from 'vue';
import data from './date.js';

Vue.filter('data',data);

import {fillzero} from './fillzero.js'

Vue.filter('fillzero',fillzero)