var gameData;

$("#getButton").prop("disabled", true);
$("#gameWeek").prop("disabled", true);

function displayData() {
    
	// Delete previous entries
	$("tr").remove(".printRow");
	$("tr").remove(".matchupRow");
    $("span").remove(".weekSpace")
	
	// Get selected week from drop down
    var week = $("#gameWeek").val().toString();

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

    // Get the day of the week for each game
    function formatScore(awayScore, homeScore) {
        var formattedScore;

        if (awayScore === "" || homeScore === "") {
            formattedScore = '';
        } else {
            formattedScore = awayScore >= homeScore ?
            awayScore + " - " + homeScore :
            homeScore + " - " + awayScore;
        }

        return formattedScore;
    }
    
    // Get team mascot for team
	function getTeamMascot(abbr) {

		teamMascot = "";
		teams.forEach(function(teamName) {
			if (abbr === teamName.abbr) {
				teamMascot = teamName.name;
			}
        });
        
		return teamMascot;
	}
	
	// Get imageURL for team
	function getTeamLogo(abbr) {
		
		teamLogo = "";
		teams.forEach(function(teamName) {
			if (abbr === teamName.abbr) {
				teamLogo = teamName.imageURL;
			}
        });
        
		return teamLogo;
    }
    
    function addAllClasses() {
        $(".awayBox").addClass("awayBox");
        $(".homeBox").addClass("homeBox");
        $(".logo").addClass("logo");
        $(".matchupRow").addClass("matchupRow");
        $(".printRow").addClass("printRow");
        $(".teamName").addClass("teamName");
    }
    
    gameData.Schedule.forEach(function(game) {

        if(game["gameWeek"] === week) {

            // Isolate useful variables
            var gameDate = game["gameDate"];
            var gameTime = game["gameTimeET"];
            var awayTeam = game["awayTeam"];
            var homeTeam = game["homeTeam"];
            var homeScore = parseInt(game["homeScore"]);
            var awayScore = parseInt(game["awayScore"]);
            var winner = game["winner"];


            // Append data to table
            $("#gameDataTable").append(
                "<tr class='matchupRow'>" + 
                    "<td>" + 
                        "<img class='logo' src='" + getTeamLogo(awayTeam) + "'/>" + "<input class='awayBox' type='checkbox'><span class='teamName'>" + getTeamMascot(awayTeam) + "</span>" +
                    "</td>" +
                    "<td>" +
                        "<img class='logo' src='" + getTeamLogo(homeTeam) + "'/>" + "<input class='homeBox' type='checkbox'><span class='teamName'>" + getTeamMascot(homeTeam) + "</span>" +
                    "</td>" +
                    "<td>" + 
                        convToDate(gameDate) + " " + gameTime + 
                    "</td>" +
                    "<td>" +
                        formatScore(awayScore, homeScore) +
                    "</td>" +
                    "<td>" +
                        "<img class='logo' src='" + getTeamLogo(winner) + "'/>" + "<span class='teamName'>" + getTeamMascot(winner) + "</span>" +
                    "</td>" + 
                "</tr>"
            )}
     });

    // Append the print row at the bottom
    $("#gameDataTable").append(
    "<tr class='printRow'>" +
        "<td colspan='5'>Total Points Scored On The Last Game Of the Sheet  " + 
        "<input type='text'>" +
            "<div class='printButton'><button class='btn btn-info' onClick='window.print()';><i class='fa fa-print'></i> Print Schedule</button>" + 
        "</div>" + 
        "</td>" + 
    "</tr>"
    )

    addAllClasses();

    // Add title based on which week is selected
    $("#weekNumber").append("<span class='weekSpace'>Week " + week + " Schedule</span");

    // Toggle highlighting boxes
    $(".homeBox").on("click", function() {
        $(this).parent().toggleClass("highlight");
    });
        
    $(".awayBox").on("click", function() {
        $(this).parent().toggleClass("highlight");
    });
}

