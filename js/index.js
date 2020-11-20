var getEventData = function () {

	// Delete previous entries
	$("tr").remove(".printRow");
	$("tr").remove(".matchupRow");
	$("span").remove(".weekSpace");
	
	// Get selected week from drop down
	var week = $("#gameWeek").val().toString();

	// Get team mascot for team
	function getTeamMascot(abbr) {

		teamMascot = "";
		teams.forEach(function(teamName) {
			if (abbr === teamName.abbr) {
				teamMascot = teamName.name;
			}
			
		})
		return teamMascot;
	}
	
	// Get imageURL for team
	function getTeamLogo(abbr) {
		
		teamLogo = "";
		teams.forEach(function(teamName) {

			if (abbr === teamName.abbr) {
				teamLogo = teamName.imageURL;
			}
		})
		return teamLogo;
	}

	// Call API and format data into table
	$.ajax({
		method: "GET",
		url: "http://www.fantasyfootballnerd.com/service/schedule/json/w867b9rnzfx3/",
		dataType: 'json',
		success: function(json) {

			if (json) {
							
				json.Schedule.forEach(function(game) {

					if(game["gameWeek"] === week) {

						// Isolate useful variables
						var gameDate = game["gameDate"];
						var gameTime = game["gameTimeET"];
						var awayTeam = game["awayTeam"];
						var homeTeam = game["homeTeam"];
						var winner = game["winner"];


						// Append data to table
						$("#gameDataTable").append(
							"<tr class='matchupRow'><td><img class='logo' src='" + getTeamLogo(awayTeam) + "'/>" + "<input class='awayBox' type='checkbox'><span class='teamName'>" + getTeamMascot(awayTeam) + "</span></td>" +
							"<td><img class='logo' src='" + getTeamLogo(homeTeam) + "'/>" + "<input class='homeBox' type='checkbox'><span class='teamName'>" + getTeamMascot(homeTeam) + "</span></td>" +
							"<td>" + convToDate(gameDate) + " " + gameTime + "</td>" +
							"<td><img class='logo' src='" + getTeamLogo(winner) + "'/>" + "<span class='teamName'>" + getTeamMascot(winner) + "</span></td></tr>"
							)
					}
				})

				// Append the print row at the bottom
				$("#gameDataTable").append(
				"<tr class='printRow'>" +
					"<td colspan='4'>Total Points Scored On The Last Game Of the Sheet  " + 
					"<input type='text'>" +
						"<div class='printButton'><button class='btn btn-info' onClick='window.print()';><i class='fa fa-print'></i> Print Schedule</button>" + 
					"</div>" + 
					"</td>" + 
				"</tr>"
				)

				// Add title based on which week is selected
				$("#weekNumber").append("<span class='weekSpace'>Week " + week + " Schedule</span");

				// Toggle highlighting boxes
				$(".homeBox").on("click", function() {
		    		$(this).parent().toggleClass("highlight");
				});
		            
				$(".awayBox").on("click", function() {
		    		$(this).parent().toggleClass("highlight");
				});
					
			// If no JSON is returned
			} else {
				$("#noJSON").css("display", "block");
			}
	
		}
	 })
}

// Run geteventData function when submit button is clicked
$("#getButton").click(getEventData);

// Get the day of the week for each game
function convToDate(date) {
	var dateToConvert = new Date(date);
	var day = dateToConvert.getUTCDay();

	switch(day) {
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 4:
			return "Thursday";
		case 6:
			return "Saturday"
	}
}

