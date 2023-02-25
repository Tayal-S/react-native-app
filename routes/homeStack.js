import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../screens/Home";
import {Weather} from "../screens/Weather";
import {Feedback} from "../screens/Feedback";

const screens ={
Home:{
    screen:Home
},
Weather:{
    screen:Weather
},
Feedback:{
    screen:Feedback
},
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);