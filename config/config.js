/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:10.0.0.1/120", "10.0.0.1/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: 'MMM-Remote-Control',
			position: 'bottom_left',
			header: 'Remote URL',
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
				// classes: {} // Optional, See "Custom Classes" below
			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Upcoming Events",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar",
						url: "https://rest.cozi.com/api/ext/1103/3cc0e090-23b4-4d4e-a7de-4d8f173bc2a9/icalendar/feed/feed.ics"
					},
					{
						symbol: "calendar",
						url: "https://calendar.google.com/calendar/ical/tylerjweed%40gmail.com/public/basic.ics"
					}
				]
			}
		},
		{
            module: 'MMM-Carousel',
            config: {
                transitionInterval: 10000,
                ignoreModules: [],
                mode: 'positional',
                bottom_left: {enabled: true, ignoreModules: [], overrideTransitionInterval: 10000},
                top_right: {enabled: false, ignoreModules: []}
            }
        },
		{
    		module: "MMM-DailyBuddhismWisdom",
    		position: "bottom_left",
    		config: {
        		font_size: "large",
        		font_weight: "600",
        		text_align: "center",
        		show_author_book: false
    		}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				user: "Tyler"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Gloucester",
				locationID: "4937829", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "a6b96781aa37b69e37f6070da71cad8e"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Daily Forecast - ",
			config: {
				weatherProvider: "openweathermap",
				type: "daily",
				location: "Gloucester",
				locationID: "4937829", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "a6b96781aa37b69e37f6070da71cad8e"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_right",
			config: {
				showDescription: true,
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},

				]
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
