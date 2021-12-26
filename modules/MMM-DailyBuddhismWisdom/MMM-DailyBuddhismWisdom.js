Module.register("MMM-DailyBuddhismWisdom", {
	defaults: {
		show_page: true,
		font_size: "small",
		font_weight: "bold",
		text_align: "left",
		line_height: "1",
		show_author_book: true,
	},
	today: 0,
	start: function () {
	},
	getDom: function() {
		const wrapper = document.createElement("div");
		
		let title = document.createElement("div")
		title.className = "bright medium light"
		title.style.textAlign = "center"
		title.style.lineHeight = "2"
		
		let wisdom = document.createElement("div")
		wisdom.className = "normal small regular"
		wisdom.style.textAlign = "center"
		wisdom.style.lineHeight = "1.25"
		
		
		if (this.today > 0){
			if (this.config.show_page)
				title.innerHTML = "Day: " + this.today + " - " + this.saveinfo[0]
				wisdom.innerHTML = this.saveinfo[1]
			if (this.config.show_author_book)
				wisdom.innerHTML = wisdom.innerHTML + " - Thich Nhat Hanh, \"YourTrueHome\""
		}
		
		wrapper.appendChild(title);
		wrapper.appendChild(wisdom);
		return wrapper
	},
	notificationReceived: function(notification, payload, sender) {
		switch(notification){
			case "DOM_OBJECTS_CREATED":
				let timer = setInterval(()=>{
					newday = moment().format('DDDD').toString()
					//only ask for info once a day
					if (newday != this.today){
						this.today = newday
						Log.log("asking for info for day: " + this.today)
						this.sendSocketNotification("DO_YOUR_JOB", this.today)
					}
				}, 1000)
				break
		}
	},
	socketNotificationReceived: function(notification, payload) {
		switch(notification){
			case "I_DID":
				// save the address of the payload
				this.saveinfo = payload
				// tell MM we have new content to display
				this.updateDom(200)
				break
		}
	},
});

