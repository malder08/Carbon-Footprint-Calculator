import React  from 'react';
import logo from '../Carbonacalclogo.png';
import {Link} from 'react-router-dom';
 function Resources() {
      return (
        <div>
          <header>
          <Link to="/">
        <img src={logo} alt="Our logo" className="Homelogo"/>
        </Link>
          <h1 className="Pagetitle">
            Helpful Resources on How To Reduce Your Carbon Footprint
          </h1>  
          </header>
          <div className="Linkstitle"><h2>
              General Ways To Reduce Carbon Footprint
            </h2></div>
          <div className="Links"> 
            <a href="https://css.umich.edu/factsheets/carbon-footprint-factsheet "> Carbon Footprint Facts </a><br />
            <a href="https://blogs.ei.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/">35 Ways To Reduce A Carbon Footprint</a><br />
            <a href="https://ourworldindata.org/food-choice-vs-eating-local"> Eating local</a><br />
            <a href="https://green.harvard.edu/tools-resources/poster/top-5-steps-reduce-your-energy-consumption"> HOw To Consume Less Energy</a>
            <a href=" https://www.epa.gov/environmental-topics/greener-living"> Greener Living</a><br />
          </div>
          <div className="Linkstitle"><h2> Ways To Throw Away Less</h2> </div>
          <div className="Links">
            <a href="https://www.denvergov.org/content/denvergov/en/trash-and-recycling/recycling/what-can-be-recycled.html">Recycling Guidelines </a><br />
            <a href="https://www.recycleacrossamerica.org/tips-to-recycle-right">
             Recycle Across America
            </a><br />
            <a href=" https://www.self.com/story/how-to-start-composting">
             How To Start composting
            </a>
          </div>
          <div className="Linkstitle"><h2>
              Ways To Shop Smarter
            </h2>
          </div>
          <div className="Links">
            <a href="https://directory.goodonyou.eco/">Goodonyou.eco</a><br />
            <a href="https://www.fashionrevolution.org/about/transparency/0">
              Fashion Transparency
            </a><br />
            <a href=" https://health.bastyr.edu/news/health-tips/2019/06/5-sources-protein-less-environmental-impact">
              Eco Friendly Protien Options
            </a>
            <div className="bottomtext">
              Learn, Reduce, Educate. 
            </div>
          </div>
        </div>
      );
    }
  export default Resources;