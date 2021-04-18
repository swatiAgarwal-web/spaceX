import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Home.css";
import Loader from 'react-page-loading'


const Home = (props) => {
	// holds the response data from API
	const [data, setData] = useState([]);
	// selected "Launch Year" from Filter
	const [launchYear, setLaunchYear] = useState("");
	// selected "Success Launch" from Filter
	const [successLaunch, setSuccessLaunch] = useState("");
	// selected "Success Landing" from Filter
	const [successLand, setSuccessLand] = useState("");
	// A flag/check to process the data to display/execute set of code snippet
	const [isDataLoaded, setIsDataLoaded] = useState(false);
  // holds URL query parameters
  const [urlFilter, setUrlFilter] = useState(props.filter);

	useEffect (() =>{
		/*
		 * When the isDataLoaded is set false, make API request and set isDataLoaded to true
		 * Preparing params payload based on filters selection for the API request 
		 * preparing URL params to be set based on filter selection
		 */
		if(!isDataLoaded) {
		let params = {limit : 100};
		let urlParams = "";
		
		if(launchYear) {
			params.launch_year = launchYear;
			urlParams += (urlParams) ? "&launch_year="+launchYear : "?launch_year="+launchYear;
		}
		
		if(successLaunch) {
			params.launch_success = successLaunch;
			urlParams += (urlParams) ? "&launch_success="+successLaunch : "?launch_success="+successLaunch;
		}
		
		if(successLand) {
			params.land_success = successLand;
			urlParams += (urlParams) ? "&land_success="+successLand : "?land_success="+successLand;
		}

    // If Page is refreshed with filter data in the URL
    if(urlFilter) {
      const query = new URLSearchParams(urlFilter);
      const launchYear = query.get("launch_year");
      const launchSuccess = query.get("launch_success");
      const landSuccess = query.get("land_success");

      if(launchYear) {
        params.launch_year = launchYear;
        setLaunchYear(parseInt(launchYear));
      }

      if(launchSuccess) {
        params.launch_success = launchSuccess;
        setSuccessLaunch(launchSuccess);
      }

      if(landSuccess) {
        params.land_success = landSuccess;
        setSuccessLand(landSuccess);
      }

      urlParams = urlFilter;

      setUrlFilter("");
      
    }

		axios.get("https://api.spacexdata.com/v3/launches", {
			params : params
		}).then ((res)=>{
			let data = res.data;
			setData(data);
			setIsDataLoaded(true);
			// change URL based on filtered data		
      window.history.pushState(null, "", "/"+urlParams);						
		})
		}
	},[isDataLoaded,launchYear,successLaunch,successLand,urlFilter]);
	
	/*
	 * An event when "Launch Year" is filtered
	 * To toggle selection/deselection, setting state value 
	 */
	const handleClickLaunchYear =(event) =>{
		let selectedLaunchYear = parseInt(event.target.innerText);

		if(selectedLaunchYear === launchYear) {
			selectedLaunchYear = "";
		}
		setLaunchYear(selectedLaunchYear);
		setIsDataLoaded(false);
	}

	/*
	 * An event when "Successful Launch" is filtered
	 * To toggle selection/deselection, setting state value 
	 */
	const handleClickLaunchSuccess =(event) =>{
		let selectedLaunchSuccess = event.target.innerText;
		if(selectedLaunchSuccess === successLaunch) {
			selectedLaunchSuccess = "";
		}
		setSuccessLaunch(selectedLaunchSuccess);
		setIsDataLoaded(false);
	}
	
	/*
	 * An event when "Successful Landing" is filtered
	 * To toggle selection/deselection, setting state value 
	 */	
	const handleClickLandSuccess =(event) =>{
		let selectedLandSuccess = event.target.innerText;
		if(selectedLandSuccess === successLand) {
			selectedLandSuccess = "";
		}
		setSuccessLand(selectedLandSuccess);
		setIsDataLoaded(false);
	}

// Array for "Launch Year" filter
let years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
let displayYears = [];
for(const [i, v] of years.entries()){
	let launchYearClass = "lightGreen";

	if(v === parseInt(launchYear)) {
		launchYearClass = "darkGreen";
	}
	displayYears.push(
		<button className={`filterOption ${launchYearClass}`} id={`year${i}`} key={`keyYear${i}`} onClick={handleClickLaunchYear}>
			{v}
		</button>
	)
};

// Successful Launch filter 
let launchStatus = ["true", "false"];
let displayLaunchStatus = [];
for(const [i, v] of launchStatus.entries()){
	let successClass = "lightGreen";

	if(v === successLaunch) {
		successClass = "darkGreen";
	}
	displayLaunchStatus.push(
		<button className={`filterOption ${successClass}`} id={`launch${i}`} key={`keySuccess${i}`} onClick={handleClickLaunchSuccess}>
			{v}
		</button>
	)
};
	
// Successful Landing filter	
let landStatus = ["true", "false"];
let displayLandStatus = [];
for(const [i, v] of landStatus.entries()){
	let successClass = "lightGreen";

	if(v === successLand) {
		successClass = "darkGreen";
	}
	displayLandStatus.push(
		<button className={`filterOption ${successClass}`} id={`land${i}`} key={`keyLand${i}`}onClick={handleClickLandSuccess}>
			{v}
		</button>
	)
};

// preparing view data from response state data	
let cardsData = data.map((value, index) => {
		let launchStatusValue = "";
		if(value.launch_success !== null){
			launchStatusValue = value.launch_success.toString();
		};
		
		let landSuccess = "";
		if(value.rocket.first_stage.cores[0].land_success !== null) {
			landSuccess = value.rocket.first_stage.cores[0].land_success.toString();
		}

		return (<div className="card" key={value.flight_number}>
			<img alt={value.mission_name} src={value.links.mission_patch_small}/>
			<p>{value.mission_name} #{value.flight_number}</p>
			<p><strong>Mission Ids : </strong>{value.mission_id.join(", ")}</p>
			<p><strong>Launch year : </strong>{value.launch_year}</p>
			<p><strong>Successful launch : </strong>{launchStatusValue}</p>
			<p><strong>Successful landing : </strong>{landSuccess}</p>
		</div>)
});

// If Launch Programs data available, display else display message with image		
let bodyData = cardsData.length !== 0 ? (
	<main className="content column">
		{cardsData}
	</main>
	) : (
<div style={{ padding: "20px", margin: "0 auto"}}>
	<p style={{ paddingBottom: "0px", margin: "60px 0 30px 0 " }}>
		<span style={{ fontSize: "100px" }} role="img" aria-label="No Data" alt="Invalid input">
				&#128543;
		</span>
	</p>
	<p style={{ padding: "0px 0px 10px 0px ", margin: "0px 0px 0px 0px" }}>
		There is no data available for selected filter/s. <br/>
		Please try again with new selections!!!
	</p>
</div>
);

/* 
 * if data flag is true, display left panel (Filter options) and right panel 
   (launch programs view) othewise display a loader
 */

return isDataLoaded ? (
	<React.Fragment>
	<Loader loader={"bubble-spin"} color={"#c5e09b"} size={8}>
	<div className="container">
		<header className="header column">
			SpaceX Launch Programs
		</header>
		<aside className="sidebar column">
			<div className="filterWrapper">
				<div className="heading">Filters</div>
				<div className="filterTitle">Launch Year</div>
				{displayYears}
				
				<div className="filterTitle">Successful Launch</div>
				{displayLaunchStatus}
				
				<div className="filterTitle">Successful Landing</div>
				{displayLandStatus}
			</div>
		</aside>
		{bodyData}
		<footer className="footer">Developed By : Swati Agarwal</footer>
	</div>
	</Loader>
	</React.Fragment>
	
) :(
<div></div>
)

	
}

export default Home;