// All team info
var teams = [
        {
            abbr:"ARI",
            name:"Cardinals",
            imageURL:"http://imgur.com/PQGVTGt.png"
        }, 
        {
            abbr:"ATL",
            name:"Falcons",
            imageURL:"http://imgur.com/Zz3I5nN.png"
        },
        {
            abbr:"BAL",
            name:"Ravens",
            imageURL:"http://imgur.com/w3XXZde.png"
        },
        {
            abbr:"BUF",
            name:"Bills",
            imageURL:"http://imgur.com/GHKLppi.png"
        },{
            abbr:"CAR",
            name:"Panthers",
            imageURL:"http://imgur.com/xQAl8h1.png"
        },
        {
            abbr:"CHI",
            name:"Bears",
            imageURL:"http://imgur.com/VsfZwgg.png"
        },
        {
            abbr:"CIN",
            name:"Bengals",
            imageURL:"http://imgur.com/RgNcuIa.png"
        },
        {
            abbr:"CLE",
            name:"Browns",
            imageURL:"http://imgur.com/gkTISXH.png"
        },
        {
            abbr:"DAL",
            name:"Cowboys",
            imageURL:"http://imgur.com/WdQKNvB.png"
        },
        {
            abbr:"DEN",
            name:"Broncos",
            imageURL:"http://imgur.com/kzTbzIc.png"
        },
        {
            abbr:"DET",
            name:"Lions",
            imageURL:"http://imgur.com/a4msPbs.png"
        },
        {
            abbr:"GB",
            name:"Packers",
            imageURL:"http://imgur.com/KqW5RQ7.png"
        },
        {
            abbr:"HOU",
            name:"Texans",
            imageURL:"http://imgur.com/sCfdZew.png"
        },
        {
            abbr:"IND",
            name:"Colts",
            imageURL:"http://imgur.com/NOeF8oH.png"
        },
        {
            abbr:"JAC",
            name:"Jaguars",
            imageURL:"http://imgur.com/kxmoYeP.png"
        },
        {
            abbr:"KC",
            name:"Chiefs",
            imageURL:"http://imgur.com/yF3SrUf.png"
        },
        {
            abbr:"LAR",
            name:"Rams",
            imageURL:"https://imgur.com/9NQi4s3.png"
        },
        {
            abbr:"LV",
            name:"Raiders",
            imageURL:"http://imgur.com/aOfdECt.png"
        },
        {
            abbr:"MIA",
            name:"Dolphins",
            imageURL:"http://imgur.com/fsKewgJ.png"
        },
        {
            abbr:"MIN",
            name:"Vikings",
            imageURL:"http://imgur.com/N0QB7sO.png"
        },
        {
            abbr:"NE",
            name:"Patriots",
            imageURL:"http://imgur.com/SVfCQEm.png"
        },
        {
            abbr:"NO",
            name:"Saints",
            imageURL:"http://imgur.com/yRUP1YP.png"
        },
        {
            abbr:"NYG",
            name:"Giants",
            imageURL:"http://imgur.com/d2Z5Y19.png"
        },
        {
            abbr:"NYJ",
            name:"Jets",
            imageURL:"http://imgur.com/KSapqdr.png"
        },
        {
            abbr:"PHI",
            name:"Eagles",
            imageURL:"http://imgur.com/DSpKud1.png"
        },
        {
            abbr:"PIT",
            name:"Steelers",
            imageURL:"http://imgur.com/IXiaULq.png"
        },
        {
            abbr:"SD",
            name:"Chargers",
            imageURL:"http://imgur.com/rIfP0Yy.png"
        },
         {
            abbr:"SEA",
            name:"Seahawks",
            imageURL:"http://imgur.com/RguqcK6.png"
        },
        {
            abbr:"SF",
            name:"49ers",
            imageURL:"http://imgur.com/ygxVQsT.png"
        },
        {
            abbr:"TB",
            name:"Buccaneers",
            imageURL:"http://imgur.com/xa7qeYC.png"
        },
        {
            abbr:"TEN",
            name:"Titans",
            imageURL:"http://imgur.com/gg7mhdS.png"
        },
        {
            abbr:"WAS",
            name:"Redskins",
            imageURL:"https://imgur.com/ay18QPQ.png"
        },
        {
        	abbr:"TIE",
        	name:"Tie",
        	imageURL:"http://i.imgur.com/6u9ouiY.jpg"
        }
    ];