var getEventData = function () {
    var apiURL = "https://www.fantasyfootballnerd.com/service/schedule/json/w867b9rnzfx3/";

	// Call API and format data into table
	$.ajax({
		method: "GET",
		url: apiURL,
		dataType: 'json',
		success: function(json) {
			if (json) {
                    gameData = json;
        
                $("#getButton").prop("disabled", false);
                $("#gameWeek").prop("disabled", false);
			// If no JSON is returned
			} else {
				$("#noJSON").css("display", "block");
			}
	
		}
     });
    $("#getButton").prop("disabled", false);
    $("#gameWeek").prop("disabled", false);
}

// Display data for the week selected
$("#getButton").click(displayData);

// All team info
var teams = [
        {
            abbr:"ARI",
            name:"Cardinals",
            imageURL:"images/Cardinals.png"
        }, 
        {
            abbr:"ATL",
            name:"Falcons",
            imageURL:"images/Falcons.png"
        },
        {
            abbr:"BAL",
            name:"Ravens",
            imageURL:"images/Ravens.png"
        },
        {
            abbr:"BUF",
            name:"Bills",
            imageURL:"images/Bills.png"
        },{
            abbr:"CAR",
            name:"Panthers",
            imageURL:"images/Panthers.png"
        },
        {
            abbr:"CHI",
            name:"Bears",
            imageURL:"images/Bears.png"
        },
        {
            abbr:"CIN",
            name:"Bengals",
            imageURL:"images/Bengals.png"
        },
        {
            abbr:"CLE",
            name:"Browns",
            imageURL:"images/Browns.png"
        },
        {
            abbr:"DAL",
            name:"Cowboys",
            imageURL:"images/Cowboys.png"
        },
        {
            abbr:"DEN",
            name:"Broncos",
            imageURL:"images/Broncos.png"
        },
        {
            abbr:"DET",
            name:"Lions",
            imageURL:"images/Lions.png"
        },
        {
            abbr:"GB",
            name:"Packers",
            imageURL:"images/Packers.png"
        },
        {
            abbr:"HOU",
            name:"Texans",
            imageURL:"images/Texans.png"
        },
        {
            abbr:"IND",
            name:"Colts",
            imageURL:"images/Colts.png"
        },
        {
            abbr:"JAC",
            name:"Jaguars",
            imageURL:"images/Jaguars.png"
        },
        {
            abbr:"KC",
            name:"Chiefs",
            imageURL:"images/Chiefs.png"
        },
        {
            abbr:"LAC",
            name:"Chargers",
            imageURL:"images/Chargers.png"
        },
        {
            abbr:"LAR",
            name:"Rams",
            imageURL:"images/Rams.png"
        },
        {
            abbr:"LV",
            name:"Raiders",
            imageURL:"images/Raiders.png"
        },
        {
            abbr:"MIA",
            name:"Dolphins",
            imageURL:"images/Dolphins.png"
        },
        {
            abbr:"MIN",
            name:"Vikings",
            imageURL:"images/Vikings.png"
        },
        {
            abbr:"NE",
            name:"Patriots",
            imageURL:"images/Patriots.png"
        },
        {
            abbr:"NO",
            name:"Saints",
            imageURL:"images/Saints.png"
        },
        {
            abbr:"NYG",
            name:"Giants",
            imageURL:"images/Giants.png"
        },
        {
            abbr:"NYJ",
            name:"Jets",
            imageURL:"images/Jets.png"
        },
        {
            abbr:"PHI",
            name:"Eagles",
            imageURL:"images/Eagles.png"
        },
        {
            abbr:"PIT",
            name:"Steelers",
            imageURL:"images/Steelers.png"
        },
         {
            abbr:"SEA",
            name:"Seahawks",
            imageURL:"images/Seahawks.png"
        },
        {
            abbr:"SF",
            name:"49ers",
            imageURL:"images/49ers.png"
        },
        {
            abbr:"TB",
            name:"Buccaneers",
            imageURL:"images/Bucs.png"
        },
        {
            abbr:"TEN",
            name:"Titans",
            imageURL:"images/Titans.png"
        },
        {
            abbr:"WAS",
            name:"Washington",
            imageURL:"images/Washington.png"
        },
        {
        	abbr:"TIE",
        	name:"Tie",
        	imageURL:"images/Tie.jpg"
        }
    ];

$(document).ready(getEventData);