import axios from 'axios';
import { SOLR_SERVER } from './constants'

class SolrService {


  constructor(itemPerPage) {
    const defaultFacetParams = {
                                lang:{field:'tweet_lang'},
                                tdate:{field:'tweet_tdate',type:'range',start:'NOW/DAY-5MONTH',end:"NOW/DAY+5MONTH",gap:'+1MONTH',mincount:1}
                                };
    this.config = {
        headers: {crossDomain: true},
        params:{
          json:{
            limit:itemPerPage,
            query:"*:*",
            facet:defaultFacetParams
          },
          wt:'json',
          hl:'on'
          }
    };
    this.config.params['hl.method'] = 'unified'
  }

  queryMap(search, successFn) {
    const mapConfig = {
        headers: {crossDomain: true},
        params:{json:{ limit:50, query:search, filter:'tweet_loc:[-90,-180 TO 90,180]'},
        wt:'json'}
    };
    axios.get(SOLR_SERVER,mapConfig).then(successFn)
  }

  query(search, start, filter, successFn) {

    if(search){
      this.config.params.json.query=search;

      if(filter)
        this.config.params.json.filter=filter;

      this.config.params.json.offset=(start*this.config.params.json.limit);
      axios.get(SOLR_SERVER,this.config)
      .then(successFn)
    } else {
      //if empty we should get trending tweets
      console.log("try to get trending")
    }
  }

}

export default SolrService;
