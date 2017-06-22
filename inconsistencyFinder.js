#!/usr/bin/env node
var  inconsistencyFinder=require('./Fantasia/InconsistencyIdentifier/InconsistencyIdentification.js');
var path=process.cwd();
inconsistencyFinder.getInconsistency(path);