export default {
	myFun1 () {
		{{get_latest.run().then(() => add_weather_to_latest.run())}}
	},
}